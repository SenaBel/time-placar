import React from 'react'

import PlacarContainer from './PlacarContainer'

const dados = {
    partida: {
        estadio: "Itaquerão/SP",
        data: "03/03/2020",
        horario: "16h",
    },
    casa: {
        nome: "Corinthians",
    },
    visitante: {
        nome: "São Paulo",
    }
}

export default class App extends React.Component {
    render(){

        return <PlacarContainer {...dados}/> // USANDO O SPREAD OPERATOR
    }
}