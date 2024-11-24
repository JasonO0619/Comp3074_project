import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PostDetailPage({ navigation, route }) {
  const { item } = route.params;

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Item details are unavailable.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
        <Text style={styles.detailText}>Title: {item.title}</Text>
        <Text style={styles.detailText}>Description: {item.description || 'No description provided'}</Text>
        <Text style={styles.detailText}>Location Found: {item.locationFound || 'Not provided'}</Text>
        <Text style={styles.detailText}>Current Location: {item.currentLocation || 'Not provided'}</Text>
        <Text style={styles.detailText}>Additional Comments:</Text>
        <TextInput
          style={styles.commentsInput}
          placeholder="In here would be any additional information or comments presented..."
          multiline
          editable={false}
        />
      </View>

      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => navigation.navigate('ContactPage')}
      >
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#6ab0af',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
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
  errorText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
