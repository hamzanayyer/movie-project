import React, { Component } from 'react'

export default class MovieElement extends Component {

  render () {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img alt="rushHour" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rush-hour-3-1549976707.jpg?crop=0.637xw:1.00xh;0.0937xw,0&resize=480:*" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">RUSH HOUR</h5>
            <p className="card-text">L'inspecteur Lee est un membre irréprochable de la Hong Kong Police Force. Il est par ailleurs un expert en arts martiaux.</p>
          </div>
        </div>
      </div>
    )
  }

}