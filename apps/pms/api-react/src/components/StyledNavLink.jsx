/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavLink = (props) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${props.className} ${isActive ? " invisible ml-4 "  : "p-2 hover:bg-pink-950 text-2xl font-bold"}`
      }
    />
  );
}
export default StyledNavLink