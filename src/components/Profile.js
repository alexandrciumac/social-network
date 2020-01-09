import React from 'react'
import ProfileInfo from './ProfileInfo';
import Avatar from "./../img/santa-claus.svg"

const Profile = () => (
    <ProfileInfo name="Alexandro" dateOfBirth="6 March" city="Chisinau" education="UTM" website="www.muncitor.tk" userImage={Avatar} />
);

export default Profile;