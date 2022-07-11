import { Injectable } from '@nestjs/common';

import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
    tasks: Task[] = [
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
    }

}
