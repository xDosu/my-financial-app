import { Injectable, inject } from '@angular/core';
import { Auth, authState, signInWithPopup, signOut, GoogleAuthProvider } from '@angular/fire/auth';
import { Observable } from 'rxjs';

/**
 * Servicio que encapsula la lógica de autenticación con Firebase.
 * Usa el SDK modular (tree-shakable) de AngularFire.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);

  /** Observable del estado de autenticación (null = no logueado) */
  readonly user$ = authState(this.auth) as Observable<import('firebase/auth').User | null>;

  /** Inicia sesión con Google mediante popup */
  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  /** Cierra la sesión actual */
  async logout(): Promise<void> {
    await signOut(this.auth);
  }
}
