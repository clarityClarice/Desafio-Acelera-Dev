import React, { useState } from 'react'
import api from './api'
import sha1 from 'js-sha1'
import './style.css'


function App() {
  const [token, setToken] = useState()
  const [cifrado, setCifrado] = useState('')
  const [pulos, setPulos] = useState()
  const [decifrado, setDecifrado] = useState('')
  const [convertido, setConvertido] = useState('')
  const [convertido_d, setConvertido_d] = useState('')
  let [array, setArray] = useState('')
  const [hash, setHash] = useState('')


    async function handleSubmit(event){
        event.preventDefault()

        const response = await api.get(`/generate-data?token=${token}`)

        setCifrado(response.data.cifrado)
        setPulos(response.data.numero_casas)

        setArray(Array.from(response.data.cifrado))
    }
    function handleConverter(event){
      event.preventDefault()
      for(var i = 0; i < array.length; i++){
        switch (array[i]){
          case 'a':
            array[i] = 1
            break
          case 'b':
            array[i] = 2
            break
          case 'c':
            array[i] = 3
            break
          case 'd':
            array[i] = 4
            break
          case 'e':
            array[i] = 5
            break
          case 'f':
            array[i] = 6
            break
          case 'g':
            array[i] = 7
            break
          case 'h':
            array[i] = 8
            break
          case 'i':
            array[i] = 9
            break
          case 'j':
            array[i] = 10
            break
          case 'k':
            array[i] = 11
            break
          case 'l':
            array[i] = 12
            break
          case 'm':
            array[i] = 13
            break
          case 'n':
            array[i] = 14
            break
          case 'o':
            array[i] = 15
            break
          case 'p':
            array[i] = 16
            break
          case 'q':
            array[i] = 17
            break
          case 'r':
            array[i] = 18
            break
          case 's':
            array[i] = 19
            break
          case 't':
            array[i] = 20
            break
          case 'u':
            array[i] = 21
            break
          case 'v':
            array[i] = 22
            break
          case 'w':
            array[i] = 23
            break
          case 'x':
            array[i] = 24
            break
          case 'y':
            array[i] = 25
            break
          case 'z':
            array[i] = 26
            break
            
        }
      }
      setConvertido(array.join(''))
    }

    function handleDecifrar(event){
      event.preventDefault()
      for(var i = 0; i < array.length; i++){
        if(array[i]!= ' ' && array[i]!= '.'){
          array[i] -= pulos
          if(array[i] > 26){
            array[i] = array[i] - 26
          }
          if(array[i] < 0){
            array[i] = array[i] + 26
          }
        }
      }
      setConvertido_d(array.join(''))
    }

    function handleFinal(event){
      event.preventDefault()
      for(var i = 0; i < array.length; i++){
        switch (array[i]){
          case 1:
            array[i] = 'a'
            break
          case 2:
            array[i] = 'b'
            break
          case 3:
            array[i] = 'c'
            break
          case 4:
            array[i] = 'd'
            break
          case 5:
            array[i] = 'e'
            break
          case 6:
            array[i] = 'f'
            break
          case 7:
            array[i] = 'g'
            break
          case 8:
            array[i] = 'h'
            break
          case 9:
            array[i] = 'i'
            break
          case 10:
            array[i] = 'j'
            break
          case 11:
            array[i] = 'k'
            break
          case 12:
            array[i] = 'l'
            break
          case 13:
            array[i] = 'm'
            break
          case 14:
            array[i] = 'n'
            break
          case 15:
            array[i] = 'o'
            break
          case 16:
            array[i] = 'p'
            break
          case 17:
            array[i] = 'q'
            break
          case 18:
            array[i] = 'r'
            break
          case 19:
            array[i] = 's'
            break
          case 20:
            array[i] = 't'
            break
          case 21:
            array[i] = 'u'
            break
          case 22:
            array[i] = 'v'
            break
          case 23:
            array[i] = 'w'
            break
          case 24:
            array[i] = 'x'
            break
          case 25:
            array[i] = 'y'
            break
          case 26:
            array[i] = 'z'
            break
        }
      }
      setDecifrado(array.join(''))
      setHash(sha1(array.join('')))

    }

    async function handleSalvar(event){
      event.preventDefault()

        var obj = { 
            numero_casas: pulos,
            token: token,
            cifrado: cifrado,
            decifrado: decifrado,
            resumo_criptografico: hash
        }

      var answer = JSON.stringify(obj)
      const blob = new Blob([answer], {
        type: 'application/json'
      });

      var response = new FormData()
      response.append('answer', blob)

      await api.post(`/submit-solution?token=${token}`, response)
    }
    

  return (
    <> 

      <div className="topDiv">
        <h1> Hello AceleraDev! </h1>
        <form onSubmit={handleSubmit}>
              <label> TOKEN* </label>
              <input
                  id="token"
                  type="text"
                  placeholder="Insira seu token aqui"
                  value={token}
                  onChange={event => setToken(event.target.value)}
              />
              <button type="submit" className="btn">Enviar Requisição</button>
        </form>
        <div className="codeBody">
          
          <h6>Numero de casas: <span>{pulos}</span></h6>
          <hr></hr>

          
            <h5>Texto cifrado:</h5>
          <div className="dividerDiv">
            <span>{cifrado}</span>
            <button type="submit" className="codeBtn" onClick={handleConverter}>Converter</button>
          </div>
          <hr></hr>

          <h5>Texto convertido</h5>
          <div className="dividerDiv">
            <span>{convertido}</span>
            <button type="submit" className="codeBtn" onClick={handleDecifrar}>Converter</button>
          </div>
          <hr></hr>


          <h5>Texto convertido decifrado</h5>
          <div className="dividerDiv">
            <span>{convertido_d}</span>
            <button type="submit" className="codeBtn" onClick={handleFinal}>Converter</button>
          </div>
          <hr></hr>

          <h5>Texto Decifrado final:</h5>
          <div className="dividerDiv">
            <span>{decifrado}</span>
            <button type="submit"className="codeBtn" onClick={handleSalvar}>Enviar</button>
          </div>
          <hr></hr>
          <h5>Hash:</h5>
          <span>{hash}</span>
        </div>
      </div>

      
    </>
  );
}

export default App;
