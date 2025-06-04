import { Injectable } from '@nestjs/common';
import { userInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  save(user: userInterface): Promise<userInterface> {
    return Promise.resolve(user);
  }
}
