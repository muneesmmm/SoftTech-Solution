import React from 'react'

function Aboutus() {
    return (
        <div class="container">
            <div class="row pt-5">
                <div class="col d-flex justify-content-center" style={{ fontFamily: 'cursive' }}>
                    <h2>Who We Are ....</h2>
                </div>
            </div>
            <div class="row">
                <div class="col p-4">
                    <p style={{ textAlign: "justify", fontSize: "18px", color: 'GrayText' }}>
                        STS Infosolutions is an end to end software solutions for different types of industries over the globe. We basically
                        operating on Perinthalmannna, Kerala, India. We consider a client as high priority as we offer ultimate solution for
                        the ease of their business or services.

                        The birth of the firm is purely on the basis of high thirst to technology
                        and commitment to deliver quality product with future scope.
                        The technology we implemented for each of our product is based on the actual need and future needs. The solutions
                        provided consists of existing business scenario with added features. Our ultimate aim by our software is to minimize the workload
                        and to improve the productivity by user friendly platform.
                    </p>
                </div>
            </div>
            <div class="row  justify-content-center ">
                <div class="col-md-4 order-1 p-3 bg-light" >
                    <img class="mt-3 mb-5" src={'https://www.websoullabs.com/assets/homesm.png'} alt="solutin" style={{ width: "150px",marginLeft:"100px" }}></img>

                    <h3>Result Driven Solutions</h3>
                    <p style={{ textAlign: "justify" }}>
                        We are a team of prominent website design company. We bring in the
                        right mix of technology and industry expertise to achieve your
                        business needs to support your business to
                        improve performance and productivity by solving problems.</p>
                </div>
                <div class="col-md-4 order-5 p-3  bg-light">
                    <img class="mt-3 mb-5" src={'https://www.websoullabs.com/assets/homeag.png'} alt='agail' style={{ width: "150px",marginLeft:"100px" }}></img>
                    <h3>Agile Culture</h3>
                    <p style={{ textAlign: "justify" }}>
                        We help you innovate quickly with our agile methodologies and procedures
                        more on finding the best way to solve a problem rather than applying the
                        same procedural approach to every situation. Trust forms the basis of
                        any relationship</p>
                </div>
                <div class="col-md-4 order-3 p-3 ">
                    <img class="mt-3 mb-5" src={'https://www.websoullabs.com/assets/homesc.png'} alt='passion' style={{ width: "150px",marginLeft:"120px" }}></img>
                    <h3>Passionate team of growing developers</h3>
                    <p style={{ textAlign: "justify" }}>
                        We are the group of employees for your business through cutting-edge
                        applications. Our team can easily slip into disorder or simply resentment
                        for you as you break promises, forget what matters to.</p>
                </div>
            </div>
        </div>

    )
}

export default Aboutus
