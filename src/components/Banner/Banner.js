import React from 'react';
function Banner(props) {
  return (
   
    <div
      class="bg-image"
      style={{backgroundImage: "url(" + props.img + ")",height:"520px",backgroundSize:"cover",backgroundPosition:'center'}}>
      <div class="container mask">
        <div class="" style={{marginTop:"56px"}} >
          <div class="text-white col-md-6 col-sm-12 pt-5"  >
            <h1 class="">{props.data}</h1>
            <h4 class="" style={{opacity:"0.6"}}>{props.item}</h4>
          </div>
        </div>
      </div>
    </div>
    

  )}
 export default Banner;