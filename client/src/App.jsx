import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';

import {ChannelListContainer, ChannelContainer,Auth} from './components';

const apikey = '4n4u7scnuceh'; //we will get this after making an account on stream
const cookies = new Cookies();
const client = StreamChat.getInstance(apikey);
const authToken = cookies.get("token");

if(authToken) {
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}


const App = () => {
  if(!authToken)
  return <Auth/>
  return (
    <div className='app_wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>

    </div>
  )
}

export default App;