

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screen/Home';
import Details from './screen/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: String }

};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Trending Product' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
