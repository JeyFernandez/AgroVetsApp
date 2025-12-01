import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from "../../theme";

export default function Button({
  children,
  onPress,
  style,
  variant = "primary",
}: {
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
  variant?: "primary" | "ghost";
}) {
  const bg = variant === "primary" ? colors.primaryBlue : "transparent";
  const txtColor = variant === "primary" ? "#fff" : colors.primaryBlue;

  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bg }, style]}
      onPress={onPress}
      activeOpacity={0.85}>
      <Text style={[styles.txt, { color: txtColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  txt: { fontWeight: "700" },
});
