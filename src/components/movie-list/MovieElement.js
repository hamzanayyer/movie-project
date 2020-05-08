import React, { Component } from 'react'

export default class MovieElement extends Component {

  render () {
    return (
      <div className="w-50 p-2">
        <div className="border d-flex">
          <img width="150" height="200" alt="film" src="https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg"/>
          <div className="flex-fill d-flex flex-column p-3">
            <h5>Titre</h5>
            <hr className="w-100"></hr>
            <p>L'inspecteur Lee est un membre irréprochable de la Hong Kong Police Force. Il est par ailleurs un expert en arts martiaux.</p>
          </div>
        </div>
      </div>
    )
  }
}