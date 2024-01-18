import { IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CaracteristicaProdutoDTO {

  @IsNotEmpty()
  nome: string;
  
  @IsNotEmpty()
  descricao: string;
}