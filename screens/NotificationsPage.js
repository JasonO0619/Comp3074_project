import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const NotificationsPage = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'follow',
      user: 'Alice',
      time: '1 minute ago',
    },
    {
      id: '2',
      type: 'message',
      user: 'Bob',
      message: 'Hey! How are you?',
      time: '1 hour ago',
    },
    {
      id: '3',
      type: 'follow',
      user: 'Charlie',
      time: '3 days ago',
    },
    {
      id: '4',
      type: 'message',
      user: 'Diana',
      message: 'hey',
      time: '10 days ago',
    },
  ]);

  const handleNotificationPress = (notification) => {
    if (notification.type === 'message') {
      navigation.navigate('ContactPage', { user: notification.user });
    } else if (notification.type === 'follow') {
      navigation.navigate('UserPage', { user: notification.user });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.notificationItem}
              onPress={() => handleNotificationPress(item)}
            >
              <View style={styles.iconContainer}>
                {item.type === 'follow' ? (
                  <FontAwesome name="user-circle" size={24} color="#8A2BE2" />
                ) : (
                  <Ionicons name="chatbubble" size={24} color="#FF4081" />
                )}
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>
                  {item.type === 'follow' ? `${item.user} started following you.`: `${item.user} sent you a message: "${item.message}"`}
                </Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noNotificationsText}>No new notifications.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ab0af',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#ffffff',
  },
  timeText: {
    fontSize: 12,
    color: '#ffffff',
    marginTop: 4,
  },
  noNotificationsText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default NotificationsPage;
