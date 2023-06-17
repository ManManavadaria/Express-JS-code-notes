const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        // validate: (value) => {
        //     if (!validator.email(value)) {
        //         throw new Error("please enter valid email");
        //     }
        // }
    },
    number: {
        type: Number,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        require: true,
    },
    tokens: [{
        token: {
            type: String,
            Required: true
        }
    }]
});

customerSchema.methods.authToken = async function () {
    try {
        console.log(this._id);
        const tokenData = await jwt.sign({ _id: this._id.toString() }, "sbfkuyadshfkus3351sddvjgasdbbksndcsd");
        this.tokens = this.tokens.concat({ token: tokenData });


        return tokenData;
    } catch (error) {
        resp.send("error ouccered at authToken creation" + error);
        console.log(error);
    }


}

customerSchema.pre("save", async function (next) {
    if (!this.isModifiedied) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const customer = new mongoose.model("customer", customerSchema);

module.exports = customer;