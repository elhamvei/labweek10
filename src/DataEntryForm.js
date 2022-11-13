import React, { Component } from 'react';


export default class DataEntryForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: 'not selected',
            postalCode: '',
            buttonSubmitClick: false
        }
        this.province = ["Alberta", "British Columbia", "Manitoba", "New Brunswick",
            "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut",
            "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"]
    }

    onValueChanged = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        console.log("Form Submitted : " + JSON.stringify(this.state))
    }

    render() {
        return (
            <>

                <h2> Data Entry Class </h2>
                <form onSubmit={(e) => this.onSubmitForm(e)} >
                    <table>
                    <tr>
                            <td>
                               <span>Email</span>
                            </td>

                            <td>
                            <span>Name</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    name='email'
                                    type="text"
                                    onChange={(e) => this.onValueChanged(e)}
                                    placeholder="Enter Email" />
                            </td>

                            <td>
                                <input
                                    name='name'
                                    type="text"
                                    onChange={(e) => this.onValueChanged(e)}
                                    placeholder="Full Name" />
                            </td>
                        </tr>
                        <tr>
                            Address
                        </tr>
                        <tr>
                            <input
                                name='address'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                                placeholder="1234 Main St" />
                        </tr>
                        <tr>
                            Address 2
                        </tr>
                        <tr>
                            <input
                                name='address2'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)}
                                placeholder="Apartment, Studio, or Floor" />
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>Province</td>
                            <td>Postal Code</td>
                            
                        </tr>
                        <tr>
                            
                        </tr>

                        <tr>
                            <td>
                            <input
                                name='city'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)} />
                            </td>
                            <td>
                                <select name='province' onChange={(e) => this.onValueChanged(e)}>
                                {
                                    this.province.map((province) => (
                                        <option key={province} value={province}>{province}</option>
                                    ))
                                }
                            </select>
                            </td>

                            <td>
                            <input
                                name='postalCode'
                                type="text"
                                onChange={(e) => this.onValueChanged(e)} />
                            </td>


                        </tr>

                        <tr>
                            <label>
                                <input type="checkbox" />
                                Agree Terms & Condition?
                            </label>
                            </tr>

                        <tr>
                            <button name='btnSubmit' onClick={ () => this.setState({buttonSubmitClick: true}) }> Submit </button>
                        </tr>
                    </table>
                </form>

                {this.state.buttonSubmitClick ?<>

                <p>Email : {this.state.email}</p>
                <p>Full Name : {this.state.name}</p>
                <p>Address : {this.state.address}, {this.state.address2}</p>
                <p>City : {this.state.city}</p>
                <p>Province : {this.state.province}</p>
                <p>Postal Code : {this.state.postalCode}</p>
                </>
                : null}

            </>
        )
    }

}