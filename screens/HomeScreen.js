import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import HeadNav from '../header/HeadNav';

const HomeScreen = ({ navigation }) => {
  const sellItems = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
  ];

  const tradeItems = [
    { id: '1', title: 'Item A' },
    { id: '2', title: 'Item B' },
    { id: '3', title: 'Item C' },
    { id: '4', title: 'Item D' },
  ];

  const lendItems = [
    { id: '1', title: 'Item X' },
    { id: '2', title: 'Item Y' },
    { id: '3', title: 'Item Z' },
    { id: '4', title: 'Item W' },
  ];

  const foundItems = [
    { id: '1', title: 'Item X' },
    { id: '2', title: 'Item Y' },
    { id: '3', title: 'Item Z' },
    { id: '4', title: 'Item W' },
  ];

  const renderSquare = ({ item }) => (
    <TouchableOpacity key={item.id} style={styles.square}
      onPress={() => navigation.navigate('PostDetailPage', { item: item})}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeadNav navigation={navigation} />

      
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>SELL</Text>
          <Text style={styles.arrowText}>→</Text>
        </View>
        <FlatList
          data={sellItems}
          renderItem={renderSquare}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>TRADE</Text>
          <Text style={styles.arrowText}>→</Text>
        </View>
        <FlatList
          data={tradeItems}
          renderItem={renderSquare}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>LEND</Text>
          <Text style={styles.arrowText}>→</Text>
        </View>
        <FlatList
          data={lendItems}
          renderItem={renderSquare}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

    
        <View style={styles.header}>
          <Text style={styles.headerTitle}>FOUND</Text>
          <Text style={styles.arrowText}>→</Text>
        </View>
        <FlatList
          data={foundItems}
          renderItem={renderSquare}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab0af',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },
  arrowText: {
    fontSize: 16,
    color: '#000000',
  },
  listContainer: {
    paddingVertical: 8,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
