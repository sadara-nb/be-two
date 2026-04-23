import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CreateCarDto } from 'src/cars/dto/create-car.dto';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  carsService: any;
  bikesService: any;
  constructor(private readonly seedsService: SeedService) {}

  @Get()
  findAll() {
    return this.seedsService.findAll();
  }

  @Delete()
  removeAll() {
    return this.seedsService.removeAll();
  }
}
