import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    private readonly logger = new Logger('Users'); //el log sirve para imprimir mensajes en la consola, el string 'Users' es el contexto del log, 
    userRepository: any;
    // se puede cambiar por cualquier otro string que quieras 

    constructor(
        @InjectModel(User.fullName)
        private readonly usersModel: Model<User>
    ) {}
        
    async findAll() {
        this.logger.log('Finding all users');
        return this.usersModel.find();
    }

    async create(createUserDto: CreateUserDto) {
        try {
            const user = this.userRepository.create(createUserDto);
            await this.userRepository.save(user);
            return user;
            } catch (error) {
            console.log(error);
            this.handleDBErrors(error);
            }
        }
    
    private handleDBErrors(error: any) {
        if(error.code === '23505') {
            throw new BadRequestException(error.detail)
        }
        console.log(error)
        throw new InternalServerErrorException('Please check server logs for more details')
    }
}

