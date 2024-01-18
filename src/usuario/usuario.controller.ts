import { Body, Param, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import {v4 as uuid} from "uuid"
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private UsuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() userData: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = userData.email,
    usuarioEntity.senha = userData.senha,
    usuarioEntity.nome = userData.nome,
    usuarioEntity.id  = uuid();
    this.UsuarioRepository.salvar(usuarioEntity);
    return { usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome) , message: "Usuário criado com sucesso!"};
  }

  @Get()
  async listUsuarios() {
    const usuariosSalvos = await this.UsuarioRepository.listar()
    const usuariosLista = usuariosSalvos.map( usuario => new ListaUsuarioDTO( usuario.id, usuario.nome))
    return usuariosLista;
  }

  @Put("/:id")
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO){
    const usuarioAtualizado = await this.UsuarioRepository.atualizar(id, novosDados)

    return {
      usuario: usuarioAtualizado,
      mensagem: "Usuário atualizado com sucesso!"
    }
  }

  @Delete("/:id")
  async deletaUsuario(@Param('id') id: string){
    const usuarioRemovido = await this.UsuarioRepository.remove(id);

    return {
      usuario: usuarioRemovido,
      mensagem: "Usuário removido com sucesso!"
    }
  }
}
