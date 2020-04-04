import React from 'react'

// Component imports
import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageBanner from '../components/image-banner'
import CollectionRow from '../components/collection-row'
import ProductSlider from '../components/product-slider'
import NewsletterCTA from '../components/newsletter-cta'
import SocialFeed from '../components/social-feed'

// Images
import HeroOneImg from '../images/hero-1-image.jpg'
import HeroOneMobileImg from '../images/hero-1-image-mobile.jpg'
import HeroTwoMobileImg from '../images/hero-2-image-mobile.jpg'
import HeroTwoImg from '../images/hero-2-image.jpg'
import ProductImage from '../images/product-image-1.jpg'

const IndexPage = () => {
  const products = [
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
    { name: "Women's T-Shirt", title: 'Product Title', price: 19.99, image: ProductImage },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBanner buttonText="SHOP NOW" img={HeroOneImg} mobileImg={HeroOneMobileImg} slider />
      <section className="page-section">
        <CollectionRow />
      </section>

      <section className="page-section">
        <ProductSlider products={products} title="New Arrivals" />
      </section>

      <ImageBanner
        buttonText="SHOP NOW"
        img={HeroTwoImg}
        mobileImg={HeroTwoMobileImg}
        altButton
        rightPlacement
        backgroundLeft
      />
      <section className="page-section">
        <SocialFeed />
      </section>
      <NewsletterCTA />
    </Layout>
  )
}

export default IndexPage
