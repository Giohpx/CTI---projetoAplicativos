import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LogBox } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from "expo-status-bar";

LogBox.ignoreAllLogs(true);

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ff3d3dff',
          headerShown: false, 
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'flower' : 'flower-outline'} color={color} size={24}/>
            ),
          }}
        />
        
        <Tabs.Screen 
          name="about"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'flower-pollen' : 'flower-pollen-outline'} color={color} size={24}/>
            ),
          }}
        />

        <Tabs.Screen
          name="toDoList"
          options={{
            title: 'To Do List',
            tabBarIcon: ({ color }) => (
              <AntDesign name="calendar" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="seresDoMar"
          options={{
            title: 'Seres do Mar',
            tabBarIcon: ({ color }) => (
              <AntDesign name="moon" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}