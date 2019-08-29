import React from 'react';
import './Column.css'
import List from '../components/list/List'
import { Link } from 'react-router-dom'
export default class Column extends React.Component{
    render(){
        return (
            <div className="Column">
                <div className="otherTop">
                    <div className="search" >
                        <i className="iconfont icon-chazhao2">&#xe860;</i>
                        <input type="text" placeholder="压榨胡麻油"/>
                    </div>
                </div>
                <div className="oneClassify">
                  <div className="wrapper wrapper03" id="commonList">
                    <div className="scroller">
                        <ul className="clearfix">
                            <li><a href="##" id="">UI</a></li>
                            <li><a href="##" id="">前端</a></li>
                            <li><a href="##" id="">Java</a></li>
                            <li className="cur"><a href="##" id="">测试</a></li>
                            <li><a href="##" id="">实施</a></li>
                            <li><a href="##" id="">运维</a></li>
                            <li><a href="##" id="">架构师</a></li>
                            <li><a href="##" id="">项目经理</a></li>
                        </ul>
                    </div>
                  </div>
                </div>
                <div className="Column-list">
                <div className="twoClassify">
                    <div className="menu" id="twoClassify">
                        <ul>
                            <li className="active"><a style={{backgroundColor: 'rgb(255, 255, 255)'}}>叶菜类</a></li>
                            <li><a href="##" style={{backgroundColor: 'transparent'}}>特菜</a></li>
                            <li><a href="##" style={{backgroundColor: 'transparent'}}>菌类</a></li>
                        </ul>
                    </div>
                </div>
                {
                    [1,2,3,4,5,6,7,8].map((item,index)=>(
                        <Link key={index} to={`/detail/${index}`}>
                         <List/>
                        </Link>
                       
                    ))
                }
                </div>
            </div>
        
        )
        
    }
    
}
    // <script type="text/javascript">
    // $(function(){
    //     $('#commonList').navbarscroll({
    //         defaultSelect:0,
    //         scrollerWidth:6,
    //         fingerClick:0,
    //         endClickScroll:function(obj){

                
    //         }
    //     })
    // });

    // </script>