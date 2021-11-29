import React from 'react'
import {Text, View, Button} from 'react-native'

function Home({navigation}) {
    return (
        <View>
            <Text>
             Homepage
            </Text>
            <Button
                title="Go to Lab 1"
                onPress={() => navigation.navigate('Lab1')}
            />
            <Button
                title="Go to Lab 2"
                onPress={() => navigation.navigate('Lab2')}
            />
            <Button
                title="Go to Lab 3"
                onPress={() => navigation.navigate('Lab3')}
            />
            <Button
                title="Go to Lab 4"
                onPress={() => navigation.navigate('Lab4')}
            />
            <Button
                title="Go to Lab 5"
                onPress={() => navigation.navigate('Lab5')}
            />
            <Button
                title="Go to Lab 6"
                onPress={() => navigation.navigate('Lab6')}
            />
            <Button
                title="Go to Lab 7"
                onPress={() => navigation.navigate('Lab7')}
            />
            <Button
                title="Go to Lab 8"
                onPress={() => navigation.navigate('Lab8')}
            />
        </View>

    )
}

export default Home
