import React, { Component } from 'react'

export default class Corporation extends Component {
    render() {
        return (
            <div>
                <h1>CorporationBank is located @ {this.props.location}</h1>
            </div>
        )
    }
}
