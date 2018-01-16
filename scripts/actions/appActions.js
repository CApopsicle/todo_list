import AppDispatcher from '../dispatchers/appDispatcher';
import AppConstants from '../constants/appConstants';

const stroageId = 'todo_app';
export const create = (todoName) => {
  let todos = [{ title: todoName, status: 'raw', uid: 1 }];
  if (localStorage.getItem(stroageId)) {
    todos = JSON.parse(localStorage.getItem(stroageId));
    const length = todos.length;
    todos.push({ title: todoName, status: 'raw', uid: length + 1 });
  }
  localStorage.setItem(stroageId, JSON.stringify(todos));
  AppDispatcher.dispatch({
    actionType: AppConstants.TODO_CREATE,
    successMsg: 'success',
    errorMsg: null,
  });
};

export const checked = (id) => {
  const todos = JSON.parse(localStorage.getItem(stroageId));
  const checkedTodo = todos.find(todo => todo.uid === id);
  checkedTodo.status = 'completed';
  localStorage.setItem(stroageId, JSON.stringify(todos));
  AppDispatcher.dispatch({
    actionType: AppConstants.TODO_COMPLETE,
    successMsg: 'success',
    errorMsg: null,
  });
};

export const deleted = (id) => {
  const todos = JSON.parse(localStorage.getItem(stroageId));
  const deletedTodo = todos.find(todo => todo.uid === id);
  deletedTodo.status = 'deleted';
  localStorage.setItem(stroageId, JSON.stringify(todos));
  AppDispatcher.dispatch({
    actionType: AppConstants.TODO_DESTROY,
    successMsg: 'success',
    errorMsg: null,
  });
};
