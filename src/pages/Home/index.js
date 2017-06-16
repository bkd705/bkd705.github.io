import React from 'react'
import TitleBar from '../../components/TitleBar'
import ContactInfo from '../../components/ContactInfo'
import SocialLinks from '../../components/SocialLinks'



const Home = props => {
  return (
    <div className="home-wrapper">
      <TitleBar heading="Brennen Denomme" subheading="Front-End Developer" style={{ marginTop: 100 }}/>
      <ContactInfo phone="(705) 970-6957" email="brennenkdenomme@gmail.com" />
      <SocialLinks twitter="bkd705" linkedin="bkd705" github="bkd705" />
    </div>
  )
}

export default Home
