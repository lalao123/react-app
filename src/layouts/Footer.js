import React from 'react';
import style from './Footer.module.css';
import { NavLink } from 'react-router-dom' 


export default class Footer extends React.Component{
    render(){
        return (
            <div className={style['footer']}>
                 {/* <h3>footer</h3> */}
                 <ul>
                     <li>
                       <NavLink activeClassName={style['home--active']}  to="/home">
                        <i className="iconfont icon-shouye">&#xe70c;</i>
                        <p>首页</p>
                        </NavLink>
                     </li>
                     <li >
                        <NavLink activeClassName={style['follow--active']} to="/follow">
                        <i className="iconfont icon-biaoqian2">&#xe733;</i>
                        <p>分类</p>
                        </NavLink>
                     </li>
                     <li>
                       <NavLink activeClassName={style['column--active']} to="/column">
                        <i className="iconfont icon-dingdan3">&#xe900;</i>
                        <p>常用清单</p>
                        </NavLink>
                     </li>
                     <li>
                        <NavLink activeClassName={style['car--active']} to="/car">
                        <i className="iconfont icon-shop"></i>
                        <p>购物车</p>
                        </NavLink>
                     </li>
                     <li>
                        <NavLink activeClassName={style['user--active']} to="/user"> 
                        <i className="iconfont icon-yonghu">&#xe70e;</i>
                        <p>我的</p>
                        </NavLink>
                     </li>
                     
                     
                 </ul>
            </div>
        )
    }
}