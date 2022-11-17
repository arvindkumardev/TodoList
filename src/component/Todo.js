import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddTodo,
  RemoveTodo,
  UpdateTodo,
} from '../redux/actions/todoAction/todoActions';
// import {AddTodo, RemoveTodo} from '../actions/todoAction/todoActions';
import {styles} from './Styles';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');
  const [editState, setEditState] = useState(false);
  const [id, setID] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;
  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  // const onUpdate = item => {
  //   console.log('aaa', item);
  //   setTodoValue(item);
  //   setID(item);
  //   setEditState(true);
  // };

  // const updateTodo = () => {
  //   console.log("7890",todoValue);
  //   todos.map(ele => {
  //     if (ele == id) {
  //       ele = todoValue;
  //     }
  //     console.log("555",ele);
  //   });
  //   console.log("789",todos);
  //    setEditState(false);
  // };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text style={{fontSize: 16, fontWeight: '400'}}>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text style={{color: '#fff'}}> X </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.listTitle}>Todo List</Text>
        <TextInput
          style={styles.mainInput}
          onChangeText={setTodoValue}
          placeholder={'Add your todo here'}
          value={todoValue}
        />
        <TouchableOpacity
          onPress={addTodo}
          // onPress={editState === true ? updateTodo : addTodo}
          style={styles.addTodoButton}>
          <Text style={styles.buttonText}>
            {/* {editState === true ? 'Update List' : 'Add List'} */}
            Add List
          </Text>
        </TouchableOpacity>

        <Text style={styles.todoItems}>Todo Items :</Text>
        {renderTodoList()}
      </View>
    </SafeAreaView>
  );
};

export default Todo;
