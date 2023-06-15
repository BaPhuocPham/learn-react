import React from "react";
import './Navigation.css';
import { useContext } from 'react'
import { ThemeContext } from "../ThemeContext";


function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul className="navBar">
          <li>
            <a 
              style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: 'none'
                }}
              className="active" 
              href="#home">Home
            </a>
          </li>
          <li>
            <a 
              style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: 'none'
                }}
                href="#news">News
            </a>
          </li>
          <li>
            <a 
              style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: 'none'
                }}
                href="#about">About
            </a>
          </li>
          <li>
            <a 
              style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: 'none'
                }}
              href="#contact">Contact
          </a>
          </li>
        </ul>
        <div style={{
            position: 'relative',
            display: "flex",
            justifyContent: 'flex-end',
            paddingRight: '20px'
          }}>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a 
            className='switch-mode' 
            href='#' onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }}
           data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>

      </nav>
    </div>
  )
}

export default Navigation