import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ContactDetailScreen({route} : any ) {
  const { contact } = route.params; 

  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: contact.image }} style={styles.contactImage} /> */}
      <Image source={{ uri: "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg" }} style={styles.contactImage} />
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactPhone}>{contact.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  contactImage: { width: 150, height: 150, borderRadius: 100, marginBottom: 50 },
  contactName: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  contactPhone: { fontSize: 18 },
});
