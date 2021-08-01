import React from 'react';
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Landing from '../components/LandingPage/Landingpage'
import Footer from '../components/Footer/Footer'

function Home() {
    const data = 'Welcome To WebSoulLabs'
    const item = 'WebSoulLabs is a global software solutions provider in software development, mobile application development'

    return (
        <div>
            <Header />
            <Banner data={data} item={item} />
            <Landing />
            <Footer />
        </div>
    )
}
export default Home;