import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import {UserContextConsumer} from './UserContext'

class App extends Component {
  state = {
    newUsername: ""
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <>
        <Header />
          <UserContextConsumer>
            {({username, handleUsername}) => (
                    <main>
              <p className="main">No new notifications, {username}! 🎉</p>

                  <input
                  type="text"
                  name="newUsername"
                  placeholder="New username"
                  value={this.state.newUsername}
                  onChange={this.handleChange}
              />
              <button onClick={() => handleUsername(this.state.newUsername)}>Change Username</button>
              </main>
            )}
          </UserContextConsumer>
             
      </>
    )

  }
}

export default App
