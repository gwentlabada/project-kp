import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-white p-8 rounded-lg shadow-lg w-80">
        <Text className="text-center text-2xl font-bold text-gray-800 mb-2">Sistem Pakar</Text>
        <Text className="text-center text-gray-600 mb-6">Masuk Untuk Melakukan Prediksi</Text>

        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-6 text-gray-800"
          placeholder="Kata Sandi"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="bg-blue-500 rounded-lg py-3"
          onPress={handleLogin}
        >
          <Text className="text-center text-white font-bold text-lg">Masuk</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row mt-4">
        <Text className="text-gray-600">Tidak punya akun? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-blue-500 font-bold">Buat Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
