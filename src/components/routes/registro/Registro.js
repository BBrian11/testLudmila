import React, { useReducer } from "react";
import "./registro.css";
import { auth, firestore, storage } from "../../../firebase";
import { Redirect } from "react-router-dom";
import { HOME } from "../../../routes";

const Registro = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "field", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = () => {
    let { email, password, username, phonenumber, wspnumber } = state.form;
    let ref = storage.ref(`images/${email.replace(/\W/, "_")}/`);
    ref
      .put(state.imageFile)
      .then(
        () => dispatch({ type: "setImageURL", value: ref.getDownloadURL() }),
        (error) => console.error(error.message)
      )
      .then(() =>
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(() => firestore.collection("usersInfo").add({ username, phonenumber, wspnumber, email }))
          .then(() => dispatch({ type: "redirect", value: true }))
          
      ).catch((e) => console.error(e))
  };

  return (
    <div className="register-div">
      {state.redirect && <Redirect to={HOME} />}
      <form className="register-form">
        <h3 className="register-title">Registrarse</h3>
        <input
          require={true}
          onChange={handleChange}
          value={state.form.username}
          spellCheck={false}
          name="username"
          type="text"
          className="register-input"
          placeholder="Nombre del agente"
        />
        <input
          require={true}
          onChange={handleChange}
          value={state.form.password}
          spellCheck={false}
          name="password"
          type="text"
          className="register-input"
          placeholder="Contraseña"
        />
        <input
          require={true}
          onChange={handleChange}
          value={state.form.phonenumber}
          spellCheck={false}
          name="phonenumber"
          type="number"
          className="register-input"
          placeholder="Numbero de telefono"
        />
        <input
          require={true}
          onChange={handleChange}
          value={state.form.wspnumber}
          spellCheck={false}
          name="wspnumber"
          type="number"
          className="register-input"
          placeholder="Numero de whatsapp"
        />
        <input
          require={true}
          onChange={handleChange}
          value={state.form.email}
          spellCheck={false}
          name="email"
          type="email"
          className="register-input"
          placeholder="Email del agente"
        />
       
        <input
          onClick={handleSubmit}
          disabled={state.disableState}
          name="submit"
          type="button"
          className="register-submit"
          value="Registrarse"
        />
      </form>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
   
    case "disableState":
      return {
        ...state,
        disableState: action.value,
      };
   
    case "redirect":
      return {
        ...state,
        redirect: action.value,
      };
    default:
      return state;
  }
};

const initialState = {
  form: {
    username: "",
    password: "",
    phonenumber: "",
    wspnumber: "",
    email: "",
   
  },
  imageFile: {},
  disableState: false,
  redirect: false,
};

export default Registro;

