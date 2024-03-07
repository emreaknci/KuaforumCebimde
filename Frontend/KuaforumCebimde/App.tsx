import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
