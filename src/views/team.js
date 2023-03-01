import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>
          Team - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Team - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <h1 className="team-text">Who are we?</h1>
      <h1>Omar El-atabany 6541604</h1>
      <h1>Abdulla Almulla 6743249</h1>
      <h1>
        <span>Hady Fouad 7368513</span>
        <br></br>
      </h1>
      <h1 className="team-text6">
        <span>Qusai Wael 6689140</span>
        <br></br>
      </h1>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Team
