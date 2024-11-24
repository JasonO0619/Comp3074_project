import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const HeadNav = ({ navigation }) => {
  return (
    <View style={styles.header}>
      {/* Left: Home Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <FontAwesome name="home" size={28} color="black" style={styles.icon} />
      </TouchableOpacity>

      
      <View style={styles.navOptions}>
        <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
          <Text style={styles.navText}>SELL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lend')}>
          <Text style={styles.navText}>LEND</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Trade')}>
          <Text style={styles.navText}>TRADE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Found')}>
          <Text style={styles.navText}>FOUND</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <MaterialIcons name="add-box" size={28} color="#FF4081" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Ionicons name="person-circle" size={28} color="#8A2BE2" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD', 
  },
  icon: {
    marginHorizontal: 8,
  },
  navOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HeadNav;
