import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Portfolios from '../components/Portfolios/Portfolios'
import Bnnr from '../components/Banner/bnnr3.png'


function Portfolio() {
    const data = 'Let’s Build Something Great'
    const item = 'Our efforts - designed with skill & quality. Offering you the immense scope of solutions implemented by us with the high-quality standard.'

    return (
        <div>
            <Header />
            <Banner  data={data} item={item} img={Bnnr}></Banner>          
            <Portfolios />
            <Footer/>
        </div>
    )
}

export default Portfolio
