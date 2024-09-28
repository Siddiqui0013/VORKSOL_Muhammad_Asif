import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

<View style={styles.button}>
        <Button
          title="Go to Contact List"
          onPress={() => navigation.navigate('Contact List')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Figma Design Screen"
          onPress={() => navigation.navigate('Figma Design')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width:"70%",
    marginTop:30,
  },
});
