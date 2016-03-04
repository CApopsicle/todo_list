import React from 'react';
import { create, checked, deleted } from '../actions/appActions.js';


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
		  create(this.state.value);
		  this.setState({value: ''});
		}
	},
  render() {
    return (
      <div className="taskerHeader">
      	<input
          type="text"
  				className="inputTask"
  				placeholder="Enter a task"
  				value={this.state.value}
  				onChange = {this.handleChange}
  				onKeyDown={this.handleKeyDown}>
        </input>
      </div>
    );
  }
});

module.exports = InputBox;