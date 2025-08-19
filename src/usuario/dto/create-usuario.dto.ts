import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
export class CreateUsuarioDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsNotEmpty()
  @IsEmail({}, { message: 'El email no tiene un formato válido' })
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  estado: boolean = true;

  @IsNumber()
  @IsOptional()
  id_persona?: number;
}
