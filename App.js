import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Drawer from './Drawer/drawer'
import  List from './Components/List';
import Home from './Components/Home'
import About from "./Components/About";
import Supplication from './Components/Supplications';
// import Compass from './Components/Qibla/compass'
import Ibadan from './Components/Ibaadah/ibadah';
// import NamazT from "./Components/Ibaadah/NamazTimings";
import Tryo from './Components/Ibaadah/tryo';
import Quran from './Components/Qurans/Quran';
import QuranAyats from './Components/Qurans/Quran_Ayats';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ab(){
  return(
    <Stack.Navigator  initialRouteName={Home}>

      <Stack.Screen name="Home" component={Home} 	options={{
        title: 'Home', //Set Header Title

        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }} />


      <Stack.Screen name="Ayats" component={QuranAyats} 	options={{
        title: 'Ayat ', //Set Header Title

        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }} />

      <Stack.Screen name="About" component={About} 	options={{
        title: 'About ', //Set Header Title

        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }} />


    </Stack.Navigator>
  )
}

export default function App() {
  return (

    <NavigationContainer>


      <Drawer.Navigator  >
        <Drawer.Screen name="ab" component={ab} />
        <Drawer.Screen name="Main" component={List} />
        <Drawer.Screen name="Abouts" component={About} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Supplication" component={Supplication} />
        <Drawer.Screen name="Namaz Timings" component={Tryo} />
        <Drawer.Screen name="Ibadah" component={Ibadan} />
        <Drawer.Screen name="Quran" component={Quran} />
      </Drawer.Navigator>

{/*<Drawer/>*/}
      </NavigationContainer>
  );
}
