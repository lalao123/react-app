import React from 'react';
import './Home.css'
import ReactSwipe from 'react-swipe';
import Cell from '../components/cell/Cell';
import timg from '../assets/img/timg.jpg';
import timg2 from '../assets/img/timg1.jpg';
import icon110 from '../assets/img/110.png';
import icon115 from '../assets/img/115.png';
import icon116 from '../assets/img/116.png';
import icon111 from '../assets/img/111.png';
import store from '../store/index';
export default class Home extends React.Component{
  
    render(){
        return (
            <div className="Home">
               {/* <div>{store.getState().list}</div> */}

                <ReactSwipe
                className="carousel"
                swipeOptions={{
                  continuous:true,
                  auto:3000,
                  speed:300
                }}
                >
                <div className="banner"><img src={timg}></img></div>
                <div className="banner"><img src={timg2}></img></div>
                <div className="banner"><img src={timg}></img></div>

                </ReactSwipe>
               <div className="icon">
                  <ul>
                      <li><img src={icon111}></img><span>微笑</span></li>
                      <li><img src={icon115}></img><span>微笑</span></li>
                      <li><img src={icon110}></img><span>微笑</span></li>
                      <li><img src={icon116}></img><span>微笑</span></li>
                    </ul>
                    <ul>
                      <li><img src={icon115}></img><span>微笑</span></li>
                      <li><img src={icon116}></img><span>微笑</span></li>
                      <li><img src={icon110}></img><span>微笑</span></li>
                      <li><img src={icon111}></img><span>微笑</span></li>
                     
                  </ul>
               </div>
               <div className="new">
                 
                  <h2>新品推荐</h2>
               </div>
               {
                
                 [1,2,3,4,5].map((item,index)=>(
                  <Cell key={item} id={item} history={this.props.history}/>
                   
                   ))
                
               }
            </div>
        )
    }
}



