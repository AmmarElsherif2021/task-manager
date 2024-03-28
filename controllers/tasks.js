//name:ammaralshareef2014
//pass: aiqXI2kkS2iyj0Hu

const { AsyncResource } = require('async_hooks');
const Task = require('../models/task')
const getAllTasks = async (req, res) => {
    //let tasks = Task.getMaxListeners(req.body)
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};
const getTask = async (req, res) => {

    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID });
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};
const createTask = async (req, res) => {
    //const { name, completed } = req.body
    try {
        const userTask = await Task.create(req.body)
        res.status(201).json({ userTask });
        console.log('a new task created', userTask.name)
    } catch (err) {
        res.status(500).json({ massage: err })
        console.log(err)
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