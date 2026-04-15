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
      titulo: 'Menos é mais O essencial é ter estilo',
      texto: 'pra quem vive a elegância sem esforço!'
    },
    {
      url: '/assets/banner3.jpg',
      titulo: 'Novo Banner 3',
      texto: 'Texto personalizado para o terceiro banner.'
    },
    {
      url: '/assets/bannerzin2.jpg',
      titulo: 'Bannerzin 2',
      texto: 'Descrição para o bannerzin 2.'
    },
    {
      url: '/assets/bannerzin3.jpg',
      titulo: 'Bannerzin 3',
      texto: 'Descrição para o bannerzin 3.'
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

