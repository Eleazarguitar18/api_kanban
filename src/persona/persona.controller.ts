import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  async create(@Body() createPersonaDto: CreatePersonaDto) {
    try {
      const respuesta = await this.personaService.create(createPersonaDto);
      const data = {
        status: 200,
        message: 'Se creo la persona con exito!',
        data: respuesta,
      };
      return data;
    } catch (error) {
      // puedes inspeccionar el error y lanzar un HttpException
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
  async findAll() {
    const respuesta = await this.personaService.findAll();
    const data = {
      status: 200,
      message: 'Listado de personas registradas!',
      data: respuesta,
    };
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personaService.update(+id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}
