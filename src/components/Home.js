import React, { Component } from 'react'
import Portada from './Portada'
import SeccionReciente from './SeccionReciente'
import EpisodiosRecientes from './EpisodiosRecientes'
import PersonajesHome from './PersonajesHome'
import Footer from './Footer'
class Home extends Component {
    render() {
        return (
            <div>
                <Portada />
                <SeccionReciente />
                <EpisodiosRecientes />
                <PersonajesHome />
                <Footer />
            </div>
        )
    }
}
export default Home