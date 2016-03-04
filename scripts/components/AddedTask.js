import React from 'react'
import { create, checked, deleted } from '../actions/appActions.js';
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import CloseIcon from 'grommet/components/icons/base/Close'

const mapTable = {
  '0': 'raw',
  '1': 'completed',
  '2': 'deleted'
};

var AddedTask = React.createClass({
	getInitialState() {
    return{
      title: this.props.todo.title,
      status : this.props.todo.status,
      uid: this.props.todo.uid,
      show: mapTable[this.props.selected] == this.props.todo.status,
      notRaw: this.props.todo.status === 'completed' || this.props.todo.status === 'deleted'
    };
  },
  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.todo.title,
      status : nextProps.todo.status,
      uid: nextProps.todo.uid,
      show: mapTable[nextProps.selected] == nextProps.todo.status,
      notRaw: nextProps.todo.status === 'completed' || nextProps.todo.status === 'deleted'
    })
  },
	handleChange(event){
		checked(this.state.uid);
	},
	handleClick(event){
		deleted(this.state.uid);
	},
  render() {
    return (
      this.state.show &&
      <div className="taskerBody">
        <Box direction="row">
          <div className = "toCompleteCheck">
            {
              (!this.state.notRaw) &&
              <input  type="checkbox"
                      onChange={this.handleChange}
                      checked={this.state.completed}>
              </input>
            }
          </div>
          <div className = "taskerName">
          	{this.state.title}
          </div>
          <div onClick = {this.handleClick}>
          {
            (!this.state.notRaw) &&
            <CloseIcon className = "deleteButton"/>
          }
          </div>
        </Box>

    	</div>

    );
  }
});

module.exports = AddedTask;