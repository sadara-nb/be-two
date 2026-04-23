import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bike } from 'src/bikes/entities/bike.entity';
import { Car } from 'src/cars/entities/car.entity';
import { cars } from './cars';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Car.name)
    private readonly carsModel: Model<Car>, 
    @InjectModel(Bike.name)
    private readonly bikesModel: Model<Bike>,    
  ) {}


  async findAll() {
    try{
    await this.carsModel.insertMany(cars);
    await this.bikesModel.insertMany([]);
    return 'this action returns all seed';
    }
    catch(error){
        }
    }

  async removeAll() {
    await this.carsModel.deleteMany({});
    await this.bikesModel.deleteMany({});
    return 'All seed data removed';
  }

}