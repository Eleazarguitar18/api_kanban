import { IsString, IsEmail, IsOptional, IsBoolean, IsNumber,IsNotEmpty } from 'class-validator';
export class CreateUsuarioDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    estado:boolean=true;
}
