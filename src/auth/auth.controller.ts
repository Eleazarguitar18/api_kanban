import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }
  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    try {
      const respuesta = await this.authService.register(createAuthDto);
      const data = {
        status: 200,
        message: 'Se creo el registro con exito!',
        data: respuesta,
      }
      return data;
    } catch (error) {
       throw new HttpException(
              {
                status: error.status || 500,
                message: error.message || 'Error al crear la persona',
                details: error.detail || null, // opcional, por ejemplo para errores de DB
              },
              error.status || 500,
            );
    }
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
