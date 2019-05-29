// @flow

import React, {type, Node} from 'react'

type Props = {
    text: string,
}

function Post({ text }: Props) {
    return <p> {text} </p>
}

export default Post