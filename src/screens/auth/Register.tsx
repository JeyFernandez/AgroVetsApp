import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';
import Button from '../../components/ui/Button';

export default function RegisterScreen() {
	const navigation = useNavigation<any>();

	// Step 1 fields
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');

	// Step 2 fields
	const [profile, setProfile] = useState<'Cliente' | 'Especialista' | 'Businessman' | ''>('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [about, setAbout] = useState('');

	const [step, setStep] = useState(1);
	const [error, setError] = useState('');
	const [showProfileOptions, setShowProfileOptions] = useState(false);

	function goNext() {
		setError('');
		if (step === 1) {
			if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
				setError('Completa todos los campos del primer paso.');
				return;
			}
			setStep(2);
			return;
		}
	}

	function goBack() {
		setError('');
		if (step === 2) setStep(1);
	}

	function submit() {
		setError('');
		if (!profile || !password || !confirm) {
			setError('Completa los campos requeridos en el segundo paso.');
			return;
		}
		if (password.length < 6) {
			setError('La contraseña debe tener al menos 6 caracteres.');
			return;
		}
		if (password !== confirm) {
			setError('Las contraseñas no coinciden.');
			return;
		}

		// Aquí iría la llamada a la API de registro. Por ahora navegamos al Main.
		navigation.navigate('Main');
	}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={styles.header} />
				<View style={styles.sheet}>
					<Text style={styles.title}>Registro</Text>
					<Text style={styles.subtitle}>Crea tu cuenta en AgroVets</Text>

					{step === 1 && (
						<View>
							<TextInput value={firstName} onChangeText={setFirstName} placeholder="Nombre" style={styles.input} />
							<TextInput value={lastName} onChangeText={setLastName} placeholder="Apellido" style={styles.input} />
							<TextInput value={phone} onChangeText={setPhone} placeholder="Teléfono" style={styles.input} keyboardType="phone-pad" />

							<View style={styles.actionsRow}>
								<TouchableOpacity onPress={() => navigation.navigate('Login')}>
									<Text style={styles.link}>¿Ya tienes cuenta? Iniciar sesión</Text>
								</TouchableOpacity>
								<Button onPress={goNext} style={{ width: 140 }}>
									Siguiente
								</Button>
							</View>
						</View>
					)}

					{step === 2 && (
						<View>
							<Text style={styles.stepLabel}>Perfil</Text>
							<TouchableOpacity style={styles.dropdown} onPress={() => setShowProfileOptions((s) => !s)}>
								<Text style={{ color: profile ? '#000' : '#8b8b8b' }}>{profile || 'Selecciona perfil'}</Text>
							</TouchableOpacity>
							{showProfileOptions && (
								<View style={styles.optionsBox}>
									{(['Cliente', 'Especialista', 'Businessman'] as const).map((p) => (
										<TouchableOpacity
											key={p}
											onPress={() => {
												setProfile(p);
												setShowProfileOptions(false);
											}}
											style={styles.optionItem}
										>
											<Text>{p}</Text>
										</TouchableOpacity>
									))}
								</View>
							)}

							<TextInput value={password} onChangeText={setPassword} placeholder="Contraseña" style={styles.input} secureTextEntry />
							<TextInput value={confirm} onChangeText={setConfirm} placeholder="Confirmar contraseña" style={styles.input} secureTextEntry />

							<Text style={[styles.stepLabel, { marginTop: 8 }]}>Sobre mí (opcional)</Text>
							<TextInput value={about} onChangeText={setAbout} placeholder="Cuéntanos sobre ti" style={[styles.input, styles.textarea]} multiline numberOfLines={4} />

							<View style={styles.actionsRow}>
								<Button variant="ghost" onPress={goBack} style={{ width: 140 }}>
									Volver
								</Button>
								<Button onPress={submit} style={{ width: 140 }}>
									Crear cuenta
								</Button>
							</View>
						</View>
					)}

					{error ? <Text style={styles.error}>{error}</Text> : null}
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	header: { height: 160, backgroundColor: colors.primaryBlue, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
	sheet: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, marginTop: -30 },
	title: { fontSize: 22, fontWeight: '800', color: colors.text, marginBottom: 6 },
	subtitle: { color: '#6b6b6b', marginBottom: 14 },
	input: { backgroundColor: '#f6f7f5', padding: 12, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#eef0ec' },
	textarea: { minHeight: 80, textAlignVertical: 'top' },
	actionsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
	link: { color: colors.primaryBlue, textDecorationLine: 'underline' },
	dropdown: { backgroundColor: '#f6f7f5', padding: 12, borderRadius: 10, borderWidth: 1, borderColor: '#eef0ec', marginBottom: 6 },
	optionsBox: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#e6e6e6', marginBottom: 10 },
	optionItem: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
	stepLabel: { fontWeight: '700', marginBottom: 6 },
	error: { color: '#b00020', marginTop: 10 },
});
