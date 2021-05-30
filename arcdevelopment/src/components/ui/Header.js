import React from 'react';
import {
	AppBar,
	Toolbar,
	useScrollTrigger,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
	},
})); //there should be instant return of the object. So parentheses() please

function Header() {
	const classes = useStyles();
	function ElevationScroll(props) {
		const { children } = props;

		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 0,
		});

		return React.cloneElement(children, {
			elevation: trigger ? 4 : 0,
		});
	}

	return (
		<>
			<ElevationScroll>
				<AppBar position='fixed'>
					<Toolbar>
						<Typography variant='subtitle1' color='success'>
							Arc Development
						</Typography>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}

export default Header;
//WHY TOOLBAR
//Why do you need toolbar? to stack the contents of the AppBar horizontally
//The default position is fixed, so, if you add contents aside it or below, it is going to hide them because it gets out of the normal document flow when position is fixed. Another  option is static

//APPBAR TRANSITION
// useScrollTrigger is a hook that is an event listener and listens for scroll events
// disableHysteresis is if you want some delay
// threshold how far the user has to scroll before the event lister is triggered

// return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
// })
//what does this mean: This means, everything you wrap inside the elevation scroll component will be rendered in the following way. The <ElevationScroll> component clones the children and returns the children with the given elevation

//color='primary, secondary...'comes from our theme

//SOLVING THE FLOATING TOOLBAR AND USING THE THEM IN INLINE STYLING
//You can pass in the theme that you've provided with the theme provider as an argument and use that too. here we use that to add a margin at the bottom
//DON'T FORGET, MAKESTYLES() ACCEPTS FUNCTION ONLY WITH INSTANT RETURN OBJECT IN THE ARGUMENT. SO PARENTHESES() PLEASE
