//name:ammaralshareef2014


const { AsyncResource } = require('async_hooks');
const Task = require('../models/task')
// get all tasks
const getAllTasks = async (req, res) => {
    //let tasks = Task.getMaxListeners(req.body)
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

//get single task
const getTask = async (req, res) => {

    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `no tasks with ${taskID}` })
        }
        res.status(200).json({ task });
        console.log(req.params)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
};

//create a task
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

//del task
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `no id found = ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        //console.log(err)
        res.status(500).json({ msg: err })
    }
};
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { runValidators: true, new: true });
        if (!task) {
            res.status(404).json({ msg: `no such a task with id ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
};
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}