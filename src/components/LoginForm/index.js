import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import NxtContext from '../../context/NxtContext'
import {
  BgContainer,
  Form,
  WebsiteLogo,
  InputContainer,
  Input,
  Label,
  LoginButton,
  ShowPasswordContainer,
  ErrorMessage,
} from './LoginStyles'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isChecked: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.push('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  changeCheckBox = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showSubmitError,
      isChecked,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <BgContainer darkMode={darkMode}>
              <Form>
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  onSubmit={this.submitForm}
                />
                <InputContainer>
                  <Label htmlFor="name">USERNAME</Label>
                  <Input
                    className="input"
                    type="text"
                    id="name"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="word">PASSWORD</Label>
                  <Input
                    className="input"
                    type={isChecked ? 'text' : 'password'}
                    id="word"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <input
                    type="checkbox"
                    id="checkBox"
                    className="input-check"
                    onChange={this.changeCheckBox}
                  />
                  <p htmlFor="checkBox">Show Password</p>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && (
                  <ErrorMessage className="error-message">
                    *{errorMsg}
                  </ErrorMessage>
                )}
              </Form>
            </BgContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LoginForm
