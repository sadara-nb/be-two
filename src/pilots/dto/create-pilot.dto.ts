import { IsNumber, IsPositive, IsString } from "class-validator";


export class CreatePilotDto {
    @IsString()
    nombre : string;
    
    @IsString()
    escuderia: string;

    @IsNumber()
    @IsPositive()
    numero: number;

    activo: boolean;

    @IsPositive()
    @IsNumber()
    campeonatos: number;
}
