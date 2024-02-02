import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core'

@Directive({
  selector: '[appClassOnHover]',
  standalone: true,
})
export class ClassDirective {
  readonly #elementRef = inject(ElementRef)
  readonly #renderer = inject(Renderer2)

  @HostListener('mouseenter')
  whenMouseEnter(): void {
    const childrenElements = this.#elementRef.nativeElement.querySelectorAll('[classOnHoverName]')
    childrenElements.forEach((child: Element) => {
      const className = child.getAttribute('classOnHoverName')
      if (className) {
        this.#renderer.addClass(child, className)
      }
    })
  }

  @HostListener('mouseleave')
  whenMouseLeave(): void {
    const childrenElements = this.#elementRef.nativeElement.querySelectorAll('[classOnHoverName]')
    childrenElements.forEach((child: Element) => {
      const className = child.getAttribute('classOnHoverName')
      if (className) {
        this.#renderer.removeClass(child, className)
      }
    })
  }
  
}
