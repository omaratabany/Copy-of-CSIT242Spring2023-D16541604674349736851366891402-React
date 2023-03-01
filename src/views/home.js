import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard2 from '../components/gallery-card2'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>
          Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header></Header>
      <h1 className="home-text">Featured</h1>
      <span className="home-text1">
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <div className="home-gallery">
        <div className="home-container1">
          <div className="home-container2">
            <div className="home-container3">
              <Link to="/product" className="home-navlink">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGZ1cm5pdHVyZXxlbnwwfHx8fDE2NzcyNDUxMDE&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName2"
                  className="home-component1"
                ></GalleryCard2>
              </Link>
            </div>
            <div className="home-container4">
              <Link to="/product" className="home-navlink1">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjc3MjQ1MTAx&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName3"
                  className="home-component2"
                ></GalleryCard2>
              </Link>
            </div>
          </div>
          <div className="home-container5">
            <Link to="/product" className="home-navlink2">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGZ1cm5pdHVyZXxlbnwwfHx8fDE2NzcyNDUxMDE&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName"
                className="home-component3"
              ></GalleryCard2>
            </Link>
          </div>
        </div>
        <div className="home-container6">
          <Link to="/product" className="home-navlink3">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxmdXJuaXR1cmV8ZW58MHx8fHwxNjc3MjQ1MTAx&amp;ixlib=rb-4.0.3&amp;h=1500"
              rootClassName="rootClassName4"
              className="home-component4"
            ></GalleryCard2>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
