import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css';

import {ChannelListContainer, ChannelContainer} from './components';

const apikey = 'j9yu763mcurm'; //we will get this after making an account on stream

const client = StreamChat.getInstance(apikey);


const App = () => {
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