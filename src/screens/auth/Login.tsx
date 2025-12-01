import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fadeAnim] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  function onLogin() {
    navigation.navigate("Main");
  }

  return (
    <LinearGradient
      colors={[colors.primaryBlue, colors.primaryBlueDark]}
      style={styles.gradient}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          
          <Text style={styles.brand}>AgroVets</Text>
          <Text style={styles.brandSubtitle}>Soluciones agro-veterinarias</Text>
        </Animated.View>

        <View style={styles.sheet}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#777"
              style={styles.inputIcon}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Correo o usuario"
              placeholderTextColor="#ababab"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#777"
              style={styles.inputIcon}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
              placeholderTextColor="#ababab"
              style={styles.input}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={onLogin}
            activeOpacity={0.8}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>¿No tienes cuenta?</Text>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("Register")}>
              Crear cuenta
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  wrapper: { flex: 1 },
  header: {
    height: 260,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
    borderRadius: 16,
  },
  brand: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    color: "rgba(255,255,255,0.95)",
    marginTop: 4,
    fontSize: 14,
  },
  sheet: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 4,
    color: colors.text,
  },
  subtitle: {
    color: "#777",
    marginBottom: 18,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f6f8",
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  inputIcon: {
    marginLeft: 12,
    marginRight: 6,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 15,
    color: "#333",
  },
  forgot: {
    color: colors.primaryBlue,
    fontWeight: "500",
    textAlign: "right",
    marginBottom: 18,
  },
  button: {
    backgroundColor: colors.primaryBlue,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { height: 2, width: 0 },
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: { color: "#777" },
  link: {
    color: colors.primaryBlue,
    fontWeight: "700",
    marginLeft: 4,
  },
});
