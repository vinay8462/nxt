import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? 'black' : '#ffffff')};
  width: 85%;
`
export const NotFoundImage = styled.img`
  width: 400px;
`
export const NotFoundHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.darkMode ? '#ffffff' : 'black')};
`
export const NotFoundDescription = styled.p`
  font-size: 10px;
  color: ${props => (props.darkMode ? '#ffffff' : 'black')};
`

export const BelowContainer = styled.div`
  display: flex;
`
