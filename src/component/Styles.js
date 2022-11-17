import {StyleSheet, Dimensions} from 'react-native';

let width = Dimensions.get('window').width;

const TodoStyles = {
  main: {
    alignItems: 'center',
  },
  mainInput: {
    borderWidth: 1,
    height: 55,
    width: width * 0.9,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 9,
  },
  todoList: {
    // borderWidth: 1,
    // borderRadius: 10,
    width: width * 0.8,
    height: 20,
  },
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  removeTodo: {
    backgroundColor: '#44A244',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4,
  },
  addTodoButton: {
    backgroundColor: '#44A244',
    borderRadius: 5,
    width: '90%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  todoItems: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'stretch',
    paddingLeft: 20,
    marginTop: 20,
  },
  listTitle: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
};
export const styles = StyleSheet.create(TodoStyles);
