import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
    state = {
        username: "jail55"
    }

    handleUsername = (username) => {
        this.setState({username})
    }

    render() {
        const {username} = this.state
        return (
            <Provider value={{username, handleUsername:this.handleUsername}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}


