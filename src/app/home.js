import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import { screenH, screenW } from '../utils/Constants'
import TodoItem from '../components/TodoItem'

const HomeScreen = () => {
    const { data } = useSelector(state => state.todo)
    // console.log(data);

    const renderTodoItem = ({ item }) => {
      // console.log('Rendering TodoItem:', item);
      return <TodoItem item={item} />;
  };
    
  return (
    <View style={styles.container}>
      <CustomHeader title={"TODO APP"} isBackButton={false} />

      <FlatList
        data={data}
        renderItem={renderTodoItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Image source={require('../assets/images/todo_icon.png')} style={styles.addIcon} />
            <Text style={styles.emtMsgText}>Click on Plus Button to add your goals</Text>
          </View>
        }
        initialNumToRender={10}
        windowSize={10}
        key={(item) => item?.id}
        keyExtractor={(item) => item?.id}
        scrollIndicatorInsets={false}
      />

      <AddButton />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    emptyContainer: {
      height: screenH * 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addIcon: {
      width: 150,
      height: 120,
      resizeMode: 'contain',
      margin: 20
    },
    emtMsgText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#888',
      width: '80%',
      textAlign: 'center'
    }
})