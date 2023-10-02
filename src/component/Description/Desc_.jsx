import React from 'react'
import Button from 'react-bootstrap/Button';
import './Desc_.css';

function Desc_() {
  return (
    <>
        <div className="main_desc_blog">
            <div className="main_desc_flex">
                <div className="main_desc_about">
                    <h4>UNIQUE PIECES</h4>
                    <h2>BE <br/>ALWAYS<br/>ON<br/>TREND</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio facilis quaerat impedit pariatur deserunt.</p>
                    <Button variant="outline-success">Search</Button>
                </div>
                <div className="main_desc_pict">
                    <img src="https://mkjewels.s3.amazonaws.com/images/MKJEWELS/glrg00155m" alt="" />
                </div>
                <div className="main_desc_pict2">
                    <img src="https://mkjewels.s3.amazonaws.com/images/MKJEWELS/cznks01056m" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Desc_