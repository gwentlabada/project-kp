import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const logoHalut = require('../../../assets/img/logoHalut.png');
import * as Linking from "expo-linking";

const Home: React.FC = () => {    
  return (
    <View className="pt-16 px-6 bg-blue-900 flex-1">
      {/* Elemen Header */}
      <View className="items-center mb-16 h-[20vh]">
        <View className="bg-white absolute h-[464px] w-[424px] top-[-140px] rounded-full items-center justify-center">
          <Text className="text-black text-center uppercase text-xl font-bold">Tata Ruang</Text>
          <Text className="text-black text-center uppercase text-lg mt-3 font-bold">Kabupaten Halmahera Utara</Text>
        </View>
      </View>

      {/* Elemen Logo */}
      <View className="items-center mb-16">
        <View className="bg-white p-5 rounded-full">
          <Image className="w-24 h-32" source={logoHalut} />
        </View>
      </View>

      {/* Elemen Grid */}
      <View className="flex-row flex-wrap justify-between gap-3">
        {/* Tombol 1 */}
        <TouchableOpacity
          className="bg-white rounded-md px-1 py-5 w-[30%]"
          onPress={() => Linking.openURL("https://arcg.is/1eDSni")}
        >
          <Text className="text-center text-sm">RTRW/RDTR</Text>
        </TouchableOpacity>
        {/* Tombol 2 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => Linking.openURL("https://experience.arcgis.com/experience/fd022572bda94985a77f6e9e1dceb030?views=View-23")}
        >
          <Text className="text-center text-sm">SIPETARUNG</Text>
        </TouchableOpacity>
        {/* Tombol 3 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => Linking.openURL("https://experience.arcgis.com/experience/c235e278c2194d2499d1172ff1eb47b1/page/FPR/")}
        >
          <Text className="text-center text-sm">FPR</Text>
        </TouchableOpacity>
        {/* Tombol 4 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => Linking.openURL("https://sapa-halut.maps.arcgis.com/apps/webappviewer/index.html?id=05f82c0c2b3742d88bf959a0e5e086a2&extent=14126360.9278%2C156317.1039%2C14326167.3197%2C223581.6888%2C102100")}
        >
          <Text className="text-center text-sm">Pengendalian</Text>
        </TouchableOpacity>
        {/* Tombol 5 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => Linking.openURL("https://experience.arcgis.com/experience/c235e278c2194d2499d1172ff1eb47b1/page/REGULASI%2F-ATURAN/")}
        >
          <Text className="text-center text-sm">Aturan</Text>
        </TouchableOpacity>
        {/* Tombol 6 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => Linking.openURL("https://bhumi.atrbpn.go.id/peta")}

        >
          <Text className="text-center text-sm">Bhumi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
