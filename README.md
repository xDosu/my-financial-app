# My Financial App

Aplicación web para gestionar finanzas personales, construida con Angular 21, PrimeNG, TailwindCSS y Firebase.

## Stack Tecnológico

- **Angular 21+** – Standalone Components, Signals, Zoneless
- **PrimeNG** – UI Kit para componentes interactivos
- **TailwindCSS** – Layout y estilos utilitarios
- **Firebase** – Firestore (datos), Authentication (usuarios)

## Requisitos

- Node.js 20+
- npm 11+

## Instalación

```bash
npm install
```

## Configuración de Firebase

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Habilita **Authentication** (método Email/Password o el que prefieras)
3. Crea una base de datos **Firestore**
4. Copia la configuración de tu app web en **Configuración del proyecto → Tus apps**
5. Edita `src/environments/environment.ts` y reemplaza los valores:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_PROYECTO.firebaseapp.com',
    projectId: 'TU_PROYECTO_ID',
    storageBucket: 'TU_PROYECTO.appspot.com',
    messagingSenderId: 'TU_SENDER_ID',
    appId: 'TU_APP_ID',
  },
};
```

## Ejecutar en desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Build para producción

```bash
npm run build
```

Los archivos se generan en `dist/my-financial-app/`

## Estructura del proyecto

```
src/
├── app/
│   ├── app.config.ts      # Configuración de la app (Firebase, PrimeNG, rutas)
│   ├── app.ts             # Componente raíz
│   └── app.routes.ts      # Rutas
├── environments/
│   ├── environment.ts     # Config desarrollo
│   └── environment.prod.ts # Config producción
├── styles.scss            # Estilos globales + PrimeIcons
└── tailwind.css           # Tailwind v4
```

## Próximos pasos

- [ ] Autenticación con Firebase Auth
- [ ] Guards para rutas protegidas
- [ ] Servicios para Firestore (colecciones de ingresos/gastos)
- [ ] Diseño del modelo de datos NoSQL
- [ ] Reglas de seguridad de Firestore
