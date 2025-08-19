import {  IsString, isDate,IsEmail,IsNotEmpty } from "class-validator"
export class CreatePersonaDto {
    @IsString()
    @IsNotEmpty()
    nombres: string;
    @IsString()
    @IsNotEmpty()
    p_apellido: string;
    @IsString()
    @IsNotEmpty()
    s_apellido: string;
    @IsString()
    @IsNotEmpty()
    fecha_nacimiento: Date;
    @IsString()
    @IsNotEmpty()
    ci: string;
    @IsString()
    @IsNotEmpty()
    genero: string;
}