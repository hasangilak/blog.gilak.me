import React from 'react'
import renderHTML from 'react-render-html'

function Single(props) {
    return renderHTML(props.post)
}

Single.getInitialProps = function (stuff) {
    if(process.browser === false) {
        require('fs')
        console.log('shout out for me bro')
    }
    return { ...stuff.query }
}

export default Single
