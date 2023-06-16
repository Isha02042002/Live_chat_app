import React from 'react';

//import {AddChannel} from '../assets/AddChannel';

const TeamChannelList = ({ children, error = false, loading, type}) => {
  if(error){
    return type ==='team' ? (
        <div className='team-channel-list'>
            <p className='team-channel-list_message'>
                Connection error, please wait and try again
            </p>
        </div>
    ):null
  }

  if(loading){
    return (
        <div className='team-channel-list'>
            <p className='team-channel-list_message loading'>
                {type === 'team' ? 'channels' : 'Messages'} loading...
            </p>
        </div>
    )
  }
  
    return (
    <div className='team-channel-list'>
      <div className='team-channel-list_header'>
        <p className='team-channel-list_header_title'>
          {type === 'team' ? 'channels' : 'Direct Messages'}
        </p>
        {/* <button /> */}
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList;