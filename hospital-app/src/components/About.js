import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
function About() {
  return (
    <div>About
{/* <h2>

 This is your go to application that helps Doctors to have a smooth time while perfoming there tasks, to avoid forgetfulness and also save on time 
 hence its better spent on useful areas. Here to serve you anyday and evaryday.
 </h2> */}

<MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
      >
        <h5>Appointments App</h5>
        <p>This is your go to application that helps Doctors to have a smooth time while perfoming there tasks, to avoid forgetfulness and also save on time 
 hence its better spent on useful areas. Here to serve you anyday and evaryday.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Appointments App</h5>
        <p>This is your go to application that helps Doctors to have a smooth time while perfoming there tasks, to avoid forgetfulness and also save on time 
 hence its better spent on useful areas. Here to serve you anyday and evaryday.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
  <h5>Appointments App</h5>
        <p>This is your go to application that helps Doctors to have a smooth time while perfoming there tasks, to avoid forgetfulness and also save on time 
 hence its better spent on useful areas. Here to serve you anyday and evaryday.</p>
      </MDBCarouselItem>
    </MDBCarousel>
        
    </div>
  )
 
}

export default About