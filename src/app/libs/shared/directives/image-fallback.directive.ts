import { Directive, Input, inject, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]',
  standalone: true
})
export class ImageFallbackDirective {
  #elementRef = inject(ElementRef);
  #renderer = inject(Renderer2);

  @Input('appImgFallback') itemName = '';

  @HostListener('error')
  onError() {
    const img = this.#elementRef.nativeElement;
    const parent = img.parentElement;

    if (parent) {
      const gradient = this.#generateGradient(this.itemName || 'default');

      this.#renderer.setStyle(img, 'display', 'none');
      this.#renderer.setStyle(parent, 'background', gradient);

      const textNode = this.#renderer.createElement('span');
      const initial = this.itemName.charAt(0).toUpperCase();
      const text = this.#renderer.createText(initial);

      this.#renderer.appendChild(textNode, text);
      this.#renderer.setStyle(textNode, 'font-size', '4rem');
      this.#renderer.appendChild(parent, textNode);
    }
  }

  #generateGradient(name: string): string {
    let hash = 0;

    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 40) % 360;

    return `linear-gradient(135deg, hsl(${h1}, 65%, 65%), hsl(${h2}, 75%, 55%))`;
  }
}
