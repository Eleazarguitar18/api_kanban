import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PersonaModule } from 'src/persona/persona.module';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [PersonaModule,UsuarioModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
