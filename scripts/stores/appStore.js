var AppDispatcher = require('../dispatchers/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/appConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var stroage_id = 'todo_app';

var _todos = JSON.parse(localStorage.getItem(stroage_id));
var Msg = {};

var appStore = assign({},EventEmitter.prototype,{

	
	getAll: function() {
    return JSON.parse(localStorage.getItem(stroage_id));
  },
	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action){
	
	Msg.errorMsg = action.errorMsg;
	Msg.successMsg = action.successMsg;
	console.log(action.actionType);

	switch (action.actionType){
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
			console.log(_todos);
			appStore.emitChange();
			break;
		default:
	}






});
module.exports = appStore;