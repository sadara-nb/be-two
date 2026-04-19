import { PartialType } from '@nestjs/mapped-types';
import { CreatePilotDto } from './create-pilot.dto';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdatePilotDto extends PartialType(CreatePilotDto) {
        
/*      @IsString()
        @IsOptional()
        nombre? : string;
        
        @IsString()
        @IsOptional()
        escuderia: string;
    
        @IsNumber()
        @IsPositive()
        @IsOptional()
        numero: number;
    
        @IsOptional()
        activo: boolean;

        @IsOptional()
        @IsPositive()
        @IsNumber()
        campeonatos: number; */


}
