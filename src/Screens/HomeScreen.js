import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Uma tela não precisa criar o Stack, ela apenas exibe o conteúdo
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao CigaRats!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});