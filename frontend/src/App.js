import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<main className="py-3">
					<Container>
						<Route path="/" exact component={HomeScreen} />
						<Route path="/product/:id" component={ProductScreen} />
					</Container>
				</main>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
