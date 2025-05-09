# CasePractice

Este es un proyecto de Angular (versión 16.2.16) con la Ui de Angular Material que implementa un acortador de URLs. La aplicación permite a los usuarios ingresar URLs largas y obtener versiones acortadas, guardarlas localmente, y realizar un seguimiento de las veces que se han visitado.

## Características principales:

1. **Formulario de acortamiento de URLs**: Permite a los usuarios ingresar URLs para acortarlas
2. **Lista de URLs acortadas**: Muestra las URLs que el usuario ha acortado previamente
3. **Seguimiento de visitas**: Lleva cuenta de cuántas veces se ha visitado cada URL acortada
4. **Almacenamiento local**: Guarda las URLs acortadas en el almacenamiento local del navegador

## Arquitectura:

- **Módulos**: Estructura organizada con módulos separados para las diferentes funcionalidades
- **Componentes**: Interfaz de usuario modular con componentes para formulario y lista
- **Servicios**: Separación de lógica de negocio para acortamiento y almacenamiento de URLs

## API utilizada:

Es importante destacar que, a pesar de existir la API sugerida en el sitio [https://rapidapi.com](https://rapidapi.com/Walter678/api/shorturl9) para el caso elegido, no fue posible utilizarla. En su lugar, el proyecto implementa la comunicación con una API externa alojada en https://short-url-9b4i.onrender.com/ que proporciona el servicio de acortamiento de URLs.

Esto se puede verificar en el servicio `UrlShortService` donde se configura la URL base de la API:

```tsx
private apiUrl: string = '<https://short-url-9b4i.onrender.com>';
private shortUrlBase: string = '<https://short-url-9b4i.onrender.com/s/>';

```

El servicio realiza solicitudes POST al endpoint `/shorten` de esta API para acortar las URLs proporcionadas por el usuario. Las URLs acortadas tienen el formato `https://short-url-9b4i.onrender.com/s/{código-corto}`.

## Flujo de la aplicación:

1. El usuario ingresa una URL en el formulario
2. La aplicación valida la URL (debe comenzar con http:// o https://)
3. Se envía la URL original a la API externa
4. La API devuelve una versión acortada de la URL
5. La aplicación guarda la URL original y acortada en el almacenamiento local
6. La lista de URLs acortadas se actualiza automáticamente
7. El usuario puede copiar, visitar o eliminar las URLs acortadas de la lista



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
