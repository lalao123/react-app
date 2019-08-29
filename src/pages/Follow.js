import React from 'react';
import './Follow.css';
import Cell from '../components/cell/Cell';
export default class Follow extends React.Component{
    render(){
        return (
            <div className="Follow">
                <div className="shop-top">
                    <div className="shop">
                        <div className="shop_name">
                            <span>
                                <i className="iconfont icon-dianpu7">&#xe907;</i>
                                <b>穷在闹市</b>
                            </span>
                            <p>北京市朝阳区世纪大道1-34号</p>
                        </div>
                        <div className="weather">
                            <i className="iconfont icon-dibiao"></i>
                            <input type="hidden" id="getAllCityList"/>
                            <p className="getAllCityList">成都</p>
                        </div>
                    </div>
                </div>
                {
                
                [1,2,3,4,5,6,7,8].map((item,index)=>(
                  <Cell key={item} id={item} history={this.props.history}/>
                ))
               
              }
            </div>
        )
    }
}