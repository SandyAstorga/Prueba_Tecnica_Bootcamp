import React from 'react'
import { useState } from 'react';

const MultilpleInputForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    return (
        <>
            <h1>Multiple Input Form</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Email address</label>
                    <input
                        className='form-control'
                        placeholder='Enter email'
                        type='email'
                        name='email' 
                        value={formData.email} 
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        className='form-control'
                        placeholder='Password'
                        type='password'
                        name='password' 
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default MultilpleInputForm
