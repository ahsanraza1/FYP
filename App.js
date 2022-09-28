import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LoginScreen(){
  return(
    <View> 
      <Text>
        Login Screen here
      </Text>
    </View>
  ); 
}

const Stack = createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;