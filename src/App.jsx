import React, {useState} from 'react';
import './App.css';
import { Form } from './components/Form';

export default function App() {

    const [registerUser, setRegisterUser] = useState({ username: '', password: ''})
    const [loginUser, setLoginUser] = useState({ username: '', password: ''})

    return (
        <div className="App">
            <Form user={registerUser} set={setRegisterUser}/>
            <Form user={loginUser} set={setLoginUser}/>
        </div>
    );
}
