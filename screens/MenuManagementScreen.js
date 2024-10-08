// src/screens/MenuManagementScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MenuManagementScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', course: '', image: '' });

  const addMenuItem = () => {
    setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }]);
    setNewItem({ name: '', description: '', price: '', course: '', image: '' });
  };

  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) {
      setNewItem({ ...newItem, image: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Menu Item</Text>
      <TextInput style={styles.input} placeholder="Dish Name" value={newItem.name} onChangeText={(text) => setNewItem({ ...newItem, name: text })} />
      <TextInput style={styles.input} placeholder="Description" value={newItem.description} onChangeText={(text) => setNewItem({ ...newItem, description: text })} />
      <TextInput style={styles.input} placeholder="Price" value={newItem.price} onChangeText={(text) => setNewItem({ ...newItem, price: text })} />
      <TextInput style={styles.input} placeholder="Course" value={newItem.course} onChangeText={(text) => setNewItem({ ...newItem, course: text })} />
      <Button title="Upload Image" onPress={pickImage} />
      {newItem.image ? <Image source={{ uri: newItem.image }} style={styles.image} /> : null}
      <Button title="Add Menu Item" onPress={addMenuItem} />

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - {item.course}</Text>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <Button title="Remove" onPress={() => deleteMenuItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 8,
  },
  menuItem: {
    marginVertical: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  menuImage: {
    width: 50,
    height: 50,
  },
});

export default MenuManagementScreen;