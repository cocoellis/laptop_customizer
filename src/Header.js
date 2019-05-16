import React, { Component } from 'react';
import './App';

export class Header extends Component {
  render() {
    return (
      <div className='mainHeader'>
        <header>
            <h1>ELF Computing</h1>
                <h3>Laptops</h3>
                    <h5>Customize your laptop</h5>  
        </header>  
      </div>
    )
  }
}

export default Header;