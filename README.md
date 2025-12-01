# AgroVetsApp

Pequeña plantilla/seed de una app React Native (Expo) para AgroVets.

## Estructura principal

- `App.tsx` — entrada de la app (monta `src/navigation/AppNavigator`).
- `src/navigation` — navegadores (`AppNavigator`, `StackNavigator`, `TabNavigator`, `DrawerNavigator`, `types`).
- `src/screens` — pantallas (`Home`, `Profile`, `Settings`).
- `src/components` — componentes UI y comunes.
- `src/hooks`, `src/contexts`, `src/services`, `src/utils`, `src/theme` — utilidades y estructura.

## Requisitos

- Node.js (16+ recomendado)
- npm (o yarn)
- Expo CLI (opcional, pero recomendado para esta plantilla)

## Instalación (rápida)

Abre PowerShell en la raíz del proyecto y ejecuta:

```pwsh
npm install
```

## Dependencias de navegación (recomendadas)

Para usar la navegación real (ya hay código preparado), instala `react-navigation` y sus dependencias. Con Expo es preferible usar `expo install` para asegurar compatibilidad de versiones:

```pwsh
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler
npm install @react-navigation/native-stack @react-navigation/bottom-tabs
```

Después de instalar, limpia la caché de Metro/Expo:

```pwsh
expo start -c
# o alternativamente
npm start -- --reset-cache
```

Si hay problemas con instalaciones corruptas, elimina `node_modules` y `package-lock.json` y reinstala:

```pwsh
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

## Notas importantes de integración

- Para que `react-native-gesture-handler` funcione correctamente en Expo, envuelve la app con `GestureHandlerRootView` o sigue la guía oficial. Ejemplo mínimo en `App.tsx`:

```tsx
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
}
```

- Para mejor rendimiento y compatibilidad, activa `react-native-screens` (opcional):

```tsx
import { enableScreens } from 'react-native-screens';
enableScreens();
```

- Si vas a usar iconos en las pestañas instala `@expo/vector-icons`:

```pwsh
npx expo install @expo/vector-icons
```

## Comandos útiles

```pwsh
# Inicia Metro / Expo
npm start
# Ejecuta en Android (con dispositivo o emulador conectado)
npm run android
# Ejecuta en iOS (macOS con Xcode)
npm run ios
# Levanta web
npm run web
```

## Dónde empezar a trabajar

- `src/navigation/TabNavigator.tsx` y `src/navigation/StackNavigator.tsx` ya están preparados para usar `react-navigation`.
- Las pantallas iniciales están en `src/screens/*`.
- Añade providers (contexts) en `src/contexts` y envuélvelos en `App.tsx` si necesitas estado global.

## Siguientes pasos sugeridos

- Integrar íconos en las pestañas y personalizar estilos.
- Añadir autenticación y rutas protegidas (stack/drawer).
- Crear componentes comunes reusables dentro de `src/components`.

Si quieres, puedo:
- Modificar `App.tsx` para envolver la app con `GestureHandlerRootView` y `enableScreens()` listo para usar, o
- Ejecutar los cambios necesarios para añadir iconos y Drawer.

¡Dime qué prefieres y lo hago! 
