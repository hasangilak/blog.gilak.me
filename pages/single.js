import React from 'react'
import renderHTML from 'react-render-html'

function Single(props) {
    return renderHTML(props.post)
}

Single.getInitialProps = function (stuff) {
    return { ...stuff.query }
}

export default Single
