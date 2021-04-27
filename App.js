import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Calton Cases Measuring Tool</Text>
      <Button
        title="Start!"
        onPress={() => navigation.navigate('Instrument Selection')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function InstrumentSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Please select an instrument type...</Text>
      <Button
        title="Acoustic"
        onPress={() => navigation.navigate('Acoustic')}
      />
    </View>
  );
}

function AcousticScreen() {
  return (
    <View style={styles.container}>
      <Text>Start calibration!</Text>
      <Button
        title="Start"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Instrument Selection"
          component={InstrumentSelectionScreen}
          options={{ title: 'Instrument Selection' }}
        />
        <Stack.Screen
          name="Acoustic"
          component={AcousticScreen}
          options={{ title: 'Acoustic' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
