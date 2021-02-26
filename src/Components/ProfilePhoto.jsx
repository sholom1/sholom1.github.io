import React from 'react';
import photo from '../Images/profile.jpg';
import './ProfilePhoto.css';

function ProfilePhoto() {
	return (
		<div className="pfpContainer">
			<img className="profilephoto" src={photo} alt="Mugshot required." />
			<h1>Sam Kessler</h1>
			<h3 style={{ display: 'inline-flex' }}>Unity Gameplay Programmer</h3>
		</div>
	);
}

export default ProfilePhoto;
