import React from 'react';
import './Car.css'
// import List from '../components/Shoplist/Shoplist'
import Shoplist from '../components/shoplist/Shoplist';
export default class Car extends React.Component{
    render(){
        return (
            <div className="Car">
              <div className="car-top">
                   <span>购物车</span>
              </div>
              {
                
                [1,2,3,4,5,6,7,8].map((item,index)=>(
                <Shoplist/>
                
                  ))
               
              }
            </div>
        )
    }
}