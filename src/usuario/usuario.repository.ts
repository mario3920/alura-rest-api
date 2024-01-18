import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }

  private buscaPorId(id: string){
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );
    
    if (!possivelUsuario) {
      throw new Error('Usuario não existe');
    }

    return possivelUsuario
  }

  async atualizar(id: string, novosDados: Partial<AtualizaUsuarioDTO>) {
    const usuario = this.buscaPorId(id)

    Object.entries(novosDados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;

    });
    return usuario;
  }

  async remove(id: string) {
    const usuario = this.buscaPorId(id)
    this.usuarios = this.usuarios.filter(
      usuarioSalvo => usuarioSalvo.id !== id
    )

    return usuario;
  }
}
