import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    @Get()
    getTasks(): {status: string} {
        return {status: "Retrieving tasks"}
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task)
        return "Creating task"
    }

    @Put()
    updateTask(): string {
        return "Updating a task"
    }

    @Delete(":id")
    deleteTask(): string {
        return "Deleting a task"
    }

}
