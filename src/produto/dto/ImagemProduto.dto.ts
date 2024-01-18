import { IsNotEmpty } from "class-validator";

export class ImagemProdutoDTO {
  
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  descricao: string;
}