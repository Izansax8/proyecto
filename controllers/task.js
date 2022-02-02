const Task = require("../models/task");

async function createTask(req,res){
    const task = new Task();
    const params = req.body;
    task.title = params.title;
    task.description = params.description; 

    try{
        const taskStore = task.save();

        if(!taskStore){
            res.status(400).send({msg: "No se ha guardado la tarea"});

        } else {
            res.status(200).send({task: taskStore});
        }
    }catch(error){
        res.status(500).send(error);
    }
}

async function getTasks(req,res){
    const idTask = req.params.id;
    try{
        const tasks = await Task.findById(idTask);

        if(!task){
            res.status(400).send({msg: "No se ha encontrado la tarea indicada"});

        } else {
            res.status(200).send(task);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

function getTask(req,res){
    console.log("Ejecutando get Task");
}

async function updateTask(req,res){
    const idTask = req.params.id;
    const params = req.body;

    try{
        const task = await Task.findByIdAndUpdate(idTask,params);

        if(!task){
            res.status(400).send({msg: "No se ha podido actualizar la tarea indicada"});

        } else {
            res.status(200).send({msg: "Actualización completada"});
        }
    }catch(error){
        res.status(500).send(error);
    }
}

async function deleteTask(req,res){
    const idTask = req.params.id;

    try{
        const task = await Task.findByIdAndDelete(idTask);

        if(!task){
            res.status(400).send({msg: "No se ha podido eliminar la tarea indicada"});

        } else {
            res.status(200).send(task);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
}
