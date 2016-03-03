import AppDispatcher from '../dispatchers/appDispatcher'
import AppConstants from '../constants/appConstants'
import Promise from 'bluebird';

var stroage_id = 'todo_app';
var appActions = {

	create: function(todo){
		if(localStorage.getItem(stroage_id)){
			var todos = JSON.parse(localStorage.getItem(stroage_id));
			console.log(todos);
			var length = todos.length;
			todos.push({title:todo, status:'raw',uid: length+1});
		}
		else{
			var todos = [{title:todo, status:'raw',uid:1}]
		}
		localStorage.setItem(stroage_id,JSON.stringify(todos));
		AppDispatcher.dispatch({
			actionType: AppConstants.TODO_CREATE,
			successMsg:'success',
			errorMsg: null
		});
		
		
	},
	checked: function(id){
		var todos = JSON.parse(localStorage.getItem(stroage_id));	
		for (var i = 0; i < todos.length; i++) {
			if(todos[i].uid == id){
				todos[i].status = "completed";
			}			
		}
		localStorage.setItem(stroage_id,JSON.stringify(todos));		
		AppDispatcher.dispatch({
			actionType:AppConstants.TODO_COMPLETE,
			successMsg:'success',
			errorMsg:null
		});
	},
	deleted: function(id){
		console.log("deleted: ", id);
		var todos = JSON.parse(localStorage.getItem(stroage_id));	
		for (var i = 0; i < todos.length; i++) {
			if(todos[i].uid == id){
				todos[i].status = "deleted";
			}			
		}
		localStorage.setItem(stroage_id,JSON.stringify(todos));	
		AppDispatcher.dispatch({
			actionType:AppConstants.TODO_DESTROY,
			successMsg:'success',
			errorMsg:null
		});
		
	}
};

module.exports = appActions;