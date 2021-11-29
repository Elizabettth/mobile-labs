import React, {useState} from 'react'
import {Text, View, Button} from 'react-native'

function Lab1() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>
             Hello World
            </Text>
            <Text>You clicked {count} times</Text>
            <Button
                onPress={() => setCount(count + 1)}
                title="Click me!"
            />
        </View>

    )
}

export default Lab1
