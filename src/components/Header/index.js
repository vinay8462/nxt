import Popup from 'reactjs-popup'

import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'

import {
  NavbarTop,
  NavImgLogo,
  TopRightContainer,
  ProfileImg,
  LogoutButton,
  List,
  Para,
  CancelButton,
  ConfirmButton,
  PopupContainer,
  ColorChangeButton,
} from './Header'

const Header = props => (
  <NxtContext.Consumer>
    {value => {
      const {darkMode, toggleMode} = value
      const onChangeTheme = () => {
        toggleMode()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          <NavbarTop darkMode={darkMode}>
            <Link to="/">
              {darkMode ? (
                <NavImgLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <NavImgLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}
            </Link>
            <TopRightContainer>
              <List>
                <ColorChangeButton type="button" onClick={onChangeTheme}>
                  {darkMode ? (
                    <FiSun size="20px" color="#ffffff" />
                  ) : (
                    <FaMoon size="20px" />
                  )}
                </ColorChangeButton>
              </List>
              <List>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </List>
              <List>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      darkMode={darkMode}
                      type="button"
                      className="logout-btn"
                    >
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <PopupContainer darkMode={darkMode}>
                        <Para>Are you sure,you want to logout?</Para>
                        <div>
                          <CancelButton type="button" onClick={() => close()}>
                            Cancel
                          </CancelButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </div>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </List>
            </TopRightContainer>
          </NavbarTop>
        </>
      )
    }}
  </NxtContext.Consumer>
)
export default withRouter(Header)
