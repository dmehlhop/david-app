import * as React from 'react';
import {Text, View, StyleSheet, Button, Image, TextInput, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './components/profile.js';
import MoshTempsContext from './components/moshTempsContext'

const tourData = [
  { date: 'February 30th, Dublin' },
  { date: 'Decembah ith, Lagos' },
  { date: 'Toyestermorrow, Balsia' },
  { date: 'They\'re not touring' }
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 54, fontFamily: 'Times New Roman' }}>
          {' '}
          Death Grips App{' '}
        </Text>
        <Text style={{ fontSize: 24, fontFamily: 'Times New Roman' }}>
          {' '}
          I hope you are staying NOIDED today.{' '}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{
            uri: 'https://media.npr.org/assets/img/2012/10/18/death_grips_wide-ee536ddc6aeaa777f6a173f20223dac0c78538e8-s700-c85.webp',
          }}
          style={{ width: 350, height: 200 }}
        />
      </View>
      <View style={{ flex: 0.4 }} />
      <View>
        <View style={{ flex: 0.75, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1 }}>
            <Button
              title="About Death Grips App"
              color="maroon"
              onPress={() =>
                navigation.navigate('About Death Grips App')
              }></Button>
          </View>
          <View style={{ flex: 1, height: 100 }}>
            <Button
              style={{height:'100%'}}
              title="Discography"
              color="black"
              onPress={() =>
                navigation.navigate('Death Grips Discography')
              }></Button>
          </View>
        </View>
        <View  style={{ flex: 0.75, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 1, height: 100 }}>
            <Button
              title="Profile"
              color="black"
              onPress={() => navigation.navigate('Profile')}></Button>
          </View>
          <View style={{ flex: 1, height: 100 }}>
            <Button
              title="Upcoming Shows"
              color="maroon"
              onPress={() => navigation.navigate('Upcoming Shows')}></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

function AlbumCard({ label, imageurl }) {
  return (
    <View style={{ flexDirection: 'row', flex: 2 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{ uri: imageurl }} style={{ width: 70, height: 70 }} />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 14, fontStyle: 'italic', color: 'white' }}>
          {label}
        </Text>
      </View>
    </View>
  );
}

function DiscoScreen() {
  return (
    <View style={styles.discography}>
      <AlbumCard
        label="Exmilitary (2011)"
        imageurl="https://media.pitchfork.com/photos/5929afd95e6ef95969321e8b/1:1/w_320/a208bec4.jpg"
      />
      <AlbumCard
        label="The Money Store (2012)"
        imageurl="https://media.pitchfork.com/photos/5929b4adb1335d7bf169a7a8/1:1/w_320/566c99ce.jpeg"
      />
      <AlbumCard
        label="No Love Deep Web (2012)"
        imageurl="https://media.pitchfork.com/photos/5929c027c0084474cd0c314f/1:1/w_320/6698e088.jpeg"
      />
      <AlbumCard
        label="Government Plates (2013)"
        imageurl="https://media.pitchfork.com/photos/5929a4a05e6ef959693208fb/1:1/w_320/196bb1f2.jpg"
      />
      <AlbumCard
        label="The Powers That B (2015)"
        imageurl="https://upload.wikimedia.org/wikipedia/en/b/bd/The_Powers_That_B_cover_art.jpg"
      />
      <AlbumCard
        label="Bottomless Pit (2016)"
        imageurl="https://media.pitchfork.com/photos/5929b56eea9e61561daa6ded/1:1/w_320/1e07a294.jpg"
      />
      <AlbumCard
        label="Year of the Snitch (2018)"
        imageurl="https://media.pitchfork.com/photos/5b2139addaa3af2df22a2b7e/1:1/w_320/Death%20Grips_Year%20of%20the%20Snitch.jpg"
      />
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'white' }}>
            What is your favorite Death Grips album?
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ color: 'white' }}
            placeholder="Enter Album Name"
            keyboardType="default"
          />
        </View>
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.about}>
      <Text style={styles.textBox}>
        This is an app about Death Grips for fans, non-fans, casual listeners,
        academics, and even the band themselves. Anyone who wants to use Death
        Grips App may use Death Grips App.
      </Text>
      <View>
        <Text style={styles.textBox}>
          Death Grips is one of the greatest experimental Hip-Hop bands of all
          time. Originating in Sacremento, CA in 2010, Death Grips consists of
          rapper Ride (Stefan Burnett), Zach Hill (drums, production), and Andy
          Morin (keyboards, production). They have released 7 studio albums. My
          favorite is either 2016's Bottomless Pit or 2012's The Money Store.
        </Text>
      </View>
    </View>
  );
}

function LiveShows() {
  const Item = ({ date }) => (
    <View>
      <View style={{justifyContent:"center",alignItems:"center", backgroundColor: 'black', padding:20, margin: 10}}>
        <Text style={{fontSize:40, color:'white'}}>{date}</Text>
      </View>
    </View>
  );
  const renderItem = ({ item }) => <Item date={item.date} />;

  return (
    <View style={{flex:1, backgroundColor:'maroon'}}>
      <FlatList
        data={tourData}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
      />
      <View style={{flex:.5}}>
        <MoshTempsContext>
        </MoshTempsContext>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRootName="Death Grips is Online">
        <Stack.Screen name="Death Grips is Online" component={HomeScreen} />
        <Stack.Screen name="About Death Grips App" component={AboutScreen} />
        <Stack.Screen name="Death Grips Discography" component={DiscoScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Upcoming Shows" component={LiveShows} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  discography: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'space-around',
  },

  about: {
    flex: 1,
    backgroundColor: 'maroon',
    justifyContent: 'space-around',
  },

  textBox: {
    padding: 50,
    fontSize: 20,
    color: 'white',
  },
});
