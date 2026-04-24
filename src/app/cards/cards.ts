import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

  @ViewChild('carouselNovidades', { static: false }) carouselNovidades!: ElementRef;
  @ViewChild('carouselMasculino', { static: false }) carouselMasculino!: ElementRef;

  // ❤️ FAVORITOS
  favoritos: Produto[] = [];

  toggleFavorito(produto: Produto): void {
    const index = this.favoritos.findIndex(p => p.nome === produto.nome);

    if (index === -1) {
      this.favoritos.push(produto);
    } else {
      this.favoritos.splice(index, 1);
    }
  }

  isFavorito(produto: Produto): boolean {
    return this.favoritos.some(p => p.nome === produto.nome);
  }

  // 🛍️ PRODUTOS
  produtos: Produto[] = [
    {
      nome: 'Casual Contrast',
      preco: 189.90,
      imagem: 'assets/roupa 1.webp',
      descricao: 'Look moderno com contraste leve e elegante',
    },
    {
      nome: 'Ivory Layering',
      preco: 199.90,
      imagem: 'assets/roupa 2.webp',
      descricao: 'Camadas sofisticadas em tons claros',
    },
    {
      nome: 'Sage Serenity',
      preco: 179.90,
      imagem: 'assets/roupa 3.webp',
      descricao: 'Vestido fluido com toque natural e leve',
    },
    {
      nome: 'Pale Sun Mini',
      preco: 169.90,
      imagem: 'assets/roupa 4.webp',
      descricao: 'Visual clean com ar moderno e delicado',
    },
    {
      nome: 'Golden Sands Maxi',
      preco: 229.90,
      imagem: 'assets/roupa 5.webp',
      descricao: 'Vestido leve em tons terrosos elegantes',
    },
    {
      nome: 'Coastal Stripes',
      preco: 209.90,
      imagem: 'assets/roupa 6.webp',
      descricao: 'Estilo casual com inspiração náutica',
    },
    {
      nome: 'Mocha Arlequim',
      preco: 289.90,
      imagem: 'assets/roupa 7.jpg',
      descricao: 'Conjunto moderno com tons quentes e sofisticados',
    },
    {
      nome: 'Olive & Denim',
      preco: 179.90,
      imagem: 'assets/roupa 8.jpg',
      descricao: 'Combinação versátil para o dia a dia',
    },
  ];

  produtosMasculinos: Produto[] = [
    {
      nome: 'Relaxed Earth',
      preco: 199.90,
      imagem: 'assets/roupa h1.webp',
      descricao: 'Look leve em tons terrosos com caimento solto',
    },
    {
      nome: 'Linen Layering',
      preco: 229.90,
      imagem: 'assets/roupa h2.webp',
      descricao: 'Camadas em linho com estilo moderno e natural',
    },
    {
      nome: 'Autumn Sand',
      preco: 219.90,
      imagem: 'assets/roupa h3.webp',
      descricao: 'Visual confortável com tons quentes e elegantes',
    },
    {
      nome: 'Soft Slate',
      preco: 169.90,
      imagem: 'assets/roupa h4.webp',
      descricao: 'Look clean com cores suaves e sofisticadas',
    },
    {
      nome: 'Olive Field',
      preco: 239.90,
      imagem: 'assets/roupa h5.webp',
      descricao: 'Estilo utilitário com tons verdes naturais',
    },
    {
      nome: 'Terracotta & Night',
      preco: 219.90,
      imagem: 'assets/roupa h6.webp',
      descricao: 'Combinação moderna com contraste terroso',
    },
    {
      nome: 'Moss Polo',
      preco: 179.90,
      imagem: 'assets/roupa h7.webp',
      descricao: 'Clássico minimalista com toque natural',
    },
    {
      nome: 'Vintage Forest',
      preco: 229.90,
      imagem: 'assets/roupa h8.webp',
      descricao: 'Texturas elegantes com estilo sofisticado',
    },
  ];

  // 🛒 COMPRA
  comprar(produto: Produto): void {
    alert(`"${produto.nome}" adicionado ao carrinho!`);
  }

  // ⬅️➡️ CARROSSEL
  scrollLeft(carousel: string): void {
    const element =
      carousel === 'novidades'
        ? this.carouselNovidades
        : this.carouselMasculino;

    element?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(carousel: string): void {
    const element =
      carousel === 'novidades'
        ? this.carouselNovidades
        : this.carouselMasculino;

    element?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}