import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {
    return ReactDom.createPortal (
    <h1>Portals Demo</h1>,
    document.getElementById('portal-root')
    )
}

export default PortalDemo
