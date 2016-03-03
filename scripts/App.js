import React from 'react';
import ReactDOM from 'react-dom';

import 'grommet/grommet.min.css'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

import InputBox from './components/InputBox'
import AddedTask from './components/AddedTask'
import ListedTask from './components/ListedTask'
import AppActions from './actions/appActions.js'
import AppStore from './stores/appStore.js'

import '../style/InputBox.css'

function getTodoState(){
	var todos = AppStore.getAll();
	var completed = [];
	var raw = [];
	var deleted = [];
	if(todos){
		for (var i = 0; i < todos.length; i++) {
			switch(todos[i].status){
				case "raw":
					raw.push(todos[i]);
					break;
				case "completed":
					completed.push(todos[i]);
					break;
				case "deleted":
					deleted.push(todos[i]);
					break;
				default:
			}
			
		}
	}
	return {
		completed:completed,
		raw:raw,
		deleted:deleted
	}
}

var TabMenu = React.createClass({
	getInitialState(){
		console.log(this.props.children, this.props.selected);
		return {selected: this.props.selected, children: this.props.children}
	},
	handleClick(uid, event){
		this.setState({selected:uid});
	},
	renderContent(){
		return(
			<div>
        {this.props.children[this.state.selected]}
      </div>
		);
	},
	renderTitle(){		
		return(
			<div>
				<Box direction="row">
					<Box 	colorIndex="accent-1" 
								pad="small" 
								className = "Boxes"
								align="center"
								direction = "column"
								onClick = {this.handleClick.bind(this, 0)}>Add One</Box>
					<Box  colorIndex="neutral-1" 
								pad="small" 
								align="center"
								direction = "column"
								className = "Boxes"
								onClick = {this.handleClick.bind(this, 1)}>Completed</Box>
					<Box  colorIndex="warning" 
								pad="small" 
								align="center"
								direction = "column"
								className = "Boxes"
								onClick = {this.handleClick.bind(this, 2)}>Deleted</Box>
				</Box>
			</div>
		);
	},
	render(){		
		return(
			<div>
				{this.renderTitle()}
				<Box direction="row">
					<InputBox />
					<Button>Add One</Button>
				</Box>
				{this.renderContent()}				
			</div>
		);
	}
});


var MainComponent = React.createClass({
	
	getInitialState(){
		return getTodoState();
	},
	componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },
  _onChange(){
  	this.setState(getTodoState());
  },
	render(){
		console.log(this.state);
		var rawTodos = this.state.raw.map(function(item){
			return <AddedTask name = {item.title}
												key = {item.uid}
												id = {item.uid}/>;
		}.bind(this))
		var completedTodos = this.state.completed.map(function(item){
			return <ListedTask  name = {item.title}
													key = {item.uid}
													id = {item.uid}/>;
		}.bind(this))
		var deletedTodos = this.state.deleted.map(function(item){
			return <ListedTask  name = {item.title}
													key = {item.uid}
													id = {item.uid}/>;
		})
		return (
			<div style={{
				maxWidth:"400px",
				margin: "100px auto"
			}}>
				<TabMenu tabs={[{uid: "Add One"}, {uid: "Completed"}, {uid: "Deleted"}]} selected = {0}>
					{rawTodos}
      		{completedTodos}
      		{deletedTodos}
        </TabMenu>
        
        
			</div>
		);
	}
});

module.exports = MainComponent;
