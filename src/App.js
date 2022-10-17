import './App.css';
import Download from './components/Download';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Showcase from './components/Showcase';

function App() {
	return (
		<div>
			<header>
				<NavBar />
			</header>
			<main>
				<Hero />
				<Showcase />
				<Download />
				<Features />
				<Faq />
				<Footer />
			</main>
		</div>
	);
}

export default App;
