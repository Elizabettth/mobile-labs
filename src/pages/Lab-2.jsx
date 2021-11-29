import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native'

function Lab2() {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    //фамилия, имя, отчество, номер группы, факультет
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [groupNumber, setGroupNumber] = useState(0)
    const [faculty, setFaculty] = useState('')

    const [showResult, setShowResult] = useState(false)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>
             Lab 2
            </Text>
            <TextInput
                style={{padding: 10, borderWidth: 1}}
                placeholder="Name"
                onChangeText={name => setName(name)}
                defaultValue={name}
            />
            <TextInput
                style={{padding: 10, borderWidth: 1}}
                placeholder="Surname"
                onChangeText={surname => setSurname(surname)}
                defaultValue={surname}
            />
            <TextInput
                style={{padding: 10, borderWidth: 1}}
                placeholder="father Name"
                onChangeText={fatherName => setFatherName(fatherName)}
                defaultValue={fatherName}
            />
            <TextInput
                keyboardType='number-pad'
                style={{padding: 10, borderWidth: 1}}
                maxLength={6}
                placeholder="Group Number"
                onChangeText={groupNumber => setGroupNumber(groupNumber)}
            />
            <TextInput
                style={{padding: 10, borderWidth: 1}}
                placeholder="Faculty"
                onChangeText={faculty => setFaculty(faculty)}
                defaultValue={faculty}
            />
            <Button title="Submit" onPress={()=>setShowResult(true)} />

            {showResult && <Text>
                {`My name is ${surname} ${name} ${fatherName}, I'm from group №${groupNumber}, my faculty is ${faculty}!`}
                </Text>}
        </ScrollView>

    )
}

export default Lab2
