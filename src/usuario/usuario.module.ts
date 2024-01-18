import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/usuario/usuario.controller';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { EmailEhUnicoValidator } from './validacao/emailUnico.validator';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
