import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ children, onPress }: { children: React.ReactNode; onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#0a84ff', borderRadius: 8 },
  txt: { color: '#fff', fontWeight: '600' },
});
