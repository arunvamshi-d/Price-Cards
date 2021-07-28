import React from 'react'
import './cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({title, imageSource, text, text1, text2, text3, text4, text5, price}) {
    return (
        <div className="card text-center bg-dark">
            
            <div className="overflow">
            <img src={imageSource} alt="" className="card-img-top" />
            </div>

            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small">
                    <li className="mb-3">
                      <i className="text-primary"></i>{text}</li>
                    <li className="mb-3">
                      <i className="text-primary"></i>{text1}</li>
                    <li className="mb-3">
                      <i className="text-primary"></i>{text2}</li>
                    <li className="mb-3">
                      {text3 ? text3 : <del className='text-muted'>Weekday Pool access</del>}
                    </li>
                    <li className="mb-3">
                      {text4 ? text4 :<del className='text-muted'>12% Off on all store products</del>}
                    </li>
                    <li className="mb-3">
                      {text5 ? text5 :<del className='text-muted'>Free Gym T-Shirt</del>}
                    </li>
                  </ul>
                
                <a href="#!" className="btn btn-primary  p-2 shadow rounded-pill">
                    {price}
                </a>
            </div>
        </div>
    )
}


export default Card