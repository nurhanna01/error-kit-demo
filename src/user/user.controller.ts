import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  AppError,
  badRequest,
  forbidden,
  internalServerError,
  notFound,
} from '@nurhanna01/error-kit';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { userInterface } from './interfaces/user.interface';

@Controller('user')
export class userController {
  constructor(private readonly user: UserService) {}
  @Post()
  async saveData(@Body() createDto: createUserDto): Promise<userInterface> {
    try {
      console.log(createDto);
      if (!createDto?.name) {
        throw badRequest('name are require');
      }
      const data = await this.user.save(createDto);
      return data;
    } catch (error) {
      if (error instanceof AppError) {
        console.log(error.message);
        throw error;
      }
      throw new AppError(400, 'BadRequest', 'This is a test error');
    }
  }

  @Get('bad-request')
  getBedRequest() {
    throw badRequest('username required!');
  }

  @Get('not-found')
  getNotfound() {
    throw notFound('user not found!');
  }

  @Get('forbidden')
  getForbidden() {
    throw forbidden('access is forbidden!');
  }

  @Get('internal-server-error')
  getServerError() {
    throw internalServerError('something wrong!');
  }

  @Get('test')
  getTest() {
    console.log('Akan throw AppError');
    throw new AppError(400, 'BadRequest', 'Ini AppError!');
  }
}
