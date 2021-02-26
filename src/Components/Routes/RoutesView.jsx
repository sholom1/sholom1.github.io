import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from '../';

function RoutesView() {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/contact" />
			<Route exact path="/projects" />
			<Route exact path="/projects/XavianHathor" />
			<Route exact path="/projects/ElectionMapbox" />
		</Switch>
	);
}
export default RoutesView;
