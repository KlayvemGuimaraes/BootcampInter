import { useState } from 'react';

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

export { Teste };   

// o "hook useState" indica o estado de um componente, ou seja o que ele é nesse momento, por ex:
// Em,
// const [name, setName] = useState('Pablo');
//vemos o UseState definido como 'Pablo', e este é o estado dele antes de entrar em "handleChangeName".
// após passado por essa função o valor dele muda, ou seja, quando se clicar o botão o estado dessa UseState é "Klayvem".
// o estado foi de 'Pablo' para "Klayvem", assim alterando seu estado.