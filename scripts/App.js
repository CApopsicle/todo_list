import React from 'react';
import ReactDOM from 'react-dom';

import 'grommet/grommet.min.css'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

import InputBox from './components/InputBox'
import AddedTask from './components/AddedTask'
import TabMenu from './components/TabMenu'
import AppActions from './actions/appActions.js'
import AppStore from './stores/appStore.js'

import '../style/style.css'

var MainComponent = React.createClass({

	getInitialState(){
		return{
			todos: AppStore.getAll() || [],
			currentTab: 0 // 0 -> add One , 1 -> completed, 2 -> deleted
		}
	},
	componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  },
  _onChange(){
  	this.setState({ todos: AppStore.getAll() });
  },
  changeTab(currentTab){
  	this.setState({ currentTab });
  },
	render(){
		return (
			<div className = "main">
				<TabMenu
					tabs={[{uid: "Add One"}, {uid: "Completed"}, {uid: "Deleted"}]}
					selected = {this.state.currentTab}
					onTabChange = {this.changeTab} />
					{
						this.state.todos.map(todo =>
							<AddedTask
								selected={this.state.currentTab}
								key={todo.uid}
								todo={todo} />
						)
					}
			</div>
		);
	}
});

module.exports = MainComponent;
