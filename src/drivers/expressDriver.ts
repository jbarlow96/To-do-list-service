import { MongoDriver } from "../MongoConnector";
import * as express from 'express';
import { resolveSoa } from "dns";

export class expressDriver {

    private datastore: MongoDriver;
   

    constructor(datastore: MongoDriver) {
        this.datastore = datastore;
        this.startServer();
    }


    startServer() {
        const app = express(); 

        app.get('/gettasks', async (req, res) => {
            try {

                res.status(200).json({message: 'Task!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // create task
        app.post('/addtask', async (req, res) => {
            try {
                let task ={
                    text: req.body.text,
                    completed: req.body.completed
                };

                res.status(200).json({message: 'Task Created!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // create category
        app.post('/addcategory', async (req, res) => {
            try {
                let category ={
                    name: req.body.name,
                    tasks: req.body.tasks
                };

                res.status(200).json({message: 'Category Created!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });
        
        // update task
        app.patch('/updatetask', async (req, res) => {
            try {
                let task ={
                    text: req.body.text,
                    completed: req.body.completed
                };

                res.status(200).json({message: 'Task Updated!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // update category
        app.patch('/updatecategory', async (req, res) => {
            try {
                let category ={
                    name: req.body.name,
                    tasks: req.body.tasks
                };

                res.status(200).json({message: 'Category Updated!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // Add a task
        app.patch('/updateaddtask', async (req, res) => {
            try {
                let ids ={
                    categoryId: req.body.categoryId,
                    taskId: req.body.taskId
                };

                res.status(200).json({message: 'Task Added!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // Remove a task
        app.patch('/updatedeletetask', async (req, res) => {
            try {
                let ids ={
                    categoryId: req.body.categoryId,
                    taskId: req.body.taskId
                };

                res.status(200).json({message: 'Task Deleted!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // mark a task as complete
        app.patch('/updatetask', async (req, res) => {
            try {
                let task ={
                    text: req.body.text,
                    completed: req.body.completed
                };

                res.status(200).json({message: 'Task Updated!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // delete task
        app.delete('/deletetask', async (req, res) => {
            try {

                res.status(200).json({message: 'Task Deleted!'});
            } catch (error) {
                console.log(error);
                res.status(400).json({message: error});
            }
        });

        // delete category
        app.delete('/deletecategory', async (req, res) => {
            try {

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
    