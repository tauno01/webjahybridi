import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [age, setAge] = useState('')
const [lowerResult, setLower] = useState(0)
const [upperResult, setUpper] = useState(0)

function change(text) {
  setAge(text)
  const ageNumber = parseInt(text);
  const lower = (220 - ageNumber) * 0.65 
  setLower(lower)
  const upper = (220 - ageNumber) * 0.85
  setUpper(upper)
}

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput value={age} keyboardType='numeric' onChangeText={text => setAge(text)} />
      <Text>Limits</Text>
      <Text>{lowerResult.toFixed(0)}-{upperResult.toFixed(0)}</Text>
      <Button title='Calculate' onPress={() => change(age)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
});
