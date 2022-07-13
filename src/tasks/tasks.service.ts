import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
    
    constructor(@InjectModel("Task") private taskModel: Model<Task>) {}

    async getTasks() {
        return await this.taskModel.find();
    }
    
    async getTask(id:string) {
        return await this.taskModel.findById(id);
    }

    async createTask(task: CreateTaskDto) {
        const newTask = new this.taskModel(task);
        return await newTask.save()
        
    }
    
    
    
    
    
    
    
    
    
    
    
    /* tasks: Task[] = [
        {
            id:1,
            title: "Testing",
            description: "Testing description",
            done: false
        },
        {
            id:2,
            title: "Testing 2",
            description: "Testing description",
            done: false
        },
        {
            id:3,
            title: "Testing 3",
            description: "Testing description",
            done: false
        },
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {
        return this.tasks.find(x => x.id === id)
    } */

}
