import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Car, CarSchema } from 'src/cars/entities/car.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { Bike, BikeSchema } from 'src/bikes/entities/bike.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
    MongooseModule.forFeature([{ name: Bike.name , schema: BikeSchema }]),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
