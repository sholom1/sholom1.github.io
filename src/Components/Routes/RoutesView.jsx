import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage, Contact } from '../';

function RoutesView() {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/projects" />
			<Route exact path="/projects/XavianHathor" />
			<Route exact path="/projects/ElectionMapbox" />
		</Switch>
	);
}
export default RoutesView;
