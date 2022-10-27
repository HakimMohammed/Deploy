import React from "react";
import { useState } from "react";
import './App.css'

const DB = [
  { username: "User1", password: "Pass1" },
  { username: "User2", password: "Pass2" }
]

export default function Connexion() {
  const [name, setName] = useState('');
  const [errMsgs, setErrMsgs] = useState({});
  const [submit, setSubmit] = useState(false);

  // const renderErrorMessage = (name) => {
  //   name == errMsgs.name && (<div>{errMsgs.name}</div>)
  // }

  const renderErrorMessage = (name) => {
    if (name === errMsgs.name) {
      return (<div className="err">{errMsgs.message}</div>)
    }
  }

  const err = {
    username: "Username incorrecte",
    password: "Password incorrecte"
  }

  const Submit = (e) => {
    e.preventDefault();
    let { username, password } = document.forms[0];
    setName(username.value)

    const data = DB.find((user) => user.username === username.value)

    if (data) {
      if (data.password !== password.value) {
        setErrMsgs({ name: "password", message: err.password })
      }
      else {
        setSubmit(true)
      }
    }
    else {
      setErrMsgs({ name: "username", message: err.username })
    }
  };

  const renderForm = (
    <div className="container">
      <h1>Connexion</h1>
      <form onSubmit={Submit}>
        <div className="subContainer">
          <label>Username</label><br />
          <input className="Champ" type="text" name="username" required />
          {renderErrorMessage('username')}
        </div>
        <div className="subContainer">
          <label>Password</label><br />
          <input className="Champ" type="password" name="password" required />
          {renderErrorMessage('password')}
        </div>
        <div className="Submit">
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  )

  return (
    <div >
      {
        submit ? <div className="rescontainer">
          <h1>Acceuil</h1>
          <div>Bonjour {name}</div>
        </div>
          : renderForm
      }
    </div>
  );
}

var Cities = ['Aglou', 'Agadir', 'Tiznit', 'Marrakech']

function Inscription() {
  const [Username, SetUsername] = useState('')
  const [Password, SetPassword] = useState('')
  const [Birth, SetBirth] = useState('')
  const [City, SetCity] = useState(Cities[0])
  const [Hobby, SetHobby] = useState([])

  console.log(Hobby)


  const check = (e) => {
    if (e.target.checked === true) {
      // SetHobby([...Hobby,e.target.value])

      let isExist = Hobby.find(item => item === e.target.value)

      if (!isExist) {
        SetHobby([...Hobby, e.target.value])
      }
    }
    else {
      SetHobby([...Hobby.filter(item => item !== e.target.value)])
    }
  }

  const submitted = (e) => {
    alert(
      `Je suis ${Username} né le ${Birth} à ${City} et mes loisirs sont : ${Hobby}`
    )
    e.preventDefault()
  }

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={submitted}>
        <table>
          <tr>
            <th>
              <label>Username</label>
            </th>
            <td>
              <input type="text" name="username" required value={Username} onChange={(e) => { SetUsername(e.target.value) }} />
            </td>
          </tr>
          <tr>
            <th><label>Password</label></th>
            <td>          <input type="password" name="password" required value={Password} onChange={(e) => { SetPassword(e.target.value) }} /></td>
          </tr>
          <tr>
            <th>          <label>Date de naissance</label>
            </th>
            <td>          <input type="date" required value={Birth} onChange={(e) => { SetBirth(e.target.value) }} />
            </td>
          </tr>
          <tr>
            <th><label>Ville</label></th>
            <td>
              <select size={1} onChange={(e) => { SetCity(e.target.value) }}>
                {
                  Cities.map((item, index) => {
                    return (
                      <option key={index} value={item} >{item}</option>
                    )
                  })
                }
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label>Genre</label>
            </th>
            <td>
              <span>Homme</span>
              <input type='radio' value={1} name="Genre" />
              <span>Femme</span>
              <input type='radio' value={2} name="Genre" />
            </td>
          </tr>
          <tr>
            <th>          <label>Loisirs</label></th>
            <td>
              <input type='checkbox' value='Sport' onClick={check} />
              <span>Sport</span>
              <input type='checkbox' value='Lecture' onClick={check} />
              <span>Lecture</span>
              <input type='checkbox' value='Musique' onClick={check} />
              <span>Musique</span>
            </td>
          </tr>
          <tr>
            <th>          <label>Photo</label></th>
            <td><input type="file" accept="image/png, image/gif, image/jpeg" /></td>
          </tr>
          <tr>
            <th colSpan={2}>          <input type="submit" value="Log in" /></th>
          </tr>
        </table>

      </form>

    </div>
  )
}

// export default Inscription;

