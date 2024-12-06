import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Platform, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

// Tipe data untuk state
interface FormState {
  selectedKecamatan: string | null;
  tanggalPermohonan: Date;
  showDatePicker: boolean;
  selectedFile: string | null;
}

// Daftar Kecamatan (contoh)
const kecamatanOptions = [
  { label: "Kecamatan Loloda Kepulauan", value: "kecamatan_a" },
  { label: "Kecamatan Loloda Utara", value: "kecamatan_b" },
  { label: "Kecamatan Galela Utara", value: "kecamatan_c" },
  { label: "Kecamatan Galela Barat", value: "kecamatan_d" },
  { label: "Kecamatan Galela Selatan", value: "kecamatan_e" },
  { label: "Kecamatan Galela", value: "kecamatan_f" },
  { label: "Kecamatan Tobelo Utara", value: "kecamatan_g" },
  { label: "Kecamatan Tobelo", value: "kecamatan_h" },
  { label: "Kecamatan Tobelo Tengah", value: "kecamatan_i" },
  { label: "Kecamatan Tobelo Selatan", value: "kecamatan_j" },
  { label: "Kecamatan Tobelo Timur", value: "kecamatan_k" },
  { label: "Kecamatan Tobelo Barat", value: "kecamatan_l" },
  { label: "Kecamatan Kao Utara", value: "kecamatan_m" },
  { label: "Kecamatan Kao Barat", value: "kecamatan_n" },
  { label: "Kecamatan Kao", value: "kecamatan_o" },
  { label: "Kecamatan Malifut", value: "kecamatan_p" },
  { label: "Kecamatan Kao Teluk", value: "kecamatan_q" },
];

