import React, { useState } from 'react'
import api from './api'
import sha1 from 'js-sha1'

//6b2918b603820c4ed69920d3486e7a87d31344c0

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

        setArray(Array.from(cifrado))

        let tempHash = 0
      for (let i = 0; i < cifrado.length; i++ ){
        tempHash += Math.pow(cifrado.charCodeAt(i) * 31, cifrado.length -i)
        tempHash = tempHash & tempHash
      }
      setHash(sha1(cifrado))


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
      setCifrado(decifrado)
      let tempHash = 0
      for (let i = 0; i < cifrado.length; i++ ){
        tempHash += Math.pow(cifrado.charCodeAt(i) * 31, cifrado.length -i)
        tempHash = tempHash & tempHash
      }
      setHash(sha1(cifrado))


        //let hash = 0;
	      //for (let i = 0; i < str.length; i++) {
		    //hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
		    //hash = hash & hash; // Convert to 32bit integer
	      //}


    }

    async function handleSalvar(event){
      event.preventDefault()

      const awnserObj = {
        numero_casas: pulos,
        token: token,
        cifrado: cifrado,
        decifrado: decifrado,
        resumo_criptografico: ''
      }
    
      const awnser = JSON.stringify(awnserObj);

      await api.post(`/submit-solution?token=${token}`, awnser)
    }
    

  return (
    <> 
      <h1> Hello World! </h1>
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
            <p>Clicar 3 vezes em "enviar requisição" para atualizar variáveis</p>
      </form>
      <h6>Numero de casas: <span>{pulos}</span></h6>


      <h5>Texto cifrado:</h5>
      <span>{cifrado}</span>
      <button type="submit" className="btn" onClick={handleConverter}>Converter</button>



      <h5>Texto convertido</h5>
      <span>{convertido}</span>
      <button type="submit" className="btn" onClick={handleDecifrar}>Converter</button>

      <h5>Texto convertido decifrado</h5>
      <span>{convertido_d}</span>
      <button type="submit" className="btn" onClick={handleFinal}>Converter</button>
      

      <h5>Texto Decifrado final:</h5>
      <span>{decifrado}</span>
      <button type="submit" className="btn" onClick={handleSalvar}>Enviar</button>

      <h5>Hash:</h5>
      <span>{hash}</span>
    </>
  );
}

export default App;
