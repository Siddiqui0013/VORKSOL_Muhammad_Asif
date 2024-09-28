import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

<TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Contact List')}
      >
        <Text style={styles.buttonText}>Go to Contact list</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Figma Design')}
      >
        <Text style={styles.buttonText}>Go to Figma Design</Text>
      </TouchableOpacity>

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
  customButton: {
    backgroundColor: 'purple', 
    paddingVertical: 15,
    width:"70%",
    alignItems:"center",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
