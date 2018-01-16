const AppDispatcher = require('../dispatchers/appDispatcher');
const EventEmitter = require('events').EventEmitter;
const AppConstants = require('../constants/appConstants');
const assign = require('object-assign');

const CHANGE_EVENT = 'change';
const stroage_id = 'todo_app';

let _todos = JSON.parse(localStorage.getItem(stroage_id));
const Msg = {};

const appStore = assign({}, EventEmitter.prototype, {


  getAll() {
    return JSON.parse(localStorage.getItem(stroage_id));
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register((action) => {
  switch (action.actionType) {
    case AppConstants.TODO_CREATE:
      _todos = appStore.getAll();
      appStore.emitChange();
      break;
    case AppConstants.TODO_DESTROY:
      _todos = appStore.getAll();
      appStore.emitChange();
      break;
    case AppConstants.TODO_COMPLETE:
      _todos = appStore.getAll();
      appStore.emitChange();
      break;
    default:
  }
});
export default appStore;
