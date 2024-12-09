import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput,} from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const HeadNav = ({ navigation }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const dropdownOptions = [
    { id: '1', label: 'SELL', category: 'SELL' },
    { id: '2', label: 'LEND', category: 'LEND' },
    { id: '3', label: 'TRADE', category: 'TRADE' },
    { id: '4', label: 'FOUND', category: 'FOUND' },
  ];

  const items = [
    {
      id: '1',
      name: 'Laptop',
      title: 'Laptop for Sale',
      description: 'A slightly used laptop in great condition.',
      locationFound: 'Vancouver',
      currentLocation: 'Burnaby',
    },
    {
      id: '2',
      name: 'Camera',
      title: 'Digital Camera',
      description: 'A DSLR camera in excellent condition.',
      locationFound: 'Toronto',
      currentLocation: 'Richmond',
    },
    {
      id: '3',
      name: 'Headphones',
      title: 'Sony WH-1000XM4',
      description: 'Noise-canceling headphones in excellent condition.',
      locationFound: 'Montreal',
      currentLocation: 'Quebec City',
    },
    {
      id: '4',
      name: 'Tablet',
      title: 'Samsung Galaxy Tab',
      description: 'A used Samsung tablet with a stylus.',
      locationFound: 'Edmonton',
      currentLocation: 'Calgary',
    },
  ];

  const handleDropdownSelect = (category) => {
    setIsDropdownVisible(false);
    navigation.navigate('ItemList', { category }); 
  };

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      const filteredResults = items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setIsSearchVisible(false); 
      navigation.navigate('Search', { query: searchText, results: filteredResults });
    }
  };

  return (
    <View>
      
      <View style={styles.header}>
  
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesome name="home" size={24} color="#333" style={styles.icon} />
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={styles.dropdownTrigger}
            onPress={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            <Text style={styles.navText}>Options</Text>
            <Ionicons
              name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="#333"
            />
          </TouchableOpacity>
          {isDropdownVisible && (
            <View style={styles.dropdownMenu}>
              {dropdownOptions.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={styles.dropdownOption}
                  onPress={() => handleDropdownSelect(option.category)}
                >
                  <Text style={styles.dropdownText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => setIsSearchVisible(!isSearchVisible)}>
            <Ionicons name="search" size={24} color="#333" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CreateFormPage')}>
            <MaterialIcons
              name="add-box"
              size={24}
              color="#FF4081"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
            <Ionicons
              name="person-circle"
              size={24}
              color="#8A2BE2"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search items..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch} 
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  dropdownTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    zIndex: 10,
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 4,
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  searchContainer: {
    backgroundColor: '#F9F9F9',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default HeadNav;
