import AddTaskForm from './AddTaskForm';
import DateTime from './DataTime';
import SearchTaskForm from './SearchTaskForm';
import TodoInfo from './TodoInfo';
import TodoList from './TodoList';

const Todo = () => {
  const tasks = [
    { id: 'task-1', title: 'task name 1', isDone: false },
    { id: 'task-2', title: 'task name 2', isDone: true },
    { id: 'task-3', title: 'task name 3', isDone: false },
  ];

  const deleteAllTasks = () => {
    console.log('delete all tasks');
  };

  const deleteTask = (taskId) => {
    console.log(`delete task ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Task ${taskId} status: ${isDone ? 'done' : 'not done'}`);
  };

  const filterTasks = (query) => {
    console.log(`Search: ${query}`);
  };

  const addTask = () => {
    console.log('task added');
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do React</h1>
      <DateTime />
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllbuttonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
