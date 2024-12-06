import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-lg shadow-lg w-80">
        <Text className="text-center text-2xl font-bold text-gray-800 mb-2">Sistem Pakar</Text>
        <Text className="text-center text-gray-600 mb-6">Buat Akun Untuk Melakukan Prediksi</Text>

        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
          placeholder="Kata Sandi"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-6 text-gray-800"
          placeholder="Konfirmasi Kata Sandi"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          className="bg-blue-500 rounded-lg py-3"
          onPress={handleRegister}
        >
          <Text className="text-center text-white font-bold text-lg">Daftar</Text>
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
