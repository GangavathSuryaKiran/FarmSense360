import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profilepic from './profilepic.jpg';
import './UserProfile.css'; // Import a CSS file for styling

class UserProfile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props;

    return (
      <div className="user-profile">
        <img src={profilepic} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UserProfile);
