import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import HeadNav from '../header/HeadNav'; 

const ItemList = ({ route, navigation }) => {
  const { category } = route.params; 
  const [items, setItems] = useState([]);

  
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

  useEffect(() => {
    setItems(data[category]);
  }, [category]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <HeadNav navigation={navigation} />
      <Text style={styles.title}>{category} ITEMS LIST</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingVertical: 8,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ItemList;
