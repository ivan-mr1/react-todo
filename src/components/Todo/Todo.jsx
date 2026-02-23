import { useContext } from 'react';
import DateTime from './../DateTime/DateTime';
import AddTaskForm from './../AddTaskForm/AddTaskForm';
import SearchTaskForm from './../SearchTaskForm/SearchTaskForm';
import TodoInfo from './../TodoInfo/TodoInfo';
import TodoList from './../TodoList/TodoList';
import Button from './../Button/Button';
import { TasksContext } from './../../context/TasksContext';
import './todo.css';

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <DateTime />
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Show first incomplete task
      </Button>
      <TodoList />
    </div>
  );
};

export default Todo;
