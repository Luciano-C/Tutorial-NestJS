import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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
    deleteTask(@Param("id") id): string {
        console.log(id)
        return `Deleting task ${id}`
    }

}
