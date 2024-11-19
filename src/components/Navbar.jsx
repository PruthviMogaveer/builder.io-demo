import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
    <ul className="flex space-x-4 p-4">
      <li>
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
      </li>
      <li>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar