import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react'

export default function App() {
  const [outputText, setOutputText] = useState('Ayo whats up')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change the text" onPress={() => setOutputText('The text has changed')}/>
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
 