const { response } = require('express');
const Aplication = require('../models/aplications');
const { aplication_joi } = require('../helpers/create_aplication');

const getAplications = async (req, res = response) => {

    const aplications = await Aplication.find();
    res.json({
        ok: true,
        aplications
    });


}
const getAplicationsById = async (req, res = response) => {

    const id = req.params.id;
    const aplication = await Aplication.findById(id);
    res.json({
        ok: true,
        aplication
    });



}
const saveAplication = async (req, res = response) => {
    const aplication = new Aplication(req.body);
    try {
        await aplication_joi.validateAsync(req.body);
        await aplication.save();
        res.json({
            ok: true,
            aplication
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
const updateAplication = async (req, res = response) => {
    const id = req.params.id;
    const aplication = {
        ...req.body

    };
    try {
        await aplication_joi.validateAsync(aplication);
        const aplicationUpdate = await Aplication.findByIdAndUpdate(id, aplication, { new: true });
        res.json({
            ok: true,
            aplication: aplicationUpdate
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
const deleteAplication = async (req, res = response) => {
    const id = req.params.id;
    try {
        const aplicationDelete = await Aplication.findByIdAndDelete(id);
        res.json({
            ok: true,
            aplication: aplicationDelete
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
    getAplications,
    saveAplication,
    updateAplication,
    deleteAplication,
    getAplicationsById
}