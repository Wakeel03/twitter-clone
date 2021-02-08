import './SidebarItem.css'

import React from 'react'

function SidebarItem({ Icon, name }) {
    return (
        <div className="sidebarItem">
            <Icon className="sidebarItem__icon"/>
            <div className="sidebarItem__name">{name}</div>
        </div>
    )
}

export default SidebarItem
