import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import phone_img from "../images/phone.png"
import email_img from "../images/envelope.png"
import behance_img from "../images/behance.png"
import instagram_img from "../images/instagram.png"
import linkedin_img from "../images/linkedin.png"
import logo_img from "../images/logo-image.png"
const Header = ({ siteTitle }) => (
  <nav className="navbar-custom navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo-image" src={logo_img}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-menu collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav-custom navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
          <img className="navbar-right" src={phone_img}></img>
          <img className="navbar-right" src={email_img}></img>
          <img className="navbar-right" src={behance_img}></img>
          <img className="navbar-right" src={instagram_img}></img>
          <img className="navbar-right" src={linkedin_img}></img>
        </div>
      </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
