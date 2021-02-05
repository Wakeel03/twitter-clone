import './Feeds.css'
import Post from './Post'
import CreatePost from './CreatePost'

import React from 'react'

function Feeds() {
    return (
        <div className="feeds">
            <CreatePost />
            <Post />
        </div>
    )
}

export default Feeds
