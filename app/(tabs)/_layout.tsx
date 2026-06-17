import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabLayout() {
  return (

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#b9771a' },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#b9771a' },
      }}
    >

      
  <Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ focused }) => (
  <EvilIcons name="heart" size={24} color={focused ? "#c9892a" : "#ffffff"} />    ),
  }}
/>
<Tabs.Screen
  name="about"
  options={{
    title: 'About',
    tabBarIcon: ({ focused }) => (
  <AntDesign name="heart" size={24} color={focused ? "#c9892a" : "#ffffff"} />    ),
  }}
/>
<Tabs.Screen
  name="toDoList"
  options={{
    title: 'To-Do List',
    tabBarIcon: ({ focused }) => (
  <AntDesign name="heart" size={24} color={focused ? "#c9892a" : "#ffffff"} />    ),
  }}
/>
<Tabs.Screen
  name="seresDoMar"
  options={{
    title: 'Seres do Mar',
    tabBarIcon: ({ focused }) => (
  <EvilIcons name="heart" size={24} color={focused ? "#c9892a" : "#ffffff"} />    ),
  }}
/>
    </Tabs>
  );
}
  <Tabs.Screen
  name="habilidades"
  options={{
    title: 'Habilidades',
    tabBarIcon: ({ focused }) => (
  <EvilIcons name="heart" size={24} color={focused ? "#c9892a" : "#ffffff"} />    ),
  }}
/>