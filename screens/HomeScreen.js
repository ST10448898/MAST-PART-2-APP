import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch menu items from API or local storage
    axios.get('https://your-api-url/menu')
      .then(response => setMenu(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - {item.price}</Text>
          </View>
        )}
      />
      <Button title="Manage Menu" onPress={() => navigation.navigate('MenuManagement')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default HomeScreen;