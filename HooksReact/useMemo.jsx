// hook especificio

import { useMemo } from 'react';


// o useMemo ele memoriza 

// economiza memoria, ela é refeita

const calculo = useMemo (() => {
    console.log('calculou')
    return 10 * 83324
}, []);

console.log('rendirizou,', calculo)

//estudar essas coisas

// ele guarda valores pra sempre

// performance e renderizacao de componentes