import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
export default class Header extends React.Component{
    render(){
        return (
            <div className={style['header']}>
                <div className={style['logo']}>
                    <i className="iconfont icon-dianpu7">&#xe907;</i>
                    <b>晴天商品店</b>
                    <i className="iconfont icon-liebiao">&#xe60a;</i>
                </div>
                <div className={style["search"]}>
                <i className="iconfont icon-chazhao2">&#xe860;</i>
                <input type="text" placeholder="快速搜索商品"></input>
                </div>
            </div>
        )
    }
}