// src/screens/Home/HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header / Hero */}
        <View style={styles.hero}>
          <Image
            source={{ uri: "https://http://agrovets.vercel.app//banner.jpg" }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaText}>Explorar catálogo</Text>
          </Pressable>
        </View>

        {/* Categorías destacadas */}
        <View style={styles.categories}>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Productos</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Vademécum</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Calculadoras</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text style={styles.cardTitle}>Distribuidores</Text>
          </Pressable>
        </View>

        {/* Sección de destacados / recomendaciones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recomendados</Text>
          <View style={styles.productGrid}>
            {/* Aquí podrías mapear productos reales */}
            <View style={styles.productCard}>
              <Text>Producto 1</Text>
            </View>
            <View style={styles.productCard}>
              <Text>Producto 2</Text>
            </View>
            {/* ... */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 16 },
  hero: { marginBottom: 24 },
  heroImage: { width: "100%", height: 180, borderRadius: 8 },
  ctaButton: {
    marginTop: -40,
    alignSelf: "center",
    backgroundColor: "#2a9d8f",
    padding: 12,
    borderRadius: 8,
  },
  ctaText: { color: "#fff", fontWeight: "bold" },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  card: {
    width: "48%",
    backgroundColor: "#e9ecef",
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: "600" },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
});
