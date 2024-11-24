import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfilePage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.avatarPlaceholderContainer}>
          <View style={styles.avatarPlaceholder}>
            <FontAwesome name="user-circle" size={70} />
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userAcademy}>Academy</Text>
            <Text style={styles.userEmail}>Email</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton}
            onPress={()=> navigation.navigate('EditProfile')}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuSection}>
        <MenuItem icon="list" title="My List" navigation={navigation} target="MyListPage" />
        <MenuItem icon="heart" title="Favourites" navigation={navigation} target="FavouritesPage" />
        <MenuItem icon="cog" title="Settings" navigation={navigation} target="Settings" />
        <MenuItem icon="comment" title="Announcements" navigation={navigation} target="AnnouncementsPage" />
        <MenuItem icon="pencil" title="Reviews" navigation={navigation} target="ReviewsPage" />
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, title, navigation, target }) {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(target)} 
    >
      <FontAwesome name={icon} size={24} color="#fff" />
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    paddingTop: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarPlaceholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 10,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoContainer: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 18,
    color: '#5C6BC0',
    fontWeight: 'bold',
  },
  userAcademy: {
    fontSize: 14,
    color: '#5C6BC0',
  },
  userEmail: {
    fontSize: 14,
    color: '#5C6BC0',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  editButton: {
    backgroundColor: '#f28b82',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  shareButton: {
    backgroundColor: '#ea80fc',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 20,
  },
});
