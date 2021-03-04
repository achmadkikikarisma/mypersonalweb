import React from "react"
import {Helmet} from "react-helmet";
import {useStaticQuery,graphql} from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import productdesign_img from "..//images/product-design-image.svg"
import development_img from "../images/development-image.svg"
import graphicdesign_img from "../images/graphic-design-image.svg"

import footer_img from"../images/footer-image.png"
import paypal_img from "../images/paypal-image.png"
import transferwise_img from "../images/transferwise-image.png"
import line1_img from "../images/line1-image.png"
import line2_img from "../images/line2-image.png"
import line3_img from "../images/line3-image.png"


import Banner from "../components/banner"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.9.95/css/materialdesignicons.css" rel="stylesheet"></link>
    <div className="headline">
      <Banner ><h1>Build Valuable Product<br/>Here!</h1></Banner>
    <Img fluid></Img>
    <section className="product-design d-flex position-relative">
    <div className="services"><h1 className="services-headline">Services</h1></div>
     <div className="container mt-5 py-5">
       <div className="row align-items-center mt-5">
         <div className="block col-sm-6">
         <img className="product-design-image" src={productdesign_img} />
         </div>
         <div className="block col-sm-6">
           <h4 className="title">
            Product Design
           </h4>
           <span className="description d-inline-block mb-3">
           We will help you build a mobile design or website design including UX able, and Clean UI, Usually we customize that process depending on the project needs and final goals.
           </span>
           <Link className="btn-services-productdesign btn-orange" to="/contact">
              Lets Work
          </Link>
         </div>
       </div>
     </div>
   </section>
   <section className="development position-relative">
     <div className="container">
      <div className="row align-items-center mt-5">
        <div className="col-md-5">
          <h4 className="title">
          Development
          </h4>
          <span className="description d-inline-block mb-4">
          We will help you build a mobile app or website development you can request the whats programming language you want we can develop with all programming language and all web builder.
          </span>
          <Link className="btn-services-development btn-orange" to="/contact">
          Lets Work
          </Link>
        </div>
        <div className="col-md-7">
          <img style={{width: '90%'}} className="img-fluid" src={development_img}/>
        </div>
      </div>
     </div>
     {/* <img className="illustration" src={illustration}/> */}
   </section>
   <section className="graphic-design d-flex position-relative">
     <div className="container mt-5 py-5">
       <div className="row align-items-center mt-5">
         <div className="block col-sm-6">
         <img className="graphic-design-image" src={graphicdesign_img} />
         </div>
         <div className="block col-sm-6">
           <h4 className="title">
            Graphic Design
           </h4>
           <span className="description d-inline-block mb-3">
           We will help you design your company needs like the card, banner, voucher, brochure etc. We can help you fromscrats if you dont have project requirments.
           </span>
           <Link className="btn-services-graphic-design btn-orange" to="/contact">
              Lets Work
          </Link>
         </div>
       </div>
     </div>
   </section>
  </div>
  <div className="pricing container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <h1 className="pricing-headline font-weight-light">Pricing</h1>
            <p className="pricing-info mt-4 title-subtitle mx-auto">Usually we customize that process depending on the project needs and final goals.<br/>The price and timeline will depening on projects need and final goals </p>
          </div>
        </div>                
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-white mt-3 price-box">
              <div className="pricing-name text-center">
              <img className="paypal-image" src={line1_img}/>
                <h4 className="pricing-product-design mb-0">Product Design</h4>
              </div>
              <div className="plan-price text-center mt-4">
                <h1 className="text-custom font-weight-normal mb-0">$500 - $1K</h1>
              </div>
              <div className="card-1 price-features mt-5">
                <p><i className="mdi mdi-check" /> Mobile Design or Web Design</p>
                <p><i className="mdi mdi-check" /> Commercial use</p>
                <p><i className="mdi mdi-check" /> Source file ( Sketch, Figma, Adobe XD )</p>
                <p><i className="mdi mdi-check" /> 2 Revisions</p>
                <p><i className="mdi mdi-check" /> 1 day - 1 month</p>
                <p><i className="mdi mdi-check" /> Available 24/7</p>
                {/* <p><i className="mdi mdi-check" /> *Price and timeline will depending on project requirment</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white mt-3 price-box">
              <div className="pricing-name text-center">
              <img className="paypal-image" src={line2_img}/>
                <h4 className="pricing-development mb-0">Development</h4>
              </div>
              <div className="plan-price text-center mt-4">
                <h1 className="text-custom font-weight-normal mb-0">$1K - $100K</h1>
              </div>
              <div className="price-features mt-5">
                <p><i className="mdi mdi-check" /> Mobile Design or Web Design</p>
                <p><i className="mdi mdi-check" /> Commercial use</p>
                <p><i className="mdi mdi-check" /> Source file</p>
                <p><i className="mdi mdi-check" /> 2 Revisions</p>
                <p><i className="mdi mdi-check" /> 3 days - 6month+</p>
                <p><i className="mdi mdi-check" /> Available 24/7</p>
                {/* <p><i className="mdi mdi-check" /> *Price and timeline will depending on project requirment</p> */}
              </div>
              {/* <div className="text-center mt-5">
                <a href="#" className="btn btn-custom text-white">Join Now</a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white mt-3 price-box">
              <div className="pricing-name text-center">
              <img className="paypal-image" src={line3_img}/>
                <h4 className="pricing-graphic-design mb-0">Graphic Design</h4>
              </div>
              <div className="plan-price text-center mt-4">
                <h1 className="text-custom font-weight-normal mb-0">$100 - $1K</h1>
              </div>
              <div className="price-features mt-5">
                <p><i className="mdi mdi-check" /> Design can request</p>
                <p><i className="mdi mdi-check" /> Commercial use</p>
                <p><i className="mdi mdi-check" /> Source file</p>
                <p><i className="mdi mdi-check" /> 2 Revisions</p>
                <p><i className="mdi mdi-check" /> 1 days - 1month</p>
                <p><i className="mdi mdi-check" /> Available 24/7</p>
                {/* <p><i className="mdi mdi-check" /> *Price and timeline will depending on project requirment</p> */}
              </div>
              {/* <div className="text-center mt-5">
                <a href="#" className="btn btn-custom text-white">Join Now</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
      <img className="footer-img" src={footer_img} />
      <div className="">
      <div className="footer-text-payments">
        <p className="footer-text">@All Rights Reserved to Pexel Design 2021</p>
        <p className="support-payments">Support payments:<span><img className="paypal-image" src={paypal_img}/></span><img className="transferwise-image" src={transferwise_img}/><span></span></p>
      </div>
      </div>
      </div>
  </Layout>
  
)

export default IndexPage
