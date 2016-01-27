import React from 'react';
import request from 'superagent'

class StackOverflowProfile extends React.Component {
	constructor(props) {
	  	super(props);
	    var self = this;

		this.state = {
	    	userData: {}
	    };

		request
			.get(`https://api.stackexchange.com/2.2/users/${this.props.userId}?site=stackoverflow`)
			.then(function(response){
				self.setState({ userData: response.body.items[0] });
			});
  }

	render() {
    if (this.state.userData.user_id != undefined) {
      return <div className='stackoverflow-profile'>
      	<div className="stackoverflow-icon"></div>
      	<img className='profile-photo' src={this.state.userData.profile_image}/>
        <div className='top'>
          <div className='profile-info'>
            <div className='profile-name'>{this.state.userData.display_name}</div>
            <div className='profile-location'>{this.state.userData.location}</div>
            <div className='profile-stats-repo'>{this.state.userData.reputation}</div>
          </div>
        </div>
        <div className='bottom'>
          <div className='profile-stats-badge-gold'>{this.state.userData.badge_counts.gold}</div>
          <div className='profile-stats-badge-silver'>{this.state.userData.badge_counts.silver}</div>
          <div className='profile-stats-badge-bronze'>{this.state.userData.badge_counts.bronze}</div>
        </div>
      </div>;
    } else {
    	return <div className='stackoverflow-profile-loading'><span>Loading...</span></div>;
    }
  }
}

export default StackOverflowProfile;
