import React, { Component } from 'react';
import Features from './Features';

function MainForm(props) {
    return (
      <div>
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features
              features={props.features}
              handleUpdate={props.handleUpdate}
              selected={props.selected}
              />
          </section>
      </div>
    )
  }

export default MainForm



