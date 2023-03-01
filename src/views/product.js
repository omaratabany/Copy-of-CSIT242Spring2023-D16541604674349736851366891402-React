import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ProductInfo from '../components/product-info'
import Footer from '../components/footer'
import './product.css'

const Product = (props) => {
  return (
    <div className="product-container">
      <Helmet>
        <title>
          Product - Copy of CSIT242_Spring2023_
          D1_6541604_674349_7368513_66891402
        </title>
        <meta
          property="og:title"
          content="Product - Copy of CSIT242_Spring2023_ D1_6541604_674349_7368513_66891402"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <ProductInfo></ProductInfo>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Product
