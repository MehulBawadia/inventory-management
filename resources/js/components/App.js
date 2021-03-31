import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Products from './Products';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function App() {
    return (
        <div>
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path='/' component={Products} />
                    <Route exact path='/create' component={AddProduct} />
                    <Route exact path='/:id/edit' component={EditProduct} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
