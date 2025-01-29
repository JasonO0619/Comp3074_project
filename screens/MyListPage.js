import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MyListPage({navigation}) {
  const data = {
    SELL: [
      { id: '1', title: 'Sell Item 1' },
      { id: '2', title: 'Sell Item 2' },
      { id: '3', title: 'Sell Item 3' },
      { id: '4', title: 'Sell Item 4' },
      { id: '5', title: 'Sell Item 5' },
      { id: '6', title: 'Sell Item 6' },
    ],
    LEND: [
      { id: '1', title: 'Lend Item A' },
      { id: '2', title: 'Lend Item B' },
      { id: '3', title: 'Lend Item C' },
      { id: '9', title: 'Sell Item 9' },
      { id: '8', title: 'Sell Item 8' },
      { id: '7', title: 'Sell Item 7' },
    ],
    TRADE: [
      { id: '1', title: 'Trade Item X' },
      { id: '2', title: 'Trade Item Y' },
      { id: '3', title: 'Trade Item Z' },
      { id: '5', title: 'Sell Item A' },
      { id: '6', title: 'Sell Item H' },
      { id: '7', title: 'Sell Item U' },
    ],
    FOUND: [
      { id: '6', title: 'Found Item P' },
      { id: '0', title: 'Found Item Q' },
      { id: '8', title: 'Found Item R' },
      { id: '1', title: 'Sell Item N' },
      { id: '2', title: 'Sell Item Y' },
      { id: '3', title: 'Sell Item W' },
    ],
  };

  // State for selected category and list items
  const [category, setCategory] = useState('SELL');
  const [items, setItems] = useState(data[category]);

  // Update items whenever the category changes
  useEffect(() => {
    setItems(data[category]);
  }, [category]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={24} color="#000" />
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My List</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setCategory('SELL')} style={styles.tabItem}>
          <Text style={styles.tabText}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('LEND')} style={styles.tabItem}>
          <Text style={styles.tabText}>Lend</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('TRADE')} style={styles.tabItem}>
          <Text style={styles.tabText}>Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory('FOUND')} style={styles.tabItem}>
          <Text style={styles.tabText}>Found</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.listContainer}>
        {items.map((item) => (
          <TouchableOpacity key={item.id} style={styles.listItem}
            onPress={() => navigation.navigate('PostDetailPage', { item: item})}>
            <View style={styles.imagePlaceholder}>
              <FontAwesome name="image" size={50} color="#8e8e93" />
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D4976',
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
