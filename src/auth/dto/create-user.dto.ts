import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(/[a-zA-Z]+/g, {message: 'the password must follow the regex'})
    password: string;

    @IsString()
    @MinLength(1)
    fullName: string;

}