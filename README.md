# t3_act5_react

## Mini aplicación React con Vite

Este proyecto fue realizado con **React + Vite** como parte de la actividad 5.  
La aplicación es una mini práctica donde se utilizan componentes, props, estado con `useState` y una lista renderizada dinámicamente con `.map()`.

## Descripción del proyecto

La mini aplicación muestra una estructura sencilla con varios componentes:

- Un componente funcional simple.
- Un componente que recibe datos mediante props.
- Un componente que usa estado con `useState`.
- Una lista de tareas renderizada dinámicamente usando `.map()`.

El objetivo principal fue practicar la creación de componentes en React y entender cómo se organiza una aplicación básica usando Vite.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS
- GitHub Pages

## Componentes principales

### TodoApp.jsx

Este componente funciona como un componente funcional simple. Sirve para mostrar una sección básica dentro de la aplicación.

### Perfil.jsx

Este componente recibe información mediante props, como el nombre, la materia y el grupo. Con esto se demuestra cómo un componente puede recibir datos desde otro componente.

### Contador.jsx

Este componente utiliza `useState` para cambiar un valor en pantalla. En este caso se usa para aumentar o reiniciar el número de tareas completadas.

### ListaTareas.jsx

Este componente contiene un arreglo de tareas y las muestra en pantalla usando `.map()`. Esto permite renderizar una lista de elementos de forma dinámica.

---

# Preguntas de la actividad

## a) ¿Qué diferencia hay entre props y state en React?

La diferencia principal es que las **props** son datos que un componente recibe desde otro componente, mientras que el **state** es información que pertenece al propio componente y puede cambiar durante la ejecución de la aplicación.

Las props son como valores que se mandan desde afuera. Por ejemplo, en mi proyecto el componente `Perfil` recibe datos como el nombre, la materia y el grupo. En cambio, el state se usa cuando algo debe cambiar en pantalla, como el contador de tareas completadas. Las props no se modifican directamente dentro del componente que las recibe, pero el state sí puede actualizarse usando funciones como `setContador`.

## b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

Es importante usar una `key` porque React necesita identificar cada elemento de una lista de forma única. Cuando se usa `.map()` para mostrar varios elementos, la `key` ayuda a React a saber qué elemento cambió, cuál se agregó o cuál se eliminó.

Si no se usa una key, React puede mostrar advertencias o tener problemas al actualizar la interfaz. En mi mini aplicación se usa una key al mostrar las tareas de la lista, para que cada elemento tenga una identificación dentro del renderizado.

## c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

La función `useState` sirve para manejar información que puede cambiar dentro de un componente. En otras palabras, permite guardar un valor y actualizarlo cuando ocurre alguna acción, como presionar un botón.

En mi mini aplicación usé `useState` en el componente `Contador.jsx`. Ahí se creó un contador de tareas completadas. Cuando el usuario presiona el botón **Sumar tarea**, el número aumenta en pantalla. También agregué un botón para reiniciar el contador a cero. Esto demuestra cómo React actualiza la interfaz automáticamente cuando cambia el estado.

Ejemplo usado:

```jsx
const [contador, setContador] = useState(0);
```

## d) Enlace del repositorio de GitHub

Repositorio:

```txt
https://github.com/EdsaiGarrey/t3_act5_react
```

## e) Enlace del proyecto desplegado en GitHub Pages

GitHub Pages:

```txt
https://edsaigarrey.github.io/t3_act5_react/
```

Link alternativo en caso de caché del navegador:

```txt
https://edsaigarrey.github.io/t3_act5_react/?v=5
```

---

## Despliegue en GitHub Pages

Para desplegar el proyecto se instaló el paquete `gh-pages`:

```bash
npm install gh-pages --save-dev
```

En el archivo `vite.config.js` se configuró la propiedad `base` con el nombre del repositorio:

```js
base: "/t3_act5_react/"
```

En `package.json` se agregaron los scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Finalmente, se publicó con el comando:

```bash
npm run deploy
```

---

## Conclusión

Con esta actividad practiqué los conceptos básicos de React usando Vite. Aprendí a crear componentes, enviar información con props, manejar cambios con `useState` y renderizar listas dinámicamente usando `.map()`. También aprendí que para publicar un proyecto de React en GitHub Pages se necesita hacer un build y configurar correctamente el archivo `vite.config.js`.
