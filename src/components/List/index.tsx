import { ITarefa } from "../../types/tarefa";
import Item from "./items";
import style from './lista.module.scss';


interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

//different the class component, isso é um function component. Nesse case o render() não é obrigatorio
function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                   <Item
                        selecionaTarefa={selecionaTarefa}
                        // {...item} uma maneira que traz toda as props sem precisar listar com .
                        key={item.id}
                        {...item}
                        /*
                        tarefa={item.tarefa}
                        tempo={item.tempo} 
                        selecionado={item.selecionado} 
                        completado={item.completado} 
                        id={item.id}  
                        */                  
                   />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;