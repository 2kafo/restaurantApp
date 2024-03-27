import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const users = [
  { username: 'john_doe', password: 'password123', fullName: 'John Doe' },
  { username: 'jane_doe', password: 'password456', fullName: 'Jane Doe' }
];

export default function WelcomeScreen({ navigation, route }) {
  const { user } = route.params;

  const [itemName, setItemName] = useState('');
  const [tasks, setTasks] = useState([
    { name: "Teach coding", teacher: 'Upendo', id: '1' },
    { name: "Teach coding", teacher: 'Upendo', id: '2' },
  ]);
  const [error, setError] = useState('');

  const handleAddItem = (itemName) => {
    if (itemName.trim() === '') {
      setError('Please enter an item name');
      return;
    }

    // Add the new task to the tasks array
    const newTask = { name: itemName, teacher: user.username, id: (tasks.length + 1).toString() };
    setTasks(prevTasks => [...prevTasks, newTask]);

    // Clear the input field and error message
    setItemName('');
    setError('');
  };

  const presssHandler = (id) => {
   
    setTasks((prevTasks) => {
      return prevTasks.filter(tasks => tasks.id != id)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user.username}</Text>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={itemName}
          onChangeText={setItemName}
          placeholder="Enter your item here"
        />
        <Pressable style={styles.addButton} onPress={() => {handleAddItem(itemName)}}>
          <Text style={styles.buttonText}>Add Item</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollView} >
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {presssHandler(item.id) }}>
              <Task item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>

    </View>
  );
}

const Task = ({ item }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.name}</Text>
      <Text style={styles.teacherText}>Teacher: {item.teacher}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  scrollView: {
    flex: 1,
   
  },
  title: {
    fontSize: 29,
    marginBottom: 20
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginRight: 10
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  taskContainer: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  teacherText: {
    fontSize: 14,
    color: 'gray'
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end'
  }
});
