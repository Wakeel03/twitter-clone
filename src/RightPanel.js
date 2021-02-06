import React from 'react'
import './RightPanel.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function RightPanel() {
    return (
        <div className="rightPanel">
            <TwitterTimelineEmbed
                className="rightPanel__timeline"
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 400}}
            />
            
            {/* <TwitterTweetEmbed
                className=""
                tweetId={'933354946111705097'}
            /> */}

            <TwitterShareButton
                url={'https://facebook.com/saurabhnemade'}
                options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
        </div>
    )
}

export default RightPanel
