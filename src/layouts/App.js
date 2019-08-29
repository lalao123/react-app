import React from 'react';
import './App.css'
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';

import {Route,Switch,Redirect} from 'react-router-dom'
import Follow from '../pages/Follow'
import Column from '../pages/Column'
import Car from '../pages/Car';
import ErrorPage from '../pages/ErrorPage';
import Detail from '../pages/Detail';
import User from '../pages/User';
import {connect} from 'react-redux';
import asyncAction from '../store/asyncAction';
// import Detail from '../pages/Detail';



 class App extends React.Component{
    //  componentDidUpdate(){
    //        asyncAction()

    //  }
    componentDidUpdate(){

        console.log("dhh",this.props.haha)
    }
    render(){
      
        return (
            
            <div className='App'>
                
              <Header/>
              <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/follow" component={Follow}/>
                  <Route path="/Column" component={Column}/>
                  <Route path="/user" component={User}/>
                  <Route path="/car" component={Car}/>
                  <Route path="/detail" component={Detail}/>
                  <Redirect exact from="/" to="/home"/>
                  <Route component={ErrorPage}/>
              </Switch>

              {/* {bFoot?<Footer/>:null} */}
              <Footer/>
            </div>
        )
    }
}
function abc(state){
    return{
        laal:state.list,
        haha:state.lala
    }
}
function bcd(dispatch){
return{
    setitem:dispatch({
    type:'setitem',
    payload:'liuyurong'
    }),
    asyncAction:asyncAction(dispatch),
    'test':dispatch({
        type:'check'
    })
    
}
}
export default connect(abc,bcd)(App)