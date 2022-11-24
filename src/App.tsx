import { Route, BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Page from "./About";

function App() {
	return (
		<div className="App">
			{/* <Switch> */}
			{/* <Router>
				<Route path="/" exact component={Home} />
				<Route path="/page">
					<Page />
				</Route>
			</Router> */}
			<Home />
			{/* </Switch> */}
		</div>
	);
}

export default App;
