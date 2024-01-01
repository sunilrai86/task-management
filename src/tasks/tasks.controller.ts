import { Controller, Get } from '@nestjs/common';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    @Get()
    async getTasks(){

    }
}
