const express = require('express');
const router = new express.Router();
const customer = require('../models/customer');
const bcrypt = require('bcryptjs');
// require("../Router/customer_rout");

router.get("/", (req, resp) => {
    resp.send("all okayyyy");
});

router.post("/customers", async (req, resp) => {
    try {
        const password = req.body.password;
        const registerCustomer = new customer(req.body);

        const tokenReq = await registerCustomer.authToken();

        resp.cookie("jwt", tokenReq.tokens.token);
        console.log(cookie);

        const cSave = await registerCustomer.save();
        resp.send(registerCustomer);
    } catch (e) {
        console.log("error ouccered at post req");
        resp.send(e);
    }
});

router.get("/customers", async (req, resp) => {
    try {
        const cdata = await customer.find();
        resp.send(cdata);
    } catch (e) { resp.send(e); }
});

router.get("/customers/:name", async (req, resp) => {
    try {
        const _name = req.params.name;
        const cdata = await customer.find({ "name": _name });
        resp.send(cdata);
    } catch (e) { resp.send(e); }
})

router.patch("/customers/:id", async (req, resp) => {
    try {
        const _id = req.params.id;
        const udata = await customer.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        resp.send(udata);
    } catch (e) { resp.send(e); }
})

router.delete("/customers/:id", async (req, resp) => {
    try {
        const cdata = await customer.findByIdAndDelete(req.params.id);
        resp.send(cdata);
    } catch (e) { resp.send(e); }
})

module.exports = router;
