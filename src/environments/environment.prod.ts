/**
 * Configuración del entorno de producción.
 * Configura los valores reales antes de desplegar.
 */
export const environment = {
  production: true,
  firebase: {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_PROYECTO.firebaseapp.com',
    projectId: 'TU_PROYECTO_ID',
    storageBucket: 'TU_PROYECTO.appspot.com',
    messagingSenderId: 'TU_SENDER_ID',
    appId: 'TU_APP_ID',
  },
};
