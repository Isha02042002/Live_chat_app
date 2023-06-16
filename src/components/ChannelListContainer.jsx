import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './All_css_files/ChannelListContainer.css';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import icon1 from '../assets/icon1.png';
import logout from '../assets/logout.png';

const SideBar = () => (
    <div className='channel-list_sidebar'>
        <div className='channel-list_sidebar_icon'>
            <div className='icon1'>
                <img src = {icon1} alt ='Icon' />
            </div>
            <div className='icon1'>
                <img src = {logout} alt ='Icon' />
            </div>
        </div>
    </div>
    
)

const CompanyHeader = () => (
    <div className="channel-list_header">
        <p className='channel-list_header_text'>
            Stream Chat App
        </p>
    </div>
)

const ChannelListContainer =() => {
  return(
    <>
        <SideBar />
        <div className='channel-list_wrapper'>
            <CompanyHeader/>
            <ChannelSearch />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listprops) => (
                    <TeamChannelList
                        {...listprops}
                        type='team'
                    />
                )}
                Preview={(previewprops) => (
                    <TeamChannelPreview
                        {...previewprops}
                        type='team'  
                    />
                )}
            />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listprops) => (
                    <TeamChannelList
                        {...listprops}
                        type='messaging'
                    />
                )}
                Preview={(previewprops) => (
                    <TeamChannelPreview
                        {...previewprops}
                        type='messaging'  
                    />
                )}
            />
        </div>
    
    </>
  );
}

export default ChannelListContainer;