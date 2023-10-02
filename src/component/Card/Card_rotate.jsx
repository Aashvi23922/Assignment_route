import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './Card_rotate.css'

function Card_rotate() {
    return (
        <Container fluid>
            <div className="card_main_blog">
                <div className="card_text_blog">
                    <h4>POPULAR PRODUCT</h4>
                    <h2>TRENDING NOW</h2>
                </div>
                <div className='card_flex'>
                    <div className="card_img_blog">
                        <div className="img_drop">
                            <img src="https://mkjewels.s3.amazonaws.com/images/MKJEWELS/czrg06104pm" className='img1' />
                        </div>
                        <div class="img_drop_text">
                            <h5>Product Name 1</h5>
                            <h6><del>$600.00</del><b style={{ color: "Black" }}> $495.00</b></h6>
                        </div>
                    </div>


                    <div className="card_img_blog">
                        <div className="img_drop">
                            <img src="https://mkjewels.s3.amazonaws.com/images/MKJEWELS/br509m" className='img1' />
                        </div>
                        <div class="img_drop_text">
                            <h5>Product Name 2</h5>
                            <h6>$794.00</h6>
                        </div>
                    </div>


                    <div className="card_img_blog">
                        <div className="img_drop">
                            <img src="https://mkjewels.s3.amazonaws.com/images/MKJEWELS/czer01082_01m" className='img1' />
                        </div>
                        <div class="img_drop_text">
                            <h5>Product Name 3</h5>
                            <h6>$494.00</h6>
                        </div>
                    </div>


                    <div className="card_img_blog">
                        <div className="img_drop">
                            <img src="https://mkjewels.s3.amazonaws.com/images/MKJEWELS/cznks01340m" className='img1' />
                        </div>
                        <div class="img_drop_text">
                            <h5>Product Name 4</h5>
                            <h6>$400.00</h6>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Card_rotate