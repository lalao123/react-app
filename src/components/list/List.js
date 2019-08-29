import React from 'react';
import './List.css';
export default class Shop extends React.Component{
    render(){
        return (
            <div className="List">
               <img src="https://res.bestcake.com/images/new-index/p/%E8%8A%92GO.png"/>
                    <div className="dis">
                        <h1>官网模版</h1>
                        <div className="operation">
                            <font><b>¥ 3.5</b>/ 斤</font>
                            <div className="car">
                                <i className="iconfont icon-jianhao reduceBut"></i>
                                <input className="nums" type="text" min="0" max="99"/>
                                <i className="iconfont icon-jiahao addBut"></i>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}