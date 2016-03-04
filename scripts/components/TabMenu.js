import React from 'react'
import Box from 'grommet/components/Box'
import InputBox from './InputBox'

var TabMenu = React.createClass({
	getInitialState(){
		return {
			selected: this.props.selected,
			currentTab: this.props.currentTab
		}
	},
	onTabChange(event,uid){
		const currentTab = uid.split(':')[1];
		this.props.onTabChange(currentTab);
	},
	render(){
		return(
			<div>
				<div>
					<Box direction="row">
						<Box 	colorIndex="grey-1"
									pad="small"
									className = "Boxes"
									align="center"
									direction = "column"
									uid ="0"
									onClick = {this.onTabChange}>Add One</Box>
						<Box  colorIndex="neutral-1"
									pad="small"
									align="center"
									direction = "column"
									className = "Boxes"
									uid ="1"
									onClick = {this.onTabChange}>Completed</Box>
						<Box  colorIndex="warning"
									pad="small"
									align="center"
									direction = "column"
									className = "Boxes"
									uid ="2"
									onClick = {this.onTabChange}>Deleted</Box>
					</Box>
				</div>
				<div>
					<Box direction="row">
						<InputBox/>
					</Box>
				</div>
			</div>
		);
	}
});

module.exports = TabMenu;