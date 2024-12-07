import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, Alert } from 'react-native';
import { registerUser } from '../../config/Database'; // Pastikan path ini sesuai dengan tempat kamu menaruh fungsi registerUser

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Fungsi untuk menangani proses registrasi
  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua kolom harus diisi');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Kata sandi dan konfirmasi kata sandi tidak cocok');
      return;
    }

    setLoading(true); // Tampilkan loading saat registrasi berlangsung

    try {
      // Panggil fungsi registerUser dari Firebase Authentication
      const user = await registerUser(email, password);
      console.log('Registrasi berhasil:', user);

      // Navigasi ke halaman login setelah registrasi berhasil
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saat registrasi:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat registrasi');
    } finally {
      setLoading(false); // Matikan loading setelah selesai
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-lg shadow-lg w-80">
        <Text className="text-center text-2xl font-bold text-gray-800 mb-2">Tata Ruang Kabupaten Halmahera Utara</Text>
        <Text className="text-center text-gray-600 mb-6">Buat Akun Untuk Melakukan Prediksi</Text>

        {/* Input Email */}
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Input Kata Sandi */}
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
          placeholder="Kata Sandi"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Input Konfirmasi Kata Sandi */}
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-6 text-gray-800"
          placeholder="Konfirmasi Kata Sandi"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Tombol Daftar */}
        <TouchableOpacity
          className="bg-blue-500 rounded-lg py-3"
          onPress={handleRegister}
          disabled={loading}
        >
          <Text className="text-center text-white font-bold text-lg">
            {loading ? 'Mendaftar...' : 'Daftar'}
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mt-4">
        <Text className="text-gray-600">Sudah punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-blue-500 font-bold">Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
