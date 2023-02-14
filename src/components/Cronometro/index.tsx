import Botao from "../button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'


export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie um Cronometro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}