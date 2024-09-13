import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MyAppbar({ back }) {
  const navigation = useNavigation(); 

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      )}
      <Appbar.Content title={"Nav"} />
    </Appbar.Header>
  );
}