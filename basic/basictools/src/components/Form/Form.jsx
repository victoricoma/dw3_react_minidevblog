import React, { useState } from 'react'
var teste = 8
const Form = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o Evento!")
    }
    const [x, setX] = useState(false)
    return (
        <>
            <div>
                <div>
                    <button onClick={handleMyEvent}>Clique Aqui</button>
                </div>
                <div>
                    <button onClick={() => { console.log("Yes! Apertou em mim.") }}>Clique em mim também!</button>
                </div>
                <div>
                    <button onClick={() => {
                        if (true) {
                            console.log("Isso não deveria acontecer!")
                        }
                    }}>Será que você clicaria aqui?</button>
                </div>
                <div>
                    <h1>{x ? 'Renderizou' : 'Deu ruim não foi'}</h1>
                    <button onClick={() => setX(!x)}>Valida pepino</button>
                </div>
            </div>
            <div>
                <strong>Valor:</strong>{teste}
                <button onClick={() =>{ teste = 12; console.log(teste)}}>Aperte e mude</button>
                <strong>Valor:</strong>{teste}
            </div>
        </>
    )
}

export default Form