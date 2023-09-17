import Header from '../Header'
import NavBar from '../NavBar'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundDescription,
  NotFoundHeading,
  BelowContainer,
} from './NotFound'

import NxtContext from '../../context/NxtContext'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {darkMode} = value
      const imgUrl = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <BelowContainer>
            <NavBar />
            <NotFoundContainer darkMode={darkMode}>
              <NotFoundImage
                src={imgUrl}
                alt="not found"
                className="not-found-img"
              />
              <NotFoundHeading darkMode={darkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription darkMode={darkMode}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </BelowContainer>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
