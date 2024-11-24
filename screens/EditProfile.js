import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function EditProfilePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={{ width: 24 }} /> {/* Placeholder to balance the back button */}
      </View>

      <View style={styles.avatarSection}>
        <View style={styles.avatarPlaceholder}>
          <FontAwesome name="user-circle" size={100} color="#8e8e93" />
        </View>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload Icon</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#8e8e93"
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#8e8e93"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#8e8e93"
        />
        <Text style={styles.label}>Change Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Change Password"
          placeholderTextColor="#8e8e93"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab0af',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    paddingLeft: 45,
    flex: 1,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e6dfff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    marginLeft: 5,
  },
  uploadButton: {
    backgroundColor: '#f28b82',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  updateButton: {
    backgroundColor: '#FF8B94',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
