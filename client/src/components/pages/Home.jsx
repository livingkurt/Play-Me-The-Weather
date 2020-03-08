import React, { useState } from 'react'
import Weather from '../functional_components/Weather'
import Music from '../functional_components/Music'
import './home.css.scss'

export default () => {

  return (
    <div className="home_container">
      <Weather />
      <Music />
    </div>
  )
}