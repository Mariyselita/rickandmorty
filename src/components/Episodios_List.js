import React from 'react';
import axios from 'axios';


export default class EpisodiosList extends React.Component {
    state = {
        episodios: []
    }
    componentDidMount() {
        axios.get(`https://jsonplacehlder.typicode.com/users`).then(res => {
            console.log(res);
            this.setState({
                persons: res.data
            });
        });
    }

    render() {
        return <ul>{this.state.persons && this.state.persons.map(person => <li>{person.name}</li>)}</ul >;
    }
}
