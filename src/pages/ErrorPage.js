import React from 'react';
import './ErrorPage.css';
import error from '../assets/img/404.jpg'

export default class ErrorPage extends React.Component{
    render(){
        return (
            <div className="ErrorPage">
                <img src={error}/>
                <a href="##" onClick={()=>this.props.history.goBack()}>返回</a>
            </div>
        )
    }
}