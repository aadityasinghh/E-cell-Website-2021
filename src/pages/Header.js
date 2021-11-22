import React from 'react';
import '../css/Header.css';


const Header = () => {
	return (
        <div className="header">
        <div className="overlay"></div>
        <div className="row">
        <div className="d-none d-sm-none d-md-block" id="particles-js"></div>
            <div className="header-content col">
                <h1 className="head ">THE<br/>ENTREPRENEURSHIP<br/>CELL</h1>
                <h2 className="subhead">KIET GROUP OF INSTITUTIONS</h2>
            </div>
        </div>
    </div>
      );
    };

    export default Header;