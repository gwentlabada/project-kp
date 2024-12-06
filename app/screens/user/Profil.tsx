import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const Profil = () => {
  // Contoh data untuk pengguna
  const user = {
    name: 'John Doe',
    applicationStatus: 'Diterima', // Status permohonan (bisa diterima, diproses, verifikasi, diterbitkan)
  };

  // Fungsi untuk menangani aksi tombol (misalnya untuk logout, tambah permohonan, dll.)
  const handleButtonPress = (action) => {
    console.log(`${action} clicked`);
    // Logika untuk menangani setiap aksi seperti menghubungkan ke database
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-900 p-4">
      <Text className="text-2xl text-white font-bold mb-4">Profil Pengguna</Text>

      <View className="mb-6">
        <Text className="text-lg text-white">Nama: {user.name}</Text>
        <Text className="text-lg text-white mt-2">Status Permohonan: {user.applicationStatus}</Text>
      </View>

      {/* Daftar Status Permohonan */}
      <View className="w-full mb-6">
        <Text className="text-lg text-white mb-2">Status Permohonan:</Text>
        <View className="space-y-2">
          <Text className="text-white">- Diterima</Text>
          <Text className="text-white">- Diproses</Text>
          <Text className="text-white">- Verifikasi</Text>
          <Text className="text-white">- Diterbitkan</Text>
        </View>
      </View>

      {/* Tombol-Tombol Aksi */}
      <View className="w-full space-y-4">
        <TouchableOpacity
          className="bg-green-500 py-2 px-4 rounded"
          onPress={() => handleButtonPress('Tambah Permohonan')}
        >
          <Text className="text-white text-center">Buat Permohonan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-yellow-500 py-2 px-4 rounded"
          onPress={() => handleButtonPress('Daftar Permohonan')}
        >
          <Text className="text-white text-center">Daftar Permohonan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 py-2 px-4 rounded"
          onPress={() => handleButtonPress('Logout')}
        >
          <Text className="text-white text-center">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profil;
