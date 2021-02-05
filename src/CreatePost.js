import './CreatePost.css'

import React from 'react'

function CreatePost() {
    return (
        <div className="createPost">
            <div className="createPost__header">
                <h2>Home</h2>
            </div>
            <form>
                <input placeholder="What's happening?" />
                <button type="submit">Tweet</button>
            </form>
            
        </div>
    )
}

export default CreatePost
