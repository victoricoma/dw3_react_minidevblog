import React, { useState } from 'react'

const FormHooks = () => {
    const [list] = useState(['Letícia', 'Enzo', 'Kayro', 'Gustavo']) 
    const [number, setNumber] = useState(15)
    const [user] = useState(
        [
            {id:1, nome: 'José Carlos', idade: 44},
            {id:2, nome: 'Maria Rosa', idade: 25},
            {id:3, nome: 'Ana Sofia', idade: 31},
            {id:4, nome: 'Paulo José', idade: 21},
            {id:5, nome: 'Marcus Daniel', idade: 25},
            {id:6, nome: 'Victor Hugo', idade: 34},
            {id:7, nome: 'Viktória Kamilly', idade: 19},
            {id:8, nome: 'Pedro Lucas', idade: 37}
        ]
    )
    return (
        <>
            <div>
                <p>
                    <strong>Valor de numero: </strong> {number}
                </p>
                <button onClick={() =>{setNumber(25); console.log(number)}}>Mudar</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            nome
                        </th>
                        <th>
                            idade
                        </th>
                    </tr>
                    {
                        user.map((pessoa) =>(
                            <tr key={pessoa.id}>
                                <td>{pessoa.id}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.idade}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>
    )
}

export default FormHooks