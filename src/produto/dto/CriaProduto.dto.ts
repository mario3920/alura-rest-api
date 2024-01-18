import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';
import {
  IsString,
  IsArray,
  IsDateString,
  MinLength,
  IsNotEmpty,
  ValidateNested,
  IsPositive,
  IsNumber,
  IsDecimal,
  IsUUID,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: 'código do produto não informado' })
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;
  produtoId: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  valor: number;

  @IsNotEmpty()
  @IsPositive()
  quantidade: number;

  @IsNotEmpty()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsDateString()
  @IsNotEmpty()
  dataCriacao: Date;

  @IsDateString()
  @IsNotEmpty()
  dataAtualizacao: Date;
}
