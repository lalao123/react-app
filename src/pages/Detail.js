import React from 'react';
import './Detail.css';
export default class Detail extends React.Component{
    render(){
      return(
        <div className="Detail">
          <div className="nav">
            <div className="detail_top">
              <i className="iconfont icon-fanhui1" onClick={()=>this.props.history.go(-1)}></i>
              <p>极地牛乳</p>
              <img src="https://res.bestcake.com/images/new-index/p/%E8%8A%92GO.png"></img>
            </div>
            <div className="detail_content">
               <font><b>¥ 3.5</b>/ 斤</font>
               <i className="iconfont icon-shop"></i>
               <p>芝士的香气透过肆意飘洒的白雪氤氲开来，宛如午后从窗外洒进来的温暖阳光，不忍错过。内在的柔软细腻，更衬托出外表的纯白无瑕，简约的美铸就了经典</p>
            </div>
          </div>
        </div>
      )
        
    }

}