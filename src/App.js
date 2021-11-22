import React from 'react';

import Homepage from "./pages/Homepage";
import Logo from "./pages/Logo";
import Aboutus from './pages/Aboutus';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Glimpse from './pages/Glimpse';

const App = () => {
	return (
    <div>
	    <Logo/>
	    <Header/>
		<Homepage/>
		<Aboutus/>
		<Glimpse/>
	</div>
	);
};

export default App;          