import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function UserPage() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.avatarPlaceholder}>
          <FontAwesome name="user-circle" size={100} color="#5C6BC0" />
        </View>
        <Text style={styles.userName}>User Name</Text>
        <View style={styles.statsSection}>
          <View style={styles.statsItem}>
            <Text style={styles.statsNumber}>2</Text>
            <Text style={styles.statsLabel}>Posts</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsNumber}>num</Text>
            <Text style={styles.statsLabel}>Followers</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsNumber}>num</Text>
            <Text style={styles.statsLabel}>Following</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.gallerySection}>
        {[...Array(9)].map((_, index) => (
          <View key={index} style={styles.galleryItem}>
            <FontAwesome name="image" size={50} color="#8e8e93" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab0af',
    paddingTop: 20,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#e6dfff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b2dfdb',
  },
  userName: {
    fontSize: 18,
    color: '#5C6BC0',
    fontWeight: 'bold',
    marginTop: 10,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  statsItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C6BC0',
  },
  statsLabel: {
    fontSize: 14,
    color: '#5C6BC0',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followButton: {
    backgroundColor: '#f28b82',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  messageButton: {
    backgroundColor: '#ea80fc',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  gallerySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  galleryItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#b2dfdb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
});
