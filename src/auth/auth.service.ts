import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreatePersonaDto } from 'src/persona/dto/create-persona.dto';
import { PersonaService } from "../persona/persona.service";
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
@Injectable()
export class AuthService {
  constructor(private readonly personaService: PersonaService,
    private readonly usuarioService: UsuarioService
  ) {}
  login(createAuthDto: CreateAuthDto) {}
  async register(createAuthDto: CreateAuthDto) {
    //  creacion de persona

    const persona: CreatePersonaDto = createAuthDto;
    const personaData = await this.personaService.create(persona);
    const personaId = personaData.id;
    const name=createAuthDto.nombres+' '+createAuthDto.p_apellido+' '+createAuthDto.s_apellido;
    createAuthDto.name=name;
    // cracion de usuario
    const usuario:CreateUsuarioDto= createAuthDto;
    usuario.name=createAuthDto.nombres+' '+createAuthDto.p_apellido+' '+createAuthDto.s_apellido;
    usuario.id_persona=personaId;
    const usuarioData = await this.usuarioService.create(usuario);
    return usuarioData;
    // return 'This action adds a new auth';
  }
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
