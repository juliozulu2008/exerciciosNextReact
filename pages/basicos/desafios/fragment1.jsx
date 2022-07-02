import React from 'react'

export default function fragment(){
    //nao se pode colocar dois elements jsx soltos o codigo exmp h1 e h2 tem qu ser colocados em uma div
    //porem se nao desejar utilizar um adiv tem que ser importado o react fragment como no exemplo
    //Tomar cuidado com as Nomenclaturas
    return( 
            <React.Fragment>
                <h1>Titulo</h1>
                <h2>Subtitulo</h2>
            </React.Fragment>
            
    )
}