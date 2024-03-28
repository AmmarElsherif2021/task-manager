const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: [true, 'must provide!'],
        maxLength: [20, 'do not exceed 20'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema)
