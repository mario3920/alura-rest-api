import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailEhUnico } from "../validacao/emailUnico.validator";

export class CriaUsuarioDTO {

  @IsNotEmpty({ message:"O nome não pode ser vazio" })
  nome: string;
  
  @IsEmail(undefined, { message: "O email informado é inválido" })
  @EmailEhUnico({ message: 'já existe um usuário com este e-mail' })
  email: string;

  @MinLength(6, { message: "a senha precisa ter pelo menos 6 caracteres" })
  senha: string;
}