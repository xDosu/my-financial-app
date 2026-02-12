import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Button],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly hasError = computed(() => !!this.error());

  protected async onGoogleLogin(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);

    try {
      await this.authService.loginWithGoogle();
      await this.router.navigate(['/']);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
      this.error.set(message);
    } finally {
      this.loading.set(false);
    }
  }
}
