import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  async function getUsuarios() {
    const usuarios = await axios.get(
      'https://autenticacao-basic-e-jwt-carloshenriqu62.infozn.repl.co/users'
    );

    return usuarios.data;
  }

  useEffect(() => {
    (async function () {
      setData(await getUsuarios());
    })();
  }, []);

  console.log(data[0]);

  return (
    <div>
      <h1>Usuários</h1>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Perfil</th>
            <th scope='col'>Contato</th>
          </tr>
        </thead>
        <tbody>
          {data.map(usuario => {
            return (
              <tr key={usuario.id}>
                <th scope='row'>{usuario.id}</th>
                <td>{usuario.name}</td>
                <td>{usuario.perfil}</td>
                <td>{usuario.contato || '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
