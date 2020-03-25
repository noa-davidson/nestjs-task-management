import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import { User } from './user.entity';
import { MigrationExecutor } from 'typeorm';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});