const { response } = require('express');
const Logs = require('../models/logs');
const {logs_joi} = require('../helpers/create_logs');

const getLogs = async (req, res = response) => {

    const logs = await Logs.find();
    res.json({
        ok: true,
        logs
    });

}
const getLogsById = async (req, res = response) => {
    const authorizacion = await Logs.findById(req.params.id);
    res.json({
        ok: true,
        authorizacion
    });
}



const saveLog = async (req, res = response) => {
    const logs = new Logs(req.body);

    try {
        await logs_joi.validateAsync(req.body);
        await logs.save();
        res.json({
            ok: true,
            logs
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
const updateLog = async (req, res = response) => {
    const id = req.params.id;
    const logs = {
        ...req.body
    };
    try {
        await logs_joi.validateAsync(logs);
        const logUpdate = await Logs.findByIdAndUpdate(id, logs, { new: true });
        res.json({
            ok: true,
            logs: logUpdate
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
const deleteLog = async (req, res = response) => {
    const id = req.params.id;
    try {
        const logDelete = await Logs.findByIdAndDelete(id);
        res.json({
            ok: true,
            logs: logDelete
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
    getLogs,
    getLogsById,
    saveLog,
    updateLog,
    deleteLog
}