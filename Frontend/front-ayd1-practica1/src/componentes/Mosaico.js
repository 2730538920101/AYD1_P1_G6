import React from 'react'
import Carta from './Cartas'

function Mosaico(props) {
    return (
        <div className="ui segment mosaico container" id="contenedorCartas">
            <div className="ui four column link cards row" >
                {props.favoritos.map((c, index) => (
                    <Carta
                        key={index}
                        id={c[0]}
                        nombre={c[1]}
                        apellido={c[2]}
                        telefono={c[3]}
                        correo={c[4]}
                    />

                ))}
            </div>
        </div>

    )
}

export default Mosaico