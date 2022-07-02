import Titulo from "../../components/Titulo";

export default function usandoTitulo(){
    return(
        <div>
            <Titulo
                principal="Pagina de cadastro"
                secundario="Incluir, Alterar e excluir coisas"
            />
            <Titulo
                principal="Pagina de Login"
                secundario="Informe seu E-mail e senha"
                pequeno={true}
            />
            <Titulo
                principal="Pagina de cadastro"
                secundario="Incluir, Alterar e excluir coisas"
                pequeno
            />
        </div>
    )
}