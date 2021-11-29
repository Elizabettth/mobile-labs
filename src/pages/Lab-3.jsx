import React, {useState} from 'react'
import {Text, View, Button} from 'react-native'

function Lab3() {
    const [color, setColor] = useState("white")

    return (
        <View style={{backgroundColor: color}}>
            <Text>
             Lab 3 
            </Text>
            <Button title="Green" onPress={()=>setColor("green")}/> 
            <Button title="Red" onPress={()=>setColor("red")}/> 
            <Button title="Blue" onPress={()=>setColor("blue")}/> 
            <Button title="Yellow" onPress={()=>setColor("yellow")}/> 
        </View>

    )
}

export default Lab3
