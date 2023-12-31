import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({channel, type}) => {
  const{channel: activeChannel, client } = useChatContext();
  const ChannelPreview = () => {
    <p className='channel-preview-item'>
      #{channel?.data?.name || channel?.data?.id}
    </p>
  };

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID);
  
    return (
      <div className='channel-preview_item_single'>
        <Avatar 
          image ={members[0]?.user?.image}
          name ={members[0]?.user?.fullName}
          size ={24}
        />
        <p>{members?.user?.fullName}</p>
      </div>
    )
  }

  return (
    <div className={
      channel?.id === activeChannel?.id
      ?'channel-preview_wrapper_selected'
      :'channel-preview_wrapper'
    }
    onClick={() => {
      console.log(channel);
    }}
    >
        
    </div>
  )
}

export default TeamChannelPreview;