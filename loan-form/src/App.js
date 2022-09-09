import React, {Component} from 'react';

import './App.css';

import Button from './library/components/Button';
import InputField from './library/components/InputField';
import Dropdown from './library/components/Dropdown';
import {Validators} from './library/components/Validators/Validator';
import Checkbox from './library/components/Checkbox';
import Timer from './library/components/Timer/timer';

export default class App extends Component { 
    
    
    
    state = {
        text: '',
        number: '',
        email: '',
        reason: '',
        message: '',
        acceptance: false
    };

   
    

    handleChange = (key) => (value) => {
        this.setState({[key]: value});
    };

    handleClick = (event) => {
        event.preventDefault();
        alert('Form Submitted');
    };

    handleDropdown = (reason) => {
        this.setState({reason});
    };

    handleCheckbox = (acceptance) => {
        this.setState({acceptance});
    };

    render() {
        const {text,email,number, reason, message, acceptance} = this.state;
        

        return (
            
            <div className="container">
                <h2>SAMPLE LOAN FORM</h2>
                <div className="clock">
                <Timer/>
                </div>
                <hr/>
                <InputField
                    value={text}
                    type='text'
                    placeholder='Enter Your Full Name'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('text')}/>

                <InputField
                    value={email}
                    type='text'
                    placeholder='Enter your email'
                    
                    validators={[
                        {check: Validators.email, message: 'Invalid Email ID'}
                    ]}
                    onChange={this.handleChange('email')}
                    />

                    
                <InputField
                    value={number}
                    type='number'
                    placeholder='Enter loan amount'
                    
                    validators={[
                        {check: Validators.number, message: 'Invalid Number'}
                    ]}
                    onChange={this.handleChange('number')}
                    />

                               


                <Dropdown
                    data={[
                        {value: 1, label: 'Education'},
                        {value: 2, label: 'Personal'},
                        {value: 3, label: 'Home'},
                        {value: 4, label: 'Health'},
                        {value: 5, label: 'Business'},
                        {value: 5, label: 'Miscellaneous'},
                    ]}
                    styleClass='mt-3'
                    value={reason}
                    placeholder='Loan Reason'
                    onChange={this.handleDropdown}
                />

                <InputField
                    value={message}
                    type='textarea'
                    placeholder='Want to tell us anything ?'
                    validators={[
                        {check: Validators.required, message: 'This field is required'}
                    ]}
                    onChange={this.handleChange('message')}/>

                <Checkbox
                    label='I accept the terms and conditions'
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                />

                <Button
                    onClick={this.handleClick}
                    value='Submit'/>

            </div>
           
        );
    }
}
