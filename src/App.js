import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-brands-svg-icons';
import * as Icon2 from '@fortawesome/free-solid-svg-icons'

import './App.css';

import Button from './components/button';

function App() {
  const [ tech, setTech ] = useState('react');

  function alterTech(tech){
    setTech(tech);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="app_title" > 
          <FontAwesomeIcon icon={Icon2.faBolt} /> 
          ElectronJS and ReactJS! 
          <FontAwesomeIcon icon={Icon.faReact} /> 
        </h1>
      </div>
      <div className="content">
        <div className="box">

          <h2 className="describe-app" >This is a fremework test, using ElectronJS and ReactJs</h2>

          <div className="container-what-is">
            <div className="container-buttons">
              <Button text='What is ReactJS?' onClick={() => alterTech('react')} />
              <Button text='What is ElectronJS?' onClick={() => alterTech('electron')} />
            </div>

            <div className="describe-tech">
              <h5> { tech === 'react'? `React` : `Electron` } </h5>
              <p className="description">
                {tech === 'react'? 
                  `
                  React is a library from build reactives aplications
                  ` : 
                  `
                  Electron is a framework from build desktop aplications
                  ` }
              </p>
            </div>
          </div>

        </div>
        <h3 className="creator"> <FontAwesomeIcon icon={Icon2.faCoffee} fontSize={12} style={{marginRight: 10}} /> Samuel Guedes</h3>
      </div>
    </div>
  );
}

export default App;