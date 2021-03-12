import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Products from './Products';
import AddProduct from './AddProduct';

function App() {
    return (
        <div>
            <Router basename={window.location.pathname || ""}>
                <NavBar />

                <Switch>
                    <Route exact path='/' />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/products/create' component={AddProduct} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
