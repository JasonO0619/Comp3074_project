import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MyListPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#000" />
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My List</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>Sell</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>Lend</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>Trade</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Text style={styles.tabText}>Found</Text></TouchableOpacity>
      </View>

      <ScrollView style={styles.listContainer}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.imagePlaceholder}>
              <FontAwesome name="image" size={50} color="#8e8e93" />
            </View>
            <Text style={styles.itemTitle}>Title</Text>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
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
    textAlign: 'center',
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  tabItem: {
    paddingHorizontal: 15,
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4db6ac',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#b2dfdb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  itemTitle: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#f28b82',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
