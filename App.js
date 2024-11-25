import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';
import HomeScreen from './screens/HomeScreen';
import ForgetPassword from './screens/ForgetPassword';
import Register from './screens/Register';
import ProfilePage from './header/ProfilePage';
import ItemList from './screens/ItemList';
import ContactPage from './screens/ContactPage';
import CreateFormPage from './screens/CreateFormPage';
import MyListPage from './screens/MyListPage';
import FavouritesPage from './screens/FavouritesPage';
import PostDetailPage from './screens/PostDetailPage';
import UserPage from './screens/UserPage';
import AnnouncementsPage from './screens/AnnouncementPage';
import EditProfile from './screens/EditProfile';
import ReviewsPage from './screens/ReviewsPage';
import Settings from './screens/Settings';


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
        <Stack.Screen name="CreateFormPage" component={CreateFormPage} />
        <Stack.Screen name="MyListPage" component={MyListPage} />
        <Stack.Screen name="FavouritesPage" component={FavouritesPage} />
        <Stack.Screen name="PostDetailPage" component={PostDetailPage} />
        <Stack.Screen name="ContactPage" component={ContactPage} />
        <Stack.Screen name="AnnouncementsPage" component={AnnouncementsPage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='ReviewsPage' component={ReviewsPage}/>
        <Stack.Screen name='UserPage' component={UserPage}/>
          
      </Stack.Navigator>
    </NavigationContainer>
    // test()
  );
};

export default App;
