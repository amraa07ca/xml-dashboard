import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';

import Properties from './properties/Properties';
import Communities from './communities/Communities';
import XmlStation from './xmlStation/XmlStation';

const fourtOFour = () => <h1 className="text-center">404</h1>

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRoute path='/home' exact component={Communities} />
                <PrivateRoute path='/properties' exact component={Properties} />
                <PrivateRoute path='/communities' exact component={Communities} />
                <PrivateRoute path='/xml-station' exact component={XmlStation} />
                <PrivateRoute component={fourtOFour} />
            </Switch>
        );
    }
}

export default Routes;