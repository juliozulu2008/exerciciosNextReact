export default function jsx4() {
    const subtitulo = "Estou jo Javascript";

    return(
        <div>
            <h1>JSX #4</h1>
            <h2>Integração JS e JSX</h2>
            <p>Para o React reconher um texte em uma Contante ou Uma variavel JS precisa colocar dentro de Chaves</p>
            <p>{subtitulo}</p>
            <p>Tambem consigo chamar funçoes exemplo</p>
            <p>{entre(9.5, 1, 10)}
            </p>
        </div>
    )
}

function entre(valor, min, max){
    if(valor >= min && valor <=max) {
        return "Sim";
    } else {
        return "Não";
    }
}