import {withRouter} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdStorage} from 'react-icons/md'
import NxtContext from '../../context/NxtContext'
import {
  NavbarLeft,
  NavLeftItems,
  LeftItem,
  Item,
  NavLeftBottom,
  NavHeading,
  NavIcon,
  IconsContainer,
  Para,
} from './NavItems'

const NavBar = () => (
  <NxtContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <NavbarLeft darkMode={darkMode}>
          <NavLeftItems>
            <LeftItem>
              <AiFillHome />
              <Item>Home</Item>
            </LeftItem>
            <LeftItem>
              <AiFillFire />
              <Item>Trending</Item>
            </LeftItem>
            <LeftItem>
              <SiYoutubegaming />
              <Item>Gaming</Item>
            </LeftItem>
            <LeftItem>
              <MdStorage />
              <Item>Saved Videos</Item>
            </LeftItem>
          </NavLeftItems>
          <NavLeftBottom>
            <NavHeading>CONTACT US</NavHeading>
            <IconsContainer>
              <NavIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <NavIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <NavIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <Para>Enjoy! Now to see your channels and recommendations</Para>
          </NavLeftBottom>
        </NavbarLeft>
      )
    }}
  </NxtContext.Consumer>
)

export default withRouter(NavBar)
