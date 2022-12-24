import { useEffect, useState } from 'react';

const Teste = () => {

    const [name, setName] = useState('Pablo');

    const handleChangeName = () => {
        setName('Klayvem')    
    }
        return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}></button>
        </div>
    )
}

useEffect(()=>{  //ciclo de vida do nosso componente, quando ele sai, entra,some,morre.
    alert('renderizei') // nao retorna, e recebe uma funcao e executa o parametro

    return () => (alert('desmontei'))
},[name]);


export { Teste } 