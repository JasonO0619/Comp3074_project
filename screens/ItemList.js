import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import HeadNav from '../header/HeadNav'; 

const ItemList = ({ route, navigation }) => {
  const { category } = route.params; 
  const [items, setItems] = useState([]);

  const data = {
    SELL: [
      { id: '1', title: 'Sell Item 1', description: 'Description of Sell Item 1' },
      { id: '2', title: 'Sell Item 2', description: 'Description of Sell Item 2' },
      { id: '3', title: 'Sell Item 3', description: 'Description of Sell Item 3' },
    ],
    LEND: [
      { id: '4', title: 'Lend Item A', description: 'Description of Lend Item A' },
      { id: '5', title: 'Lend Item B', description: 'Description of Lend Item B' },
    ],
    TRADE: [
      { id: '6', title: 'Trade Item X', description: 'Description of Trade Item X' },
      { id: '7', title: 'Trade Item Y', description: 'Description of Trade Item Y' },
    ],
    FOUND: [
      { id: '8', title: 'Found Item P', description: 'Description of Found Item P' },
      { id: '9', title: 'Found Item Q', description: 'Description of Found Item Q' },
    ],
  };

  useEffect(() => {
    setItems(data[category]); 
  }, [category]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('PostDetailPage', { item })}
    >
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
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
    backgroundColor: '#6ab0af',
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
