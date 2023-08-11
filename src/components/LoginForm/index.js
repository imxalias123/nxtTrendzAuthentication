// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data.errorText)

    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({
        showErrorMsg: true,
        errMsg: data.error_msg,
      })
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="username-flex">
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          className="input"
          placeholder="Username"
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="password-flex">
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          className="input"
          placeholder="Password"
        />
      </div>
    )
  }

  render() {
    const {errMsg, showErrorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-large-login"
        />
        <form onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-large-logo"
          />
          {this.renderUsername()}
          {this.renderPassword()}
          <button type="submit" className="login">
            Login
          </button>
          {showErrorMsg && <p>{errMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
