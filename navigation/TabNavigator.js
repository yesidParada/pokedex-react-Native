import { useEffect, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Keyboard  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';

const TabBar = ({ state, navigation }) => {

  const [visible, setVisible] = useState(true);

  const keyboardWillShow = () => {
    setVisible(false);
  };

  const keyboardWillHide = () => {
    setVisible(true);
  };

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }), keyboardWillShow);
    const keyboardWillHideSub = Keyboard.addListener(Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }), keyboardWillHide);
    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    }
  }, [])

  return (
    <View style={{ 
      flexDirection: 'row', 
      backgroundColor: 'white', 
      maxHeight: visible ? 64 : 0, 
      borderTopWidth: 0.5, 
      borderTopColor: 'black' }}
    >
      { state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            key={label}
            style={[{ 
              minHeight: 48, 
              flex: 1, 
              alignItems: 'center', 
              justifyContent: 'center', 
              // marginBottom: 2 
            }]}
          >
            {label === 'Home' && <Ionicons name="home" size={24} color="#000" />}
            {label === 'Search' && <Entypo name="magnifying-glass" size={24} color="#000" />}
          </TouchableOpacity>
        ); 
      })}   
  </View>
);
}

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <SafeAreaView style={{ 
      flexGrow: 1, 
      backgroundColor: 'purple' 
    }}>
      <Tab.Navigator
        initialRouteName='Home'
        header={null}
        headerMode='none'
        tabBar={props => <TabBar {...props} />}
        tabBarOptions={{
          keyboardHidesTabBar: true
        }}
        backBehavior={'none'}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
        />
        <Tab.Screen
          name='Search'
          component={SearchScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}