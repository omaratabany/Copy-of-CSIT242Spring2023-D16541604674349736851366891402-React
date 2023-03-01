import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>
          About - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="About - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <h1 className="about-text">Keeping It Simple</h1>
      <div className="about-hero">
        <h1 className="about-text1">
          Your home is your canvas, colour it as you wish.
        </h1>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1511401139252-f158d3209c17?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGNvbWZ5fGVufDB8fHx8MTY3NzI0OTA1MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=1500"
          className="about-image"
        />
        <span className="about-text2">
          This is a project For CSIT 242 about creating a Progressive Web
          application using the techniques we have learnt as the class went on
          using the Knowledge we gained during that time period
        </span>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default About
