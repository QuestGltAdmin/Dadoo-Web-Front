import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
    return (
        <div className="home-layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout