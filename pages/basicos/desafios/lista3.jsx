export default function lista3(){
    return(
        <div>
            <h1>exemeplo 3</h1>
        </div>
    )
}
function gerarLista(){
    const lista = [];
    for(let i = 1; i<= 10; i++){
        lista.push(<span>{i},</span>)
    }
    return lista;
}