import { MongoDriver } from "../MongoConnector";
import * as express from 'express';
import bodyParser = require("body-parser");

export class expressDriver {

    private datastore: MongoDriver;
   

    constructor(datastore: MongoDriver) {
        this.datastore = datastore;
        this.startServer();
    }


    startServer() {
        const app = express(); 

        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))
 
        // parse application/json
        app.use(bodyParser.json())

        app.get('/task', async (req, res) => {
            try {
                const tasks = await this.datastore.listTasks();
                res.status(200).send(tasks);
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // create task
        app.post('/task', async (req, res) => {
            try {
                let task ={
                    text: req.body.text,
                    completed: req.body.completed
                };
                this.datastore.createTask(task);
                res.status(200).json({message: 'Task Created!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // create category
        app.post('/category', async (req, res) => {
            try {
                this.datastore.createCategory(req.body.name);
                res.status(200).json({message: 'Category Created!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });
        
        // renaming task
        app.patch('/task/text', async (req, res) => {
            try {
                let task = { 
                    text: req.body.text,
                    completed: req.body.completed
                };
                console.log(task);
                this.datastore.updateTask(req.body._id, task);
                res.status(200).json({message: 'Task Updated!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // update category
        app.patch('/category', async (req, res) => {
            try {
                this.datastore.updateCategory(req.body._id, req.body.name);
                res.status(200).json({message: 'Category Updated!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // Add a task
        app.patch('/category/:categoryid/task', async (req, res) => {
            try {
                this.datastore.addTasksToCategory(req.params.categoryid, req.body.list);
                res.status(200).json({message: 'Task Added!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // Remove a task
        app.delete('/category/:categoryid/task', async (req, res) => {
            try {
                this.datastore.removeTasksFromCategory(req.params.categoryid, req.body.list);
                res.status(200).json({message: 'Task Deleted!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // mark a task as complete
        app.patch('/task/completed', async (req, res) => {
            try {
                let task = {
                    text: req.body.text,
                    completed: req.body.completed
                };
                this.datastore.updateTask(req.body._id, task);
                res.status(200).json({message: 'Task Updated!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // delete task
        app.delete('/task/:taskId', async (req, res) => {
            try {
                this.datastore.deleteTask(req.params.taskId);
                res.status(200).json({message: 'Task Deleted!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // delete category
        app.delete('/category/:categoryId', async (req, res) => {
            try {
                this.datastore.deleteCategory(req.params.categoryId);
                res.status(200).json({message: 'Task Category!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        app.listen('4000', () => {
            console.log('Server started on port 4000');
        });
    }
}
    