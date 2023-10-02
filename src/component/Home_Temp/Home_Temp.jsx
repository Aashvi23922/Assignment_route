import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './Home_Temp.css'
import Button from 'react-bootstrap/Button';
import Card_rotate from '../Card/Card_rotate';
import Desc_ from '../Description/Desc_';
import Measure_ from '../Best_Business/Measure_';
import Card_Static from '../card_static/card_static';

function Home_Temp() {
  return (  <Container fluid>
      {/* <Navigation /> */}
      <div className="main_blog">
        <div className="img_blog">
          <img src="https://opencart.dostguru.com/JS01/diamoda_01/image/cache/catalog/slider/slider-2-1920x700.jpg" alt="" />
        </div>
        {/* <div className="text_blog">
          <Button variant="outline-success">Shop Now</Button>
        </div> */}
      </div>

      <Card_rotate />

      <Card_Static />

      <Desc_ />

      <Measure_ />

    </Container>
  )
}

export default Home_Temp