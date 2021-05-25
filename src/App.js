import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

// import this to use css of bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import this to use js of bootstrap 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () =>{
    return(
        <>
            <Navbar/>
    {/* we use switch so that a single page is displayed among multiple pages thus forming SPA  */}
            <Switch>
            {/* route means url  */}
                <Route exact path= "/" component= {Home} />
                <Route exact path= "/about" component= {About} />
                <Route exact path= "/service" component= {Service} />
                <Route exact path= "/contact" component= {Contact} />

                {/* here we will not give any error page  */}
                <Redirect to= "/" />
            </Switch>
            <Footer/>
        </>
    );
};

export default App;
