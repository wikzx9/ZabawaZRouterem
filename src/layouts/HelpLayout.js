import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className='help-layout'>

        <h2>Webside Helo</h2>
        <p>lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10lorem10

        </p>
        <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
        <Outlet />
        
        </div>
  )
}
