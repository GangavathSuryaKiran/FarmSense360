// UserProfile.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserDetails } from '../actions/authActions'; // Import the action to toggle user details

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle the state when the profile picture is clicked
    dispatch(toggleUserDetails()); // Dispatch an action to toggle user details state in Redux store
  };

  return (
    <div>
      <img
        src="/path/to/profile-picture.jpg"
        alt="Profile"
        onClick={handleClick} // Handle click event to toggle user details
      />
    </div>
  );
};

export default UserProfile;
