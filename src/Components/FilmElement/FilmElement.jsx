import React, { Component } from 'react'
import {animated} from 'react-spring'
import './FilmElement.css'
import Rate from './../Rate/Rate';

export default class FilmElement extends Component {
    render() {
        
        
        return (
            <animated.div style={this.props.style} className="card-element" onClick={this.props.onClick}>
                <img src={this.props.photo} className="shadow" alt="image_1" />
                <h4>{this.props.title}</h4>
                <Rate
                    vues={this.props.vues}
                    num={this.props.num}
                />
            </animated.div>
        )
    }
}
