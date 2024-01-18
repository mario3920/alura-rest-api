import { IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailEhUnico } from '../validacao/emailUnico.validator';

export class AtualizaUsuarioDTO {
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'a senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
