import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Bem Vindo ao CigaRats',

            headerLeft: () => (
              <Ionicons
                name="list-outline"
                size={24}
                color="yellow"
                style={{ marginRight: 15 }}
                onPress={() => alert('Botão pressionado!')}
              />
            ),

            headerRight: () => (
              <Ionicons
                name="settings-outline"
                size={24}
                color="yellow"
                style={{ marginRight: 15 }}
                onPress={() => alert('Botão pressionado!')}
              />
            ),
          }}

          

        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

