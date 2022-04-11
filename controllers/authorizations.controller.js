const { response } = require('express');
const Authorization = require('../models/authorizations');
const {authorizacion_joi} = require('../helpers/create_authorization');

const getAuthorizations = async (req, res = response) => {

    const authorizations = await Authorization.find();
    res.json({
        ok: true,
        authorizations
    });

}
const getAuthorizationsById = async (req, res = response) => {
    const authorizacion = await Authorization.findById(req.params.id);
    res.json({
        ok: true,
        authorizacion
    });
}



const saveAuthorization = async (req, res = response) => {
    const authorization = new Authorization(req.body);
    console.log(req.body);
    try {
        await authorizacion_joi.validateAsync(req.body);
        await authorization.save();
        res.json({
            ok: true,
            authorization
        });
    } catch (error) {
        if (error.isJoi === true) {
            res.status(422).json({
                ok: false,
                msg: error.message
            });
        } else {
            res.status(500).json({
                ok: false,
                msg: error
            });
        }
    }
}
const updateAuthorization = async (req, res = response) => {
    const id = req.params.id;
    const authorization = {
        ...req.body
    };
    try {
        await authorizacion_joi.validateAsync(authorization);
        const authorizationUpdate = await Authorization.findByIdAndUpdate(id, authorization, { new: true });
        res.json({
            ok: true,
            authorization: authorizationUpdate
        });
    } catch (error) {
        if (error.isJoi === true) {
            res.status(422).json({
                ok: false,
                msg: error.message
            });
        } else {
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado '
            });
        }
    }
}
const deleteAuthorization = async (req, res = response) => {
    const id = req.params.id;
    try {
        const authorizationDelete = await Authorization.findByIdAndDelete(id);
        res.json({
            ok: true,
            authorization: authorizationDelete
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}
module.exports = {
    getAuthorizations,
    getAuthorizationsById,
    saveAuthorization,
    updateAuthorization,
    deleteAuthorization
}