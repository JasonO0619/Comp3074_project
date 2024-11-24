import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PostDetailPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageSection}>
        <TouchableOpacity style={styles.arrowButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.imagePlaceholder}>
          <FontAwesome name="image" size={100} color="#8e8e93" />
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <FontAwesome name="arrow-right" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailText}>Item Name: (Insert Item Name)</Text>
        <Text style={styles.detailText}>Description: (Insert Description)</Text>
        <Text style={styles.detailText}>Location Found: (Insert Location Found)</Text>
        <Text style={styles.detailText}>Current Location: (Insert Current Location)</Text>
        <Text style={styles.detailText}>Additional Comments:</Text>
        <TextInput
          style={styles.commentsInput}
          placeholder="In here would be any additional information or comments presented..."
          multiline
        />
      </View>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab0af',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
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
  imageSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  arrowButton: {
    padding: 10,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#b2dfdb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  detailSection: {
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  commentsInput: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    textAlignVertical: 'top',
  },
  contactButton: {
    backgroundColor: '#f28b82',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '50%',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
