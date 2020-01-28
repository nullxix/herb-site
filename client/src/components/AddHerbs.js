import React, {useState, useEffect} from 'react'
import LoginThing from './LoginThing'
const axios = require('axios')
require('../styles/form.css')

const _Input = props => {
    let [value, setValue] = useState(props.type === 'checkbox' ? false : '')

    useEffect(
        () => {
            setValue(props.value)
        },
        [props.value]
    )
    return (
        <div>
            <label htmlFor={props.name}>{props.label || props.children}</label>
            <input    
                onChange={event => {
                    //setValue(event.target.value)
                    props.handleChange(
                        event, 
                        event.target.type === 'checkbox' ? event.target.checked : event.target.value
                    )
                }} 
                required={props.required} 
                name={props.name} 
                type={props.type}
                value={value}
                checked={value}
            >
            </input>
        </div>

           
    )
}

export default props => {
    const [formData, _setFormData] = useState({})
    const setFormData = args => {
        _setFormData(args)
    }
    const [herbName, setHerbName] = useState('')
    const [location, setLocation] = useState('')
    const [uses, setUses] = useState('')
    const [popularUse, _setPopularUse] = useState(false)
    const setPopularUse = args => {
        _setPopularUse(args)
    }
    
    const handleSubmit = event => {
        const authHeader = `Bearer ${localStorage.getItem('mothersMedToken')}`
        event.preventDefault()
        axios({
            method: 'post',
            url: '/mothersMed/',
            data: {
              herbName, location, uses, popularUse
            },
            headers: {
                Authorization: authHeader
            }
          });

        setHerbName('')
        setLocation('')
        setUses('')
        setPopularUse(false)
        console.log(authHeader)
    }

    const handleChange = (valueChanger) => {
        return (event, value) => {
            event.preventDefault()
            valueChanger(value)
        }
    }
    
    const buttonStyle = () => {
        return {
            'maxWidth': '12%',
            'padding': '0.6em',
            'textAlign': 'center',
            'fontWeight' : '900',
            'background': popularUse ? '#66aa66' : '#777777',
            'color': popularUse ? 'white' : '#151515'
        }
    }

    const togglePopular = event => {
        handleChange(setPopularUse)(event, !popularUse)
    }

    const herbAdder = () => {
        return (
            <form onSubmit={handleSubmit}>
            <_Input key={'herbName'}name='herbName' required={true} type='text' handleChange={handleChange(setHerbName)} value={herbName || ""}>Herb Name</_Input>
            <_Input key={'location'}name='location' type='text' handleChange={handleChange(setLocation)} value={location || ""}>Location</_Input>
            <div>
                <label htmlFor='uses'>Uses</label>
                <textarea 
                    required={true} 
                    name='uses' 
                    onChange={event => {
                        handleChange(setUses)(event, event.target.value)
                    }} 
                    value={uses}
                >
                </textarea>
            </div>
            <div style={buttonStyle()} onClick={
                event => {
                    togglePopular(event)
                }
            }>
                    {popularUse ? 'Popular!' : 'Unpopular'}
            </div>
            <button type='submit'>Submit</button>
        </form>
        )
    }

    return (
        <div>
            <LoginThing/>
            {herbAdder()}
        </div>
    )
}




// herbname: {
//     type: String,
//     required: true //this will be applied to the searches
// },
// location: {
//     type: String,
    
// },
// uses: {
//     type: String,
//     required: true // this will be applied to the searches
// },
// other: {
//     type: Object
// },
// popularUse:{
//     type: Boolean,
//     required: true // this will be applied to top 20 most popular
// }