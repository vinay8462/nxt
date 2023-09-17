import styled from 'styled-components'

export const NavbarTop = styled.nav`
  display: flex;
  padding: 8px;
  background-color: ${props => (props.darkMode ? 'black' : '#ffffff')};
  color: white;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  height: 10vh;
  width: 100%;
`

export const NavImgLogo = styled.img`
  width: 100px;
  margin-top: 16px;
  align-self: center;
`
export const TopRightContainer = styled.ul`
  display: flex;
  list-style: none;
`

export const ProfileImg = styled.img`
  width: 30px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px;
  border: solid ${props => (props.darkMode ? '#ffffff' : '#3b82f6')};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 70px;
`
export const List = styled.li`
  margin: 10px;
  align-self: center;
`
export const NavbarLeft = styled.nav`
  width: 15%;
  background-color: ${props => (props.darkMode ? 'black' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : 'black')};
  height: 90vh;
  margin: 0%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavLeftItems = styled.nav`
  list-style: none;
`
export const LeftItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Item = styled.p`
  font-weight: 600;
  margin-left: 10px;
`
export const NavLeftBottom = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavHeading = styled.h1`
  font-size: 16px;
  font-weight: bold;
`
export const IconsContainer = styled.div`
  display: flex;
`

export const NavIcon = styled.img`
  width: 30px;
  padding-right: 10px;
`
export const Para = styled.p`
  font-size: 12px;
  font-weight: 600;
`
export const CancelButton = styled.button`
  background-color: transparent;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px;
  border: solid #3b82f6;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 70px;
  margin-top: 5px;
  margin-right: 5px;
`

export const ConfirmButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 70px;
  margin-top: 5px;
  margin-left: 5px;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#1e293b' : '#ffffff')};
  color: ${props => (props.darkMode ? '#ffffff' : 'black')};
  border-radius: 8px;
  width: 25vw;
  height: 25vh;
`
export const ColorChangeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: 2px;
  cursor: pointer;
`
