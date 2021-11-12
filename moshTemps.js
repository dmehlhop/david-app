import React from "react";
import {View,StyleSheet,Text} from 'react-native';
import {useValue} from './context';

const MoshTemps = () => {
  const {currentValue} = useValue();
  const temps = currentValue.temps

  return(
    <View>
      <Text>
        Predicted Mosh Pit temperatures (degrees Fahrenheit) {"\n"}
        {temps}
      </Text>
    </View>
  )
}

export default MoshTemps
