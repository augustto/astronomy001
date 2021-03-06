import React, { Component } from 'react';


export default class Login extends Component {

    constructor(props){
        super(props);

        var msg = '';
        const queryParams = new URLSearchParams(props.location.search);
        const queryMsg = queryParams.get('msg');
        if(queryMsg) {
          msg = queryMsg;
        }
    
        this.state = {msg: msg};
    }

    envia(event){
        event.preventDefault();

        const requestInfo = {
            method:'POST',
            body:JSON.stringify({login:this.login.value,senha:this.senha.value}),
            headers:new Headers({
                "Content-Type": "application/json;charset=UTF-8"  
            })
        };

        fetch('http://localhost:54715/api/Astronomy/Photo/account',requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível fazer o login');  
                }
            })
            .then(token => {
                localStorage.setItem('auth-token',token);
                this.props.history.push('/timeline');
            })
            .catch(error => {
                this.setState({msg:error.message});
            });
    }

    render(){
        return (
            <div className="login-box">
                <h1 className="header-logo">Astronomy</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        );
    }
}