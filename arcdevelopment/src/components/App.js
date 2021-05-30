import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Header />
				Hello
			</div>
		</ThemeProvider>
	);
}

export default App;
