import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = (props) => {
  const [info, setInfo] = useState({name:'',email:''});
  const [name, setName] = useState('');
  const [email,setEmail] = useState('')

  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@profile_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            setEmail(data.email)
          } else {
            setInfo({})
            setName("")
            setEmail("")
          }


        } catch(e) {
          console.dir(e)
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@profile_info', jsonValue)
        } catch (e) {
          console.dir(e)
        }
  }

  const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          console.dir(e)
        }
  }

      return (
            <View style={styles.container}>
              <Text style={styles.header}>
                 Death Grips Profile
              </Text>
              <TextInput
                    style={styles.textinput}
                    placeholder="name"
                    onChangeText={text => {
                      setName(text)
                    }}
                    value={name}
                />
              <TextInput
                    style={styles.textinput}
                    placeholder="email"
                    onChangeText={text => {setEmail(text)}}
                    value={email}
                />
              <Button
                    color='red' title='Save Profile to Memory'
                    onPress = {() => {
                         const theInfo = {name:name,email:email}
                         setInfo(theInfo)
                         storeData(theInfo)
                       }}
                />
              <Button
                  color='green' title='Clear memory'
                  onPress = {() => {
                        clearAll()
                      }}
                />
              <Button
                  color='blue' title='Load Profile from Memory'
                  onPress = {() => {
                        getData()
                      }}
                />
              <Text>
               name={name} email={email} info={JSON.stringify(info)}
              </Text>

            </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
  });

export default Profile;