const Form = () => {
  const [formState, setFormState] = useState<FormState>({
    selectedKecamatan: null,
    tanggalPermohonan: new Date(),
    showDatePicker: false,
    selectedFile: null,
  });

  // Fungsi untuk menangani perubahan tanggal
  const handleDateChange = (selectedDate: Date) => {
    const currentDate = selectedDate || formState.tanggalPermohonan;
    setFormState((prevState) => ({
      ...prevState,
      showDatePicker: Platform.OS === "ios" ? true : false,
      tanggalPermohonan: currentDate,
    }));
  };

  // Fungsi untuk menampilkan tanggal dalam format DD-MM-YYYY
  const formatTanggal = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleFileUpload = async () => {
    try {
      // Gunakan `any` di sini untuk menghindari masalah tipe
      const result: any = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Anda bisa spesifik seperti "application/pdf"
        copyToCacheDirectory: true,
      });

      if (result.type === "success") {
        // Pastikan result.uri ada dan dapat digunakan
        const fileUri = result.uri;
        const fileName = result.name || "File Tanpa Nama"; // Default jika tidak ada nama file

        // Menyimpan file yang dipilih ke state
        setFormState((prevState) => ({
          ...prevState,
          selectedFile: fileUri,
        }));

        Alert.alert("File Dipilih", `Nama File: ${fileName}`);
      } else {
        // Jika tidak ada file yang dipilih, beri tahu pengguna
        Alert.alert("Tidak ada file yang dipilih", "Silakan pilih file yang valid.");
      }
    } catch (error) {
      console.error("Error saat memilih file:", error);
      Alert.alert("Terjadi kesalahan", "Gagal memilih file.");
    }
  };

  return (
    <View className="flex-1 bg-blue-900">
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-2xl text-white font-bold mb-6 text-center">
          Formulir Permohonan
        </Text>

        {/* Input Nama Pemohon */}
        <View className="mb-4">
          <Text className="text-white mb-2">Nama Pemohon</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Masukkan Nama Pemohon"
            placeholderTextColor="#A3A3A3"
          />
        </View>

        {/* Input NIK */}
        <View className="mb-4">
          <Text className="text-white mb-2">NIK</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Masukkan NIK"
            placeholderTextColor="#A3A3A3"
            keyboardType="numeric"
          />
        </View>

        {/* Input Pekerjaan */}
        <View className="mb-4">
          <Text className="text-white mb-2">Pekerjaan</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Masukkan Pekerjaan"
            placeholderTextColor="#A3A3A3"
          />
        </View>

        {/* Input NPWP */}
        <View className="mb-4">
          <Text className="text-white mb-2">NPWP</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Masukkan NPWP"
            placeholderTextColor="#A3A3A3"
            keyboardType="numeric"
          />
        </View>

        {/* Input NO_HP */}
        <View className="mb-4">
          <Text className="text-white mb-2">Nomor Telepon</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Masukkan Nomor Telepon"
            placeholderTextColor="#A3A3A3"
            keyboardType="numeric"
          />
        </View>

         {/* Input Alamat */}
         <View className="mb-4">
          <Text className="text-white mb-2">Alamat Pemohon</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Masukkan Alamat Lengkap"
            placeholderTextColor="#A3A3A3"
          />
        </View>

        {/* Input Kecamatan (Dropdown) */}
        <View className="mb-4">
          <Text className="text-white mb-2">Kecamatan</Text>
          <RNPickerSelect
            onValueChange={(value) => setFormState((prevState) => ({ ...prevState, selectedKecamatan: value }))}
            items={kecamatanOptions}
            placeholder={{ label: "Pilih Kecamatan", value: null }}
            value={formState.selectedKecamatan}
            style={{
              inputIOS: {
                backgroundColor: "white",
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 6,
                color: "black",
              },
              inputAndroid: {
                backgroundColor: "white",
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 6,
                color: "black",
              },
              placeholder: {
                color: "#A3A3A3",
              },
            }}
          />
        </View>

         {/* Input Desa */}
         <View className="mb-4">
          <Text className="text-white mb-2">Desa</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Letak Lokasi Permohonan"
            placeholderTextColor="#A3A3A3"
          />
        </View>

         {/* Input Maksud_Permohonan */}
         <View className="mb-4">
          <Text className="text-white mb-2">Maksud Permohonan</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Contoh: Bengkel, Ruko, Kantor, dll"
            placeholderTextColor="#A3A3A3"
          />
        </View>

        {/* Input Tanggal Permohonan */}
        <View className="mb-4">
          <Text className="text-white mb-2">Tanggal Permohonan</Text>
          <TouchableOpacity
            className="bg-white text-black rounded-md px-4 py-2"
            onPress={() => setFormState((prevState) => ({ ...prevState, showDatePicker: true }))}
          >
            <Text className="text-center">{formatTanggal(formState.tanggalPermohonan)}</Text>
          </TouchableOpacity>
          {formState.showDatePicker && (
            <DateTimePicker
              value={formState.tanggalPermohonan}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => handleDateChange(selectedDate!)}
            />
          )}
        </View>

         {/* Input Jlh_LANTAI BANGUNAN */}
         <View className="mb-4">
          <Text className="text-white mb-2">Jumlah Lantai Bangunan</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Jumlah Lantai Akan Dibangun"
            placeholderTextColor="#A3A3A3"
            keyboardType="numeric"
          />
        </View>

         {/* Input LUAS LANTAI BANGUNAN */}
         <View className="mb-4">
          <Text className="text-white mb-2">Luas Lantai Bangunan</Text>
          <TextInput
            className="bg-white text-black rounded-md px-4 py-2"
            placeholder="Luas Lantai Direncanakan"
            placeholderTextColor="#A3A3A3"
            keyboardType="numeric"
          />
        </View>

        {/* Tombol Unggah File RTB/RIW */}
        <View className="mb-4">
          <Text className="text-white mb-2">Rencana Teknis Bangunan (Denah, Site Plan)</Text>
          <TouchableOpacity
            className="bg-white rounded-md px-4 py-3"
            onPress={handleFileUpload}
          >
            <Text className="text-center text-black">
              {formState.selectedFile ? "File Terpilih: " + formState.selectedFile.split("/").pop() : "Pilih File"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Unggah Penggunaan Air Baku */}
        <View className="mb-4">
          <Text className="text-white mb-2">Rencana Penggunaan Air Baku</Text>
          <TouchableOpacity
            className="bg-white rounded-md px-4 py-3"
            onPress={handleFileUpload}
          >
            <Text className="text-center text-black">
              {formState.selectedFile ? "File Terpilih: " + formState.selectedFile.split("/").pop() : "Pilih File"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Berkas Permohonan */}
        <View className="mb-4">
          <Text className="text-white mb-2">Berkas Permohonan</Text>
          <TouchableOpacity
            className="bg-white rounded-md px-4 py-3"
            onPress={handleFileUpload}
          >
            <Text className="text-center text-black">
              {formState.selectedFile ? "File Terpilih: " + formState.selectedFile.split("/").pop() : "Pilih File"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol UnggaH ktp */}
        <View className="mb-4">
          <Text className="text-white mb-2">Foto KTP</Text>
          <TouchableOpacity
            className="bg-white rounded-md px-4 py-3"
            onPress={handleFileUpload}
          >
            <Text className="text-center text-black">
              {formState.selectedFile ? "File Terpilih: " + formState.selectedFile.split("/").pop() : "Pilih File"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol UnggaH NPWP */}
        <View className="mb-4">
          <Text className="text-white mb-2">Foto NPWP</Text>
          <TouchableOpacity
            className="bg-white rounded-md px-4 py-3"
            onPress={handleFileUpload}
          >
            <Text className="text-center text-black">
              {formState.selectedFile ? "File Terpilih: " + formState.selectedFile.split("/").pop() : "Pilih File"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Unggah lokasi pembangunan */}
        <View className="mb-4">
          <Text className="text-white mb-2">Foto Lokasi Pembangunan</Text>
          <TouchableOpacity
            className="bg-white rounded-md px-4 py-3"
            onPress={handleFileUpload}
          >
            <Text className="text-center text-black">
              {formState.selectedFile ? "File Terpilih: " + formState.selectedFile.split("/").pop() : "Pilih File"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Submit */}
        <TouchableOpacity className="bg-green-500 rounded-md py-3 mt-6">
          <Text className="text-center text-white font-bold text-lg">Kirim</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Form;
