import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    {/* <link className="navbar-brand" to="/">{props.title}</link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
          {/* <link className="nav-link active" to="/">Home</link> */}
          {/* <link className="nav-link active" aria-current="page" to="/">Home</link> */}
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="/About">{props.about}</a>
          {/* <link className="nav-link" to="/">{props.about}</link> */}
        </li>
        {/* <li className="nav-item">
          <link className="nav-link" to="/">Contact</link>
        </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

                   Navbar.propTypes = {
                    title: PropTypes.string.isRequired,
                    about: PropTypes.string 
                   }

                //    Navbar.defaultprops = {
                //     title: 'Set Title Here',
                //     about: 'Set About Here' 
                //    };
