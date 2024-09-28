import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import contacts from "./assets/contacts"


export default function ContactListScreen( {navigation}: any ) {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.contactItem} 
            onPress={() => navigation.navigate('Contact Details', { contact: item })}
          >
            {/* <Image source={{ uri: item.image }} style={styles.contactImage} /> */}
            <Image source={{ uri: "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg" }} style={styles.contactImage} />
            <View>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactPhone}>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  contactItem: { flexDirection: 'row', padding: 10, alignItems: 'center', borderBottomWidth: 1, borderColor: 'grey' },
  contactImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  contactName: { fontSize: 18, fontWeight: 'bold' },
  contactPhone: { fontSize: 14 },
});
