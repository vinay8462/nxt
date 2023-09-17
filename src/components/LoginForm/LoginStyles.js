import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.darkMode ? 'grey' : '#ffffff')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkMode ? '#ffffff' : 'black')};
  margin: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${props => (props.darkMode ? 'black' : '#ffffff')};
  box-shadow: 0px 0px 8px 0.5px #64748b;
  width: 30%;
  padding: 10px;
  color: #64748b;
  border-radius: 8px;
`

export const WebsiteLogo = styled.img`
  width: 130px;
  align-self: center;
  margin-bottom: 30px;
  margin-top: 50px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`
export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #64748b;
  background-color: transparent;
  color: #64748b;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  color: #64748b;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  padding-left: 20px;
`
