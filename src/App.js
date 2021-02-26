import './App.css';
import RoutesView from './Components/Routes/RoutesView';
import Navbar from './Components/Navigation/Navbar';

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<RoutesView />
		</div>
	);
}

export default App;
