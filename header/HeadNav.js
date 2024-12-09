import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const HeadNav = ({ navigation }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [unreadNotifications, setUnreadNotifications] = useState(4); 

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
    },
    {
      id: '2',
      name: 'Camera',
      title: 'Digital Camera',
      description: 'A DSLR camera in excellent condition.',
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

  const handleNotifications = () => {
    setUnreadNotifications(0); 
    navigation.navigate('NotificationsPage'); 
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
            <Text style={styles.navText}>Full Lists</Text>
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
          <TouchableOpacity style={styles.notificationIcon} onPress={handleNotifications}>
            <Ionicons name="notifications" size={24} color="#333" />
            {unreadNotifications > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>{unreadNotifications}</Text>
              </View>
            )}
          </TouchableOpacity>

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
    backgroundColor: '#ffffff',
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
    color: '#000000',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 4,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  notificationIcon: {
    position: 'relative',
    marginHorizontal: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
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
