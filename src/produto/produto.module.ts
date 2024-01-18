import { Module } from '@nestjs/common';
import { ProdutoController } from 'src/produto/produto.controller';
import { ProdutoRepository } from 'src/produto/produto.repository';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
