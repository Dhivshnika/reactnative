import React, { useState } from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import BasicInformation from './src/BasicInformation.js';
import EducationDetails from './src/EducationDetails.js';
import WorkDetails from './src/WorkDetails.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme, useNavigation } from '@react-navigation/native';
import ImagePreview from './src/ImagePreview.js';
import DocumentPreview from './src/DocumentPreview.js';


const Stack = createNativeStackNavigator();



function StackNavigation() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = isDarkTheme ? DarkTheme : DefaultTheme;
  const [backgroundColor, setBackgroundcolor] = useState('#fff');
  const [textColor, setTextColor] = useState('black');

  const colorChange = () => {
    if (isDarkTheme === false) {
      setBackgroundcolor('');
      setTextColor('#fff');
    }
    else {
      setBackgroundcolor('#fff');
      setTextColor('black');
    }
  }

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    colorChange();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const MenuContent = () => {
    const navigation = useNavigation();

    return (
      <View>
        <View style={{ backgroundColor: 'purple', paddingTop: 56, }} />
        <View style={{ backgroundColor: backgroundColor, paddingLeft: 5 }}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={require('./src/assets/person.png')} />
            <TouchableOpacity onPress={() => { navigation.navigate('BasicInfo'); toggleMenu(); }}>
              <Text style={{ color: textColor, padding: 3, fontSize: 20, marginLeft: 20, fontWeight: 'bold', }}>Basic Informations</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={require('./src/assets/education.png')} />
            <TouchableOpacity onPress={() => { navigation.navigate('EducationDetails'); toggleMenu(); }}>
              <Text style={{ color: textColor, padding: 3, fontSize: 20, marginLeft: 20, fontWeight: 'bold' }}>Education Details</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={require('./src/assets/work.png')} />
            <TouchableOpacity onPress={() => { navigation.navigate('WorkDetails'); toggleMenu(); }}>
              <Text style={{ color: textColor, padding: 3, fontSize: 20, marginLeft: 20, fontWeight: 'bold' }}>Work Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: backgroundColor, height: '100%', paddingTop: 10, paddingLeft: 8 }}>
          <Image source={require('./src/assets/darkmode.png')} />
          <Text style={{ padding: 3, fontSize: 20, color: textColor, marginLeft: 20, fontWeight: 'bold' }}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkTheme ? "purple" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDarkTheme}
            style={{ marginBottom: 920, marginLeft: 20 }}
          />
        </View>
      </View>
    );
  };



  return (

    <NavigationContainer theme={theme}>

      <SideMenu menu={<MenuContent />} isOpen={isMenuOpen} >

        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'purple'
          }
        }}>
          <Stack.Screen
            name='BasicInfo'
            children={() => <BasicInformation toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
            options={{
              headerLeft: () => (
                <View>
                  <TouchableOpacity onPress={toggleMenu}>
                    <Image source={require('./src/assets/menu.png')} />
                  </TouchableOpacity>
                </View>
              ),
              title: 'Basic Informations',
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }} />


          <Stack.Screen name='EducationDetails'
            children={() => <EducationDetails isDarkTheme={isDarkTheme} />}
            options={{
              headerLeft: () => (
                <View>
                  <TouchableOpacity onPress={toggleMenu}>
                    <Image source={require('./src/assets/menu.png')} />
                  </TouchableOpacity>
                </View>
              ),
              title: 'Education Details',
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerBackVisible: false
            }}
          />

          <Stack.Screen name='WorkDetails'
            children={() => <WorkDetails isDarkTheme={isDarkTheme} />}
            options={{
              headerLeft: () => (
                <View>
                  <TouchableOpacity onPress={toggleMenu}>
                    <Image source={require('./src/assets/menu.png')} />
                  </TouchableOpacity>
                </View>
              ),
              title: 'Work Details',
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerBackVisible: false
            }}
          />

          <Stack.Screen name='ImagePreview' component={ImagePreview}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen name='DocumentPreview' component={DocumentPreview}
            options={{
              headerShown: false
            }}
          />

        </Stack.Navigator>

      </SideMenu>

    </NavigationContainer>


  )

}

function App() {



  return (

    <StackNavigation />

  )
}









export default App;
