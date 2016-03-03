import React from 'react'

var Tab = React.createClass({
	handleClick(event){
		console.log("clicked! ",this.props.uid);
	},
	render(){
		var props = this.props;
		return(
			<li>
				<a onClick = {this.handleClick}>{props.uid}</a>
			</li>
		);
	}
});

var TabMenu = React.createClass({
	render(){
		var tabNode = this.props.tabs.map(function(tab){
			return <Tab key = {tab.uid}
									uid = {tab.uid}/>;
		});
		return(
			<ul>
				{tabNode}
			</ul>
		);
	}
});

module.exports = TabMenu;