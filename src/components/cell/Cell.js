import React from 'react';
import './Cell.css';
import propType from "prop-types"
export default class Cell extends React.Component{
    clickHandler =()=>{
        if(this.props.id){
            this.props.history.push('/detail/'+this/this.props.id)
        }
    }
    render(){
        return (
            <div className="Cell" onClick={this.clickHandler}>
            <ul>
              <li>
                <a href="##">
                    <img src="https://res.bestcake.com/images/new-index/p/%E8%8A%92GO.png"></img>
                    <div className="bottom">
                        <h1>极地牛乳</h1>
                        <div className="content">
                            <p className="color">￥288.00</p>
                            <i className="iconfont icon-shop"></i>
                        </div>
                    </div>
                </a>
              </li> 
              <li>
                <a href="##">
                    <img src="https://res.bestcake.com/images/new-index/p/%E8%8A%92GO.png"></img>
                    <div className="bottom">
                        <h1>官网模版</h1>
                        <div className="content">
                            <p className="color">￥288.00</p>
                            <i className="iconfont icon-shop"></i>
                        </div>
                    </div>
                </a>
              </li>  
            </ul>
          </div>
        )
    }
}
Cell.defaultProps = {
    noindex:false,
    id:null
};
Cell.propType={
    id:propType.number
}