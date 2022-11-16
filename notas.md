CLASE 1.1
QUE ES TAILWIND CSS.

Es un Framework de CSS.
Está basado en clases de utilidad, y no es componentes.

Ventajas: 
    Personalización fácil y rápida.

Inconvenientes: El HTML se llena de mucho texto, y aparentemente se duplica el código.

CLASE 1.2.
INSTALACION USANDO UN CDN.

Creamos un documento HTML, y dentro de la etiqueta <head> insertamos el siguiente código:
<script src="https://cdn.tailwindcss.com"></script>
Entonces, automáticamente notamos que pierden los estilos que tenía el texto, ya que Tailwind utiliza una librería llamada "normalize", que con otras bases de Tailwind quitan las inconsistencias que puedan haber en el navegador.

Hay ciertas desventajas de usar CDN, una de ellas es que no debemos usarla para producción, ya que no podemos personalizar algunos aspectos de Tailwind y otra es que el archivo HTML suele ser bastante grande.

Podemos usarlo cuando queremos hacer maquetación rápida y no necesitamos inicializar un proyecto.

CLASE 1.3.
INSTALACIÓN USANDO TAILWIND CLI.

Vamos a la página oficial, en la pestaña "Tailwind CLI", y antes de empezar la instalación debemos tener ya instalado Node.js para ejecutar los comandos.

El primer comando es:
npm install -D tailwindcss
Con este se crean los archivos package-lock.json y package.json

El segundo comando es:
npx tailwindcss init
Con este se crea el archivo tailwind.config.js el cual es de configuración.

Luego debemos indicar en el archivo tailwind.config.js de dónde compilaremos las utilities clases de Tailwind, en este caso escribimos './*.html' en el "content" para indicar que de cualquier archivo HTML.

Luego crear la ruta: "src/tailwind.css" para dentro del archivo insertar el código:
@tailwind base;
@tailwind components;
@tailwind utilities;

Luego en la terminal, escribimos el código:
npx tailwindcss -i ./src/tailwind.css -o ./dist/styles.css
Y creará la carpeta "dist" donde compilará todas las clases que encuentre en los archivos HTML que encuentre.

Agregamos en el archivo HTML:
<link rel="stylesheet" href="./dist/styles.css">
y ahí debería regresar los estilos que teniamos previamente.

Ahora, algo a tomar en cuenta es que si cambiamos algunas de las clases no podremos ver los cambios automáticamente, ya que necesitamos nuevamente compilar los estilos con el comando:
npx tailwindcss -i ./src/tailwind.css -o ./dist/styles.css
y ahí recién veremos los cambios realizados.

Una ventaja de esto es que el archivo "styles.css" sólo tendrá los estilos que se le indique minimizando su tamaño.

Puede ser tedioso estar escribiendo el comando cada rato, pero se puede solucionar haciendo que el archivo "escuche" cada cambio realizado en el documento HTML, el comando flag que se adiciona es:
--watch
quedando todo el comando
npx tailwindcss -i ./src/tailwind.css -o ./dist/styles.css --watch