import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';
import HomeScreen from './screens/HomeScreen';
import ForgetPassword from './screens/ForgetPassword';
import Register from './screens/Register';
import ProfilePage from './header/ProfilePage';
import ItemList from './screens/ItemList';
import CreatePost from './header/CreatePost';
import MyListPage from './screens/MyListPage';
import FavouritesPage from './screens/FavouritesPage';
import PostDetailPage from './screens/PostDetailPage';
import ContactPage from './screens/ContactPage';
import UserPage from './screens/UserPage';
import AnnouncementsPage from './screens/AnnouncementPage';
import EditProfile from './screens/EditProfile';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name='ItemList' component={ItemList}/>
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="MyListPage" component={MyListPage} />
        <Stack.Screen name="FavouritesPage" component={FavouritesPage} />
        <Stack.Screen name="PostDetailPage" component={PostDetailPage} />
        <Stack.Screen name="ContactPage" component={ContactPage} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="AnnouncementsPage" component={AnnouncementsPage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
    // test()
  );
};

export default App;
