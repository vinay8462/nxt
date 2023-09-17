import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import NavBar from '../NavBar'

class Home extends Component {
  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/all'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Header />
        <NavBar />
      </div>
    )
  }
}

export default Home
