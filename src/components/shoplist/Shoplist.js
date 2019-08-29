import React from 'react'
import './Shoplist.css'

export default class Shoplist extends React.Component{
    render(){
        return (
            <div className="Shoplist">
              <ul>
                <li>
                    <div className="goods">
                        <span className="choose">
                          <input type="checkbox"></input>
                        </span>
                        <img src="https://res.bestcake.com/images/new-index/p/%E8%8A%92GO.png" className="goodsImg" onerror="errorImg(this)"/>
                        <div className="right">
                            <div className="dis">
                                <p>手机模版</p>
                                <p>3.5元/斤</p>
                                <p>小计：<font>¥3.50元</font></p>
                            </div>
                            <div className="car-num">
                                <i className="iconfont icon-jianhao"></i>
                                <input type="number" min="0" max="99" value="1"/>
                                <input className="price" type="hidden" value="3.5"/>
                                <i className="iconfont icon-jiahao"></i>
                            </div>
                        </div>
                        <i className="iconfont icon-delete"></i>
                    </div>
                   
                </li> 
            </ul>
         </div>
        )
    }
}