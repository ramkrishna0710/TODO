import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducers/todoSlice'
import { router } from 'expo-router'

const AddTodo = () => {

  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = async => {
    if(value.trim() == "" || description.trim() == "") {
      Alert.alert("Please enter something..");
      return;
    }
    dispatch(addTodo({title: value, desc: description}));

    router.back();
  }
  return (
    <View style={styles.container}>
      <CustomHeader title={'Add New TODO'} isBackButton={true}/>
      <TextInput
        placeholder='Enter your text here'
        value={value}
        onChangeText={setValue}
        style={[styles.input, styles.morePadding]}
      />

      <TextInput
        placeholder='Enter your todo description!'
        value={description}
        numberOfLines={4}
        multiline
        maxLength={120}
        onChangeText={setDescription}
        style={[styles.input, styles.minHeight]}
      />

      <CustomButton title='ADD' onPress={onSubmit} />

    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 10,
    textAlignVertical: 'top'
  },
  morePadding: {
    marginTop: 20
  },
  minHeight: {
    minHeight: 120
  }
})