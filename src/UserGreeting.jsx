import React from 'react'
import PropTypes from 'prop-types'

function UserGreeting(props) {
    const WelcomeMessage=<h2 className='welcome'>Welcome {props.userName}</h2>
    const PleaseLogin=<h2 className='login'>LOGIN KARO BEHEN KE LODE</h2>
    return(props.isLoggedIn? WelcomeMessage : PleaseLogin);
}

UserGreeting.propTypes={
    isLoggedIn:PropTypes.bool,
    userName:PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    userName:"Guest"
}
export default UserGreeting;
