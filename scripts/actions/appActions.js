import AppDispatcher from '../dispatchers/appDispatcher'
import AppConstants from '../constants/appConstants'

var stroage_id = 'todo_app';
export const create = (todo) => {
	if(localStorage.getItem(stroage_id)){
		var todos = JSON.parse(localStorage.getItem(stroage_id));
		const length = todos.length;
		todos.push({ title: todo, status: 'raw', uid: length + 1 });
	} else {
		var todos = [{ title: todo, status: 'raw', uid: 1 }];
	}
	localStorage.setItem(stroage_id,JSON.stringify(todos));
	AppDispatcher.dispatch({
		actionType: AppConstants.TODO_CREATE,
		successMsg:'success',
		errorMsg: null
	});
}

export const checked = (id) => {
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
}

export const deleted = (id) => {
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



