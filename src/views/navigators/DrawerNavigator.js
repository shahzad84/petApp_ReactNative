import React from "react";
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { View, Image, Text, StatusBar } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import COLORS from "../../const/colors";
const Drawer = createDrawerNavigator();
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      style={{
        paddingVertical: 30,
      }}
    >
      <View
        style={{
          marginLeft: 20,
          marginVertical: 40,
        }}
      >
        <Image
          source={require("../../assets/person.jpg")}
          style={{ height: 70, width: 70, borderRadius: 20 }}
        />
        <Text
          style={{
            color: COLORS.white,
            fontWeight: "bold",
            fontSize: 13,
            marginTop: 10,
          }}
        >
          JANE FOSTER
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerType: "slide",
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: {backgroundColor: null},
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        // sceneContainerStyle: {
        //   backgroundColor: COLORS.white,
        // },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "ADOPTION",
          drawerIcon: ({ color }) => (
            <Icon name="paw" size={25} style={{ marginRight: -20, color }} />
          ),
        }}
      >
        {props => <HomeScreen {...props} />}
      </Drawer.Screen>

      
      <Drawer.Screen
        name="DONATION"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="gift" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
         {props => <HomeScreen {...props} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="ADD PET"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="plus-box" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => <HomeScreen {...props} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="FAVOURITES"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="heart" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
       {props => <HomeScreen {...props} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="PROFILE"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="account" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => <HomeScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
