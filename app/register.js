import { View, Text, TextInput, TouchableOpacity, Image, Platform, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import logo from '../assets/images/logo.png';
import Svg, { Path } from 'react-native-svg';
import "@/global.css";

export default function RegisterScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isWeb = Platform.OS === 'web';

  const handleRegister = () => {
    if (!fullName || !username || !email || !password || !confirmPassword) {
      return Alert.alert("Error", "Completa todos los campos");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Error", "Las contraseñas no coinciden");
    }

    Alert.alert("Registro exitoso", "Ahora puedes iniciar sesión");
    router.replace('/');
  };

  const handleBackToLogin = () => {
    router.push('/');
  };

  const FormContent = () => (
    <>
      <Image
        source={logo}
        className="w-40 h-40 max-w-[160px] max-h-[160px] rounded-full mb-10 self-center"
        resizeMode="contain"
      />
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-4 bg-white text-base"
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-4 bg-white text-base"
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-4 bg-white text-base"
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-4 bg-white text-base"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        className="w-full p-4 border border-gray-300 rounded-xl mb-5 bg-white text-base"
        placeholder="Repetir contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity className="w-full bg-blue-600 p-4 rounded-xl mb-4" onPress={handleRegister}>
        <Text className="text-white text-center font-semibold text-base">Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBackToLogin}>
        <Text className="text-gray-600 text-sm text-center">
          ¿Ya tienes una cuenta? <Text className="text-blue-600 font-semibold">Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </>
  );

  const MobileView = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
      <View className="flex-1 justify-center items-center px-6 py-10">
        <FormContent />
      </View>
    </ScrollView>
  );

  const WebView = () => (
    <View className="w-full h-screen flex justify-center items-center relative bg-blue-100">
      {/* Olas arriba */}
      <Svg
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 200,
        }}
        preserveAspectRatio="none"
      >
        <Path
          fill="#90cdf4"
          fillOpacity="0.5"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,85.3C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </Svg>

      {/* Olas abajo */}
      <Svg
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 200,
        }}
        preserveAspectRatio="none"
      >
        <Path
          fill="#63b3ed"
          fillOpacity="0.4"
          d="M0,224L30,202.7C60,181,120,139,180,138.7C240,139,300,181,360,181.3C420,181,480,139,540,138.7C600,139,660,181,720,186.7C780,192,840,160,900,154.7C960,149,1020,171,1080,186.7C1140,203,1200,213,1260,197.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </Svg>

      <View className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl z-10">
        <FormContent />
      </View>
    </View>
  );

  return isWeb ? <WebView /> : <MobileView />;
}
