import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(TasksRepository) private tasksRepository:TasksRepository){

    }
}
