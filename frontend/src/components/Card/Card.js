import React from 'react'
import './Card.css'
// const cardBorder={
//     borderRadius : '15px',
//     boxShadow: '10px 8px 8px #888888',
//     width: '100%',
//     textAlign: 'center',
//     margin: '6px',
// }
export default function Card(props) {
    return (
        <div>
            <div className="cardBorder">
            <h4 className="card-title pt-2" >{props.title}</h4>
            <a href="/" className="btn"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter21/Teaser3-cc_1x1._SY304_CB639696076_.jpg" className="card-img-top w-75" alt="cardImage"/></a>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
            </div>
            </div>
        </div>
    )
}
