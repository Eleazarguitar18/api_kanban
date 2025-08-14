// import { IsString, IsEmail, IsOptional, IsBoolean, IsNumber } from 'class-validator';
export class CreateUsuarioDto {
    // @IsString()
    name: string;

    // @IsEmail()
    email: string;

    // @IsString()
    password: string;

    // @IsOptional()
    // @IsBoolean()
    estado?: boolean;

    // @IsNumber()
    id_user_create: number;
}
