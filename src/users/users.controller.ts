import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserResponse } from './dtos/UserResponse.dto';
import { IdParam, PaginationQuery } from 'src/lib/dtos';
import { Serialize, SerializeList } from 'src/lib/interceptors';
import { UserPayload, UserUpdatePayload } from './dtos/UserPayload.dto';

const HARDCODED_USER: UserResponse = {
  id: 1,
  email: 'john.doe@example.com',
  first_name: 'John',
  last_name: 'Doe',
  username: 'john.doe',
};

@Controller('users')
export class UsersController {
  @Post('/')
  @Serialize(UserResponse)
  create(@Body() payload: UserPayload) {
    return HARDCODED_USER;
  }

  @Get('/:id')
  @Serialize(UserResponse)
  getUserById(@Param() { id }: IdParam) {
    return HARDCODED_USER;
  }

  @Patch('/:id')
  @Serialize(UserResponse)
  update(@Param() { id }: IdParam, @Body() payload: UserUpdatePayload) {
    return HARDCODED_USER;
  }

  @Get('/')
  @SerializeList(UserResponse)
  list(@Query() pagination: PaginationQuery) {
    return {
      next: null,
      previous: null,
      count: 1,
      results: [HARDCODED_USER],
    };
  }

  @Delete('/:id')
  deleteById(@Param() { id }: IdParam) {}
}
