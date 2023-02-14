import React, {useState} from 'react';
import logo from './logo.svg';
import Formulario from '../components/Formulario';
import Lista from '../components/List';
import AppStyle from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={AppStyle.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
