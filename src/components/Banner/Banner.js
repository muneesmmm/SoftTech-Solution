import React from 'react';
import Bnnr from '../Banner/bnnr.png'
function Banner(props) {
  return (
   
    <div
      class="bg-image"
      style={{backgroundImage: "url(" + Bnnr + ")",height:"700px",backgroundSize:"cover",backgroundPosition:'center'
    }}>
      <div class="container mask" >
        <div class="" style={{marginTop:"56px"}} >
          <div class="text-white col-md-5 col-sd-6 pt-5"  >
            <h2 class="">{props.data}</h2>
            <h5 class="" style={{opacity:"0.6"}}>{props.item}</h5>
          </div>
        </div>
      </div>
    </div>
    

  )}
 export default Banner;