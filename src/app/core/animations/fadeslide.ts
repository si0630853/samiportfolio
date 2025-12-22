import { trigger, transition, style, animate } from '@angular/animations';


export const fadeSlide = trigger('fadeSlide', [
transition(':enter', [
style({ opacity: 0, transform: 'translateY(30px)' }),
animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
])
]);