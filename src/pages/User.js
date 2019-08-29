import React from 'react';
import './User.css';
import user from'../assets/img/user_Head.jpg'

export default class User extends React.Component{
    render(){
        return (

            <div className="User">
                {/* 头部 */}
                <div className="myCenterTop">
                    <img src={user}/>
                    <p>穷在闹市</p>
                    <a href="merchantInfo.html"><i className="iconfont icon-shezhi"></i></a>
                </div> 
                {/* 账户余额  */}
                <div className="accountBalance">
                    <ul>
                        <li><a href="##">
                            <i>0.00</i>
                            <p>余额</p>
                        </a></li>
                        <li><a href="##">
                            <i>0.00</i>
                            <p>返利</p>
                        </a></li>
                        <li><a href="##">
                            <i>0.00</i>
                            <p>欠款</p>
                        </a></li>
                        <li className="last" style={{background: 'url(images/myOrder_bg.png) no-repeat left', width: '20%'}}><a href="##">
                            <i className="iconfont icon-PAY_WALLET"></i>
                            <p>我的钱包</p>
                        </a></li>
                    </ul>
                </div>
                 {/* 我的订单 - 开始  */}
                <div className="myOrder">
                    <div className="con">
                        <ul>
                            <li><a href="##">
                                <i className="iconfont icon-PAY_WALLET"></i>
                                <p>待付款</p>
                            </a></li>
                            <li><a href="##">
                                <i className="iconfont icon-baoguo"></i>
                                <p>待发货</p>
                            </a></li>
                            <li><a href="##">
                                <i className="iconfont icon-truck"></i>
                                <p>配送中</p>
                            </a></li>
                            <li><a href="##">
                                    <i className="iconfont icon-yishouhuo"></i>
                                    <p>已完成</p>
                                </a></li>
                            <li style={{background: 'url(images/myOrder_bg.png) no-repeat left'}}><a href="##">
                                <i className="iconfont icon-icon2-copy"></i>
                                <p>我的订单</p>
                            </a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- 常用功能 - 开始 --> */}
                <div className="tools">
                    <h1>常用工具</h1>
                    <ul>
                        <li><a href="##"><i className="iconfont icon-xiaoxi color1"></i><p>消息中心</p></a></li>
                        <li><a href="##"><i className="iconfont icon-fankui color2"></i><p>意见反馈</p></a></li>
                        <li><a href="##"><i className="iconfont icon-kefu color2"></i><p>客服热线</p></a></li>
                        <li><a href="##"><i className="iconfont icon-guanyuwomen color1"></i><p>关于我们</p></a></li>
                        <li><a href="##"><i className="iconfont icon-xiugaimima color1"></i><p>修改密码</p></a></li>
                        <li><a href="##"><i className="iconfont icon-youhuiquan color2"></i><p>优惠券</p></a></li>
                    </ul>
                </div>
               {/* <!-- 常用功能 - 结束 --> */}
    
              <div className="h_58"></div>
            </div>
        )
    }
}