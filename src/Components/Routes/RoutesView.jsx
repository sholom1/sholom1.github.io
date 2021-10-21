import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage, Contact } from '../';
import { ProjectsComponent } from '../Pages';

function RoutesView() {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/projects" component={ProjectsComponent}/>
			<Route exact path="/projects/XavianHathor" />
			<Route exact path="/projects/ElectionMapbox" />
		</Switch>
	);
}
export default RoutesView;
