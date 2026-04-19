import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PilotsService } from './pilots.service';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';

@Controller('pilots')
export class PilotsController {
  constructor(private readonly pilotsService: PilotsService) {}

  @Get()
  findAll() {
    return this.pilotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pilotsService.findOne(id);
  }

  @Post()
  create(@Body() createPilotDto: CreatePilotDto) { //el createPilotDto es diferente al CreatePilotDto del servicio, el del servicio es el que se encarga de validar
  //  los datos y el del controlador es el que se encarga de recibir los datos del cliente
    return this.pilotsService.create(createPilotDto); //aquí se debe llamar al servicio para crear un piloto
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePilotDto: UpdatePilotDto) {
    return this.pilotsService.update(id, updatePilotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pilotsService.remove(id);
  } 

}

