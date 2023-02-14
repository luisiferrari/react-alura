import React from 'react';
import style from './botao.module.scss'

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    children?: React.ReactNode
}

export function Botao ({onClick, type, children}: Props){
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}>
         {children}
        </button>
     )
}

// o código abaixo é  a mesma coisa mas em class components
/*
class Botao1 extends React.Component <
{
    children: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    
    render(){
        const { type = "button", onClick } = this.props;
        return(
           <button onClick={onClick} type={type} className={style.botao}>
            {this.props.children}
           </button>
        )
    }
}

export default Botao
*/