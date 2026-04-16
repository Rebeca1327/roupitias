import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit, OnDestroy {
  slides = [
    {
      url: '/assets/banner.png',
      titulo: 'Menos é mais  O essencial é ter estilo',
      texto: 'Pra quem vive a elegância sem esforço!'
    },
    {
      url: '/assets/banner3.jpg',
      titulo: 'Atemporal Essencial Você!',
      texto: 'Onde a moda encontra seu ritmo'
    },
    {
      url: '/assets/bannerzin2.jpg',
      titulo: 'Estilo que fala antes das palavras',
      texto: 'A expressão do seu agora!'
    },
    {
      url: '/assets/bannerzin3.jpg',
      titulo: 'Pra quem vive a moda, não a segue.',
      texto: 'Feita para quem ama conforto e simplicidade.'
    }
  ];
  currentIndex: number = 0;
  private intervalId: any;
  animating: boolean = false;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.animateTransition(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    });
  }

  prevSlide() {
    this.animateTransition(() => {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    });
  }

  goToSlide(index: number) {
    if (index !== this.currentIndex) {
      this.animateTransition(() => {
        this.currentIndex = index;
      });
    }
  }

  private animateTransition(changeIndex: () => void) {
    this.animating = true;
    setTimeout(() => {
      changeIndex();
      this.animating = false;
    }, 300);
  }

  private startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  private stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private resetTimer() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  onMouseEnter() {
    this.stopAutoSlide();
  }

  onMouseLeave() {
    this.startAutoSlide();
  }
}

