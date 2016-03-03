import React from 'react'
import AppActions from '../actions/appActions.js';



var ListedTask = React.createClass({
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
      	{props.name}    	
      </ul>
      
    	</div>
        
    );
  }
});

module.exports = ListedTask;