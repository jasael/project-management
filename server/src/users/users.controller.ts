import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto } from './dto/signup.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  signUp(@Body() signupDto: SignUpDto): Promise<User> {
    return this.usersService.signUp(signupDto);
  }
}
