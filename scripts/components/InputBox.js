import React from 'react';
import AppActions from '../actions/appActions.js';


var ENTER_KEY_CODE = 13;

var InputBox = React.createClass({
	getInitialState(){
		return {value: this.props.value || ''};
	},
	handleChange(event){
		this.setState({value: event.target.value});
	},
	handleKeyDown(event){
		if (event.keyCode === ENTER_KEY_CODE) {
			console.log(this.state.value);
		  AppActions.create(this.state.value);
		  this.setState({value: ''});
		}
	},
  render() {
    return (       
      <div className="taskerHeader">
      	<input 	type="text" 
      					className="inputTask" 
      					placeholder="Enter a task" 
      					value={this.state.value} 
      					onChange = {this.handleChange}  
      					onKeyDown={this.handleKeyDown}></input>
      	
      	
      </div>
    			
    			
    			
    	
        
    );
  }
});

module.exports = InputBox;