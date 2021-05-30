import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#ffba60';
const theme = createMuiTheme({
	palette: {
		common: {
			arcBlue: arcBlue,
			arcOrange: arcOrange,
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
		},
	},
	typography: {
		h3: {
			fontWeight: 300,
		},
	},
});
console.log(theme);
export default theme;

//What is this createMuiTheme(options, args) function?
//Well, it creates an instance of the default theme provided by Mui and replaces/mutates/overwrites  values provided using the options object in the first argument, therefore customizing our theme
//createMuiTheme function returns a COMPLETE OBJECT(not just the overwrites) with all the theme with mutations/overwrites.
