import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // Import Stack Navigator
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import Home from "./screens/user/Home";
import Profil from "./screens/user/Profil";
import Form from "./screens/user/Form";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";

// Prevent splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create Stack Navigator

// A function that returns the authentication flow (Login/ Register) or the main app (Tab Navigation)
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Conditional logic for showing authentication or the main app based on user state (e.g., logged in)
  const userIsLoggedIn: boolean = false; // Replace this with your actual login state check logic

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      {/* If user is logged in, show the Tab Navigator, otherwise show the Auth Stack */}
      {userIsLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "white", paddingBottom: 8 },
            tabBarLabelStyle: { color: "black" },
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profil" component={Profil} />
          <Tab.Screen name="Form" component={Form} />
        </Tab.Navigator>
      ) : (
        <AuthStack /> // Show the authentication stack (Login/ Register) when not logged in
      )}
    </ThemeProvider>
  );
}
