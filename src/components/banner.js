import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import banner_img from "../images/bg-image.png"
import dashboard_img from"../images/dashboard-image.svg"
import client_img from "../images/client-image.png"


const Banner = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      dashboard: file(relativePath: { eq: "dashboard-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <div className="banner">
      <div className="">
        <div className="row">
          <div className="">
          <img className="bg-image" src={banner_img} />
          {children}
          <div className="btn-primary"><p>Lets Work</p></div>
          <div className="dashboard-img">
          <img className="dashboard-image" src={dashboard_img}></img>
          </div>
          <img className="client-img" src={client_img}></img>
          {/* <Img className="dashboard-image" fluid={data.dashboard.childImageSharp.fluid} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;