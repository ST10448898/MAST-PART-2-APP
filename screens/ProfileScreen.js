// src/screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [profile, setProfile] = useState({ name: '', contact: '', feedback: '' });

  const handleSave = () => {
    // Save the updated profile information
    alert('Profile Saved');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" value={profile.name} onChangeText={(text) => setProfile({ ...profile, name: text })} />
      <TextInput style={styles.input} placeholder="Contact Info" value={profile.contact} onChangeText={(text) => setProfile({ ...profile, contact: text })} />
      <TextInput style={styles.input} placeholder="Feedback" value={profile.feedback} onChangeText={(text) => setProfile({ ...profile, feedback: text })} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
});

export default ProfileScreen;