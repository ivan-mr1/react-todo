import AddTaskForm from './AddTaskForm';
import SearchTaskForm from './SearchTaskForm';
import TodoInfo from './TodoInfo';
import TodoList from './TodoList';

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'task name 1', isDone: false },
    { id: 'task-2', title: 'task name 2', isDone: true },
    { id: 'task-3', title: 'task name 3', isDone: false },
  ];
  return (
    <div className="todo">
      <h1 className="todo__title">To Do React</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
      />
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
