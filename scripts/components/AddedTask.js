import React from 'react'
import AppActions from '../actions/appActions.js';




var AddedTask = React.createClass({
	getInitialState: function () {
    return { value: (this.props.checked) || false };
  },
	handleChange(event){
		this.setState({ value: event.target.checked });
		console.log(this.state.value, this.props.id);
		AppActions.checked(this.props.id);
	},
	handleClick(event){
		AppActions.deleted(this.props.id);
	},
  render() {
  	var props = this.props;
    return (      
      <div className="taskerBody" style = {{
      	display: "block",
      	position: "relative",
      	padding: "14px 40px 14px 14px",
      	borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
      }}>
      <ul style={{paddingLeft:"10px"}}>
      	<input  type="checkbox" 
				      	style={{marginRight: "10px"}} 
				      	onChange={this.handleChange}
				      	checked={this.state.value}>
      	</input>
      	{props.name}
      	<button style={{
      		margin: "14px",
      		position: "absolute",
      		top: "20",
      		right: "0"
      	}} onClick = {this.handleClick}>
      	Delete
      	</button>
      </ul>
      
    	</div>
        
    );
  }
});

module.exports = AddedTask;