import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default props => {
    const [value, setValue] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('mothersMedToken')
        if(token)
            setLoggedIn(true)
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        axios({
            method: 'post',
            url: '/mothersMed/login',
            data: {
                'password': value
            }
        }).then(res => {
            if(res.data.success){
                localStorage.setItem('mothersMedToken', res.data.token)
                setLoggedIn(true)
            } else {
                console.log('wrong pass')
                alert('Incorrect password')
            }
            console.log(res)
        })
    }

    const handleChange = event => {
        setValue(event.target.value)
    }

    if(loggedIn){
        return (
            <div style={{
                backgroundColor: '#55dd55',
                color: 'white',
                textAlign: 'center',
                fontSize: '32px',
            }}>
                AUTHORIZED
                <div>
                    <button 
                        onClick={() => {
                            localStorage.removeItem('mothersMedToken')
                            setLoggedIn(false)
                        }}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input type='password' onChange={handleChange} value={value}></input>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
