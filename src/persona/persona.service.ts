import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private personaRepo: Repository<Persona>,
  ) {}
  async create(createPersonaDto: CreatePersonaDto) {
    // const {...personaData}=createPersonaDto;
    const persona = this.personaRepo.create(createPersonaDto);
    const personaData = await this.personaRepo.save(persona);
    return personaData;
  }

  async findAll() {
    const data = await this.personaRepo.find();
    if (data.length === 0) {
      throw new NotFoundException(`No existen datos de personass`);
    }
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
