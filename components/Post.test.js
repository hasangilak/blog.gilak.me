import { shallow } from 'enzyme'
import React from 'react'
import Post from './Post'

describe('With Enzyme', () => {
  it('Post shows "Hello world!"', () => {
    const post = shallow(<Post text="Hello World!"/>)

    expect(post.find('p').text()).toContain('Hello World!')
  })
})

