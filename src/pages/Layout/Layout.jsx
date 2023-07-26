import React from 'react'
import Home from '../Home'
import { SwitchTransition , CSSTransition } from "react-transition-group"
import { Outlet } from 'react-router-dom'
export default function index() {
  return (
      <div>
        <SwitchTransition>
          <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
              <div>
                  <Outlet/>
              </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
  )
}
