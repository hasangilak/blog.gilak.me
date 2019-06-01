import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`


function About() {
  return <Paragraph> hello people </Paragraph>
}

export default About