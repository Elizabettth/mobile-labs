import React, { useRef, useEffect, useState} from 'react';
import { Animated, Text, View, Button, Image } from 'react-native';


export default () => {
    const [count, setCount] = useState(false);

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
            Lab 4 
        </Text>
        <Image style={{width: '20%', height: 200}} source={{uri: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80'}}/>
        <Image style={{width: '20%', height: 200}} source={{uri: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'}}/>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Appear</Text>
        <Button
            onPress={() => setCount(true)}
            title="SIN!"
        />
        <Button
            onPress={() => setCount(true)}
            title="ASIN!"
        />
      </View>
    )
  }


