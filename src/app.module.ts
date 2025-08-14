import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [PersonaModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // 👈 Cambia aquí
      host: 'localhost',
      port: 5432, // Puerto por defecto de PostgreSQL
      username: 'postgres', // Tu usuario de PostgreSQL
      password: 'ele21', // Tu contraseña
      database: 'kanbandb', // Nombre de tu base de datos
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
