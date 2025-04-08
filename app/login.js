import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { LogIn } from 'lucide-react-native';
import "@/global.css"

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Iniciar Sesión</Text>
      <TextInput
        className="w-full p-3 border border-gray-300 rounded mb-2"
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded mb-4"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity className="w-full bg-blue-500 p-3 rounded mb-2">
        <Text className="text-white text-center font-bold">Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-full bg-gray-500 p-3 rounded mb-4">
        <Text className="text-white text-center font-bold">Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-full flex-row items-center justify-center p-3 border border-gray-300 rounded">
        <LogIn size={20} color="black" />
        <Text className="ml-2 text-black font-bold">Continuar con Google</Text>
      </TouchableOpacity>
    </View>
  );
}
