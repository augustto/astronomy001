import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = { fotos: [] };
        this.login = this.props.login;
    }

    componentDidMount() {
        this.carregaFotos();
    }

    carregaFotos() {
        fetch(`http://localhost:54715/api/Astronomy/Photo?token=${localStorage.getItem('auth-token').replace(/"/g, '')}&login=${this.login}`)
            .then(response => response.json())
            .then(fotos => {
                this.setState({ fotos: fotos });
            });
    }

    componentWillReceiveProps(newProps) {
        this.login = newProps.login;
        this.carregaFotos();
    }

    render() {
        return (
            <div className="fotos container" key>
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
                }
            </div>
        );

    }


}