//name:ammaralshareef2014
//pass: aiqXI2kkS2iyj0Hu

const Task = require('../models/task')
const getAllTasks = (req, res) => {
    res.send('all tasks retrieved')
};
const getTask = (req, res) => {
    res.json({ id: req.params.id })
};
const createTask = async (req, res) => {
    //const { name, completed } = req.body
    if (req.body.name) {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
        console.log('a new task created', task.name)
    } else {
        res.status(401).send({ success: false })
    }
};
const deleteTask = (req, res) => {
    res.send(`task ${req.params.id} deleted`)
};
const updateTask = (req, res) => {
    res.send(`task ${req.params.id} updated`)
};
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}