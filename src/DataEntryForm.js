import React from "react";
import "./Data.css";
import { useState } from "react";

function DataEntryForm() {
    const province = [
        "Choose Province",
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon Territory",
    ];

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById("data").innerHTML =
            `<table style="width: 100%;border:1px solid;">
                                                        <tr>
                                                            <td style="text-align: right;width: 50%;color: green;">
                                                                Email:
                                                            </td>
                                                            <td style="text-align: left;width: 50%;">
                                                                ` +
            inputs.email +
            `
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Full Name:
                                                            </td>
                                                            <td>
                                                            ` +
            inputs.name +
            `
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Address:
                                                            </td>
                                                            <td>
                                                            ` +
            inputs.add1 +
            " " +
            inputs.add2 +
            `
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                City:
                                                            </td>
                                                            <td>
                                                            ` +
            inputs.city +
            `
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Province:
                                                            </td>
                                                            <td>
                                                            ` +
            inputs.province +
            `
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Postal Code:
                                                            </td>
                                                            <td>
                                                            ` +
            inputs.postal +
            `
                                                            </td>
                                                        </tr>
                                                    </table>`;
    };
    return (
        <div>
            <div className="frm">
                <h1>Data Entry Form</h1>
                <form onSubmit={handleSubmit}>
                    <table id="temp">
                        <tr>
                            <td>Email</td>
                            <td></td>
                            <td>Name</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    value={inputs.email || ""}
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    required
                                />
                            </td>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    value={inputs.name || ""}
                                    name="name"
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>Address</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <input
                                    type="text"
                                    value={inputs.add1 || ""}
                                    name="add1"
                                    onChange={handleChange}
                                    placeholder="1234 Main St"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>Address 2</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <input
                                    type="text"
                                    value={inputs.add2 || ""}
                                    name="add2"
                                    onChange={handleChange}
                                    placeholder="Apartment, Studio, of floor"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>Province</td>
                            <td>Postal Code</td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    value={inputs.city || ""}
                                    name="city"
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                            <td>
                                <select
                                    value={inputs.province || ""}
                                    name="province"
                                    onChange={handleChange}
                                >
                                    {province.map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={inputs.postal || ""}
                                    name="postal"
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <div className="data" id="data"></div>
        </div>
    );
}

export default DataEntryForm;
