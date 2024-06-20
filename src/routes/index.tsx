
import React from "react"; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ApartmentDetail from "../screens/apartmentDetail/ApartmentDetail";
import {
  Dimensions,
  Image,
} from "react-native";

import AddPropertyData from "../screens/addpropertydetails/AddPropertyData";
import AddSubjectProperty from "../screens/subjectproperty/AddSubjectProperty";
import AddSiteInfo from "../screens/siteinfo/AddSiteInfo";
import AddBuildings from "../screens/buildings/Addbuildings";
import AddUnits from "../screens/units/AddUnits";

const Tab = createMaterialTopTabNavigator();



const TopNavigation = () => {
    
  const renderTabIcon = (
    focused: boolean,
    color: string,
  ) => {
  
    
    return  <Image
    source={require('../assets/images/subject_property_icon.png')}
    style={{width: 22, height: 22}}
    resizeMode="contain"
  />;
  };
    return (
        <Tab.Navigator
          initialRouteName="Property Data"
          screenOptions={{
            tabBarItemStyle:{width: Dimensions.get("window").width/4},
            tabBarActiveTintColor: '#ccc',
            tabBarLabelStyle: { fontSize: 12, },
            tabBarStyle: { backgroundColor: 'gray', },
            tabBarScrollEnabled:true,
            tabBarIcon: ({focused, color}) =>
              renderTabIcon(focused, color,),
            

          }}
        >
          <Tab.Screen
          
            name="Property Data"
            component={AddPropertyData}
            options={{ tabBarLabel: 'Property Data',}}
            
            
          />
          <Tab.Screen
            name="Subject Property"
            component={AddSubjectProperty}
            options={{ tabBarLabel: 'Subject Property' }}
          />
          <Tab.Screen
            name="Site Info'"
            component={AddSiteInfo}
            options={{ tabBarLabel: 'Site Info' }}
          />
              <Tab.Screen
            name="Buildings"
            component={AddBuildings}
            options={{ tabBarLabel: 'Buildings' }}
          />
              <Tab.Screen
            name="Units"
            component={AddUnits}
            options={{ tabBarLabel: 'Units' }}
          />
        </Tab.Navigator>
      );
}

export default TopNavigation;