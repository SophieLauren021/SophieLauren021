import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Alunos(){
  const [nome, setNome] = useState('');
  const [chamada, setChamada] = useState(0);
  const [alunos, setAlunos] =useState([]);

  function adicionarAluno(){
    let aluno ={
        nome:nomeAluno,
        chamada:chamadaAluno
    }
    setAlunos[...alunos, aluno];
  }

  return(
    <div className='pagina-lista-tarefa'>
        <div className='container'>
        <h1>Lista de alunos</h1>
        <div>
            <label>Nome:</label>
            <input type='text' value={nomeAluno} onChange={e=> setNome(e.target.value)}/>
        </div>
        <div>
        <label>Chamada:</label>
            <input type='text' value={chamadaAluno} onChange={e=> setChamada(e.target.value)}/>
        </div>

        </div>

    </div>
  )






}


export default Alunos;
