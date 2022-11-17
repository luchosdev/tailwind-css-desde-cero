CLASE 1.1
QUE ES TAILWIND CSS.

Es un Framework de CSS.
Está basado en clases de utilidad, y no en componentes.

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

CLASE 1.4.
INSTALACIÓN COMO PLUGIN POSTCSS.

En este caso, usamos un proyecto nuevo, con el mismo contenido de HTML sin los scripts de Tailwind anteriores.

En la página de Tailwind CSS vamos a la pestaña "Using PostCSS", y seguimos las instrucciones de instalación tal cual como el de Tailwind CLI.

Algunas adiciones es crear el archivo postcss.config.js donde insertaremos el código
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}

Luego, creamos una carpeta, en este caso llamada CSS, dentro un archivo llamado main.css, y escribimos:
@tailwind base;
@tailwind components;
@tailwind utilities;

Antes de continuar, debemos instalar PostCss ya que este proyecto lo estamos construyendo desde cero, entonces escribimos en la terminal:
npm install postcss-cli
En caso de usar herramientas como Next.js o Laravel generalmente ya viene instalado este paquete.

Agregamos en el archivo package.json el siguiente código:
  "scripts": {
    "dev": "postcss css/main.css -o public/styles.css"
Para que así compile los estilos correctamente al escribir el comando:
npm run dev

Ahí se creará el archivo styles.css en la carpeta "public" y en el archivo HTML agregamos el la siguiente etiqueta:
<link rel="stylesheet" href="./styles.css">
donde ya nos debería visualizar los estilos en el navegador.

CLASE 1.5.
INICIANDO EL PROYECTO CON VITE.

Vite es un manejador de ASSETS, un compilador.

En la página de Tailwind CSS, en la pestaña "Framework Guides" podemos ver una lista de Frameworks y nos enseña como hacer la instalación según cada uno, pero en nuestro caso, no usaremos ninguno debido a que sólo utilizaremos archivos HTML plano, y la instalación será personalizada.

Comenzamos escribiendo en la terminal:
npm init -y
donde se creará el archivo package.json con la configuración por defecto, ahí dentro le borramos la línea del script "test" y agregamos:
    "dev": "vite"

En la terminal escribimos:
npm install -D tailwindcss postcss autoprefixer vite
aquí se instalarán las dependencias como DEV

npx tailwindcss init -p
con este comando crearemos los archivos postcss.config.js y tailwind.config.js

Creamos la ruta css/tailwind.css
ahí agregamos las siguientes líneas:
@tailwind base;
@tailwind components;
@tailwind utilities;

En el archivo tailwind.config.js específicamos de donde queremos que compile los estilos:
  content: [
    './*.html'

En el archivo HTML agregamos:
    <link rel="stylesheet" href="./css/tailwind.css">
Aquí VITE se encargará de hacer el compilado necesario.

Desde ahora podemos notar que al momento de ejecutar "npm run dev" se creará un servidor y veremos en tiempo real los cambios realizados por en el archivo html.

CLASE 1.6.
INTEGRACIÓN CON VISUAL STUDIO CODE.

Para ayudarnos al momento de maquetar con TailwindCSS, existe una extensión en VSC que permite detectar las utilities styles y así en caso de olvidarnos de alguna clase simplemente escribimos un poco del código y nos irá dando sugerencias de estilos.

El plugin se llama: Tailwind CSS IntelliSense.

CLASE 2.1.
FLUJO DE TRABAJO BÁSICO CON UTILITIES CLASSES.

Aquí vemos cómo trabajar tanto con CSS tradicional como con TailwindCSS, y vemos que en caso de que no sepamos cómo se llama alguna de las clases en Tailwind, iremos directamente a su página web y escribimos en el buscador el nombre del estilo en CSS y nos mostrará una lista de cómo se escribe en Tailwind.

CLASE 2.2.
AÑADIR ESTILOS BÁSICOS GLOBALES A TODO EL PROYECTO.

Un ejemplo de un estilo global sería:
    body {
        padding-left: 25%;
        padding-right: 25%;
        padding-top: 50px;
    }

Pero estos estilos no deben estar en el archivo HTML, ya que sino tocaría agregarlo en cada archivo, entonces, para que se mantenga en cada archivo podemos agregarlo en tailwind.css ya que ahí se encargará de agregarlo en todos los demás archivos HTML.

Ahora, si deseamos seguir usando el estilo tipo Tailwind, podemos agregar en ese mismo archivo: "@apply", y seguido escribimos las clases tal cual se haría en el documento html, por ejemplo:
@apply bg-gray-500 pt-10

Ahora, Tailwind no acepta por defecto porcentajes en sus estilos, pero podemos "extender" las capacidades de Tailwind, para eso, vamos a la documentación de Tailwind, y buscamos en este caso Padding, y buscamos la sección "Customizing your theme", donde encontraremos que es el archivo tailwind.config.js configuramos de la siguiente manera:
module.exports = {
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
      }
    }
  }
}
donde el primer '5px' puede ser el nombre que queramos identificar y el segundo '5px' será el valor agregado, por ejemplo:
module.exports = {
  theme: {
    extend: {
      spacing: {
        'quarter': '25%',
      }
    }
  }
}
ahora, podemos llamar esta nueva propiedad como en el siguiente ejemplo: pl-quarter pr-quarter, donde sería lo mismo que colocar: padding-left: 25%; y, padding-right: 25%;
Y si queremos saber a qué otras propiedades se le puede aplicar, simplemente escribimos "quarter" y nos saldrá el listado de las propiedades de espaciados con las que se puede utilizar.

CLASE 2.3.
EXTRAER ELEMENTOS COMUNES A COMPONENTES I.

Cuando tenemos elementos pequeños que se repiten, por ejemplo un botón, es normal que se repita el mismo estilo para todos, en ese caso, podemos ir al archivo tailwind.css y crear una clase donde agrupe los estilos, por ejemplo:
.btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded
}
Así, solo colocamos la clase btn-primary en cada botón y no escribiremos el mismo código una y otra vez.

Ahora, también debemos indicarle a Tailwind en qué capa queremos que se compile, en este caso en "components", de la siguiente forma:
@layer components{
    .btn-primary {
        @apply bg-blue-600 text-white px-4 py-2 rounded
    }
}
Esto es para tener un orden y evitar que tal vez en un futuro sobreescribamos accidentalmente el estilo de otro layer.
Esto sirve cuando son elementos pequeños como el botón, pero en el caso de todo el panel, hay dos opciones, ya sea si trabajamos con un framework como React o no.

En el caso que no trabajemos con una herramienta externa como React, podemos continuar creando clases como el del botón.

CLASE 2.4.
EXTRAER ELEMENTOS COMUNES A COMPONENTES II.

En el caso que usemos un framework como React, Laravel o Vue, se tiene otra forma.
Para el ejemplo usaremos VUE, desde su documentación oficial en la V2, buscamos su script del CDN
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
Lo insertamos en el HEAD y antes del terminar el body agregamos otro script y adentro escribimos
(ver index.html)

Ahora, para mejorar aún la escructura y no repetir código, creamos un archivo Js aparte donde insertaremos el Vue.component y el New Vue., luego llamamos ese archivo en un script al final del body.

Para finalizar, vamos al archivo tailwind.config.js y agregamos en "content":
'./js/*.js'
para que así, al momento de modificar algo en los archivos Js de esa carpeta Tailwind los pueda escuchar y compilar.

CLASE 2.5.
PERSONALIZANDO FUENTES Y COLORES.

Ya aquí empezamos a trabajar con el proyecto que es hacer un clone de la web DigitalOcean.
Comenzamos con inspeccionar los elementos buscando las fuentes en cada tamaño de párrafo de la página y al saber cuáles son los buscamos en GoogleFonts. Una de ellas hay que descargarla desde un repositorio de GitHub, y el archivo principail "ttf" lo copiamos en una nueva carpeta llamada "fonts"; luego, en el archivo tailwind.css lo importamos con:
@font-face {
  font-family: "CascadiaCode";
  src: url('./fonts/CascadiaCode.ttf');

Y en el archivo tailwind.config.js escribimos en "extends":
  fontFamily: {
        'sans': "'Work Sans', sans-serif", //aquí estamos reemplazando la fuente por defecto de Tailwind.
        'cascadia': '"CascadiaCode"',
      },

Ahora seguiremos con los colores, buscando cada color que encontremos, por ejemplo el del encabezado, el cual es #080c2d; vamos nuevamente al archivo tailwind.config.js y extendemos:
colors: {
  'do-blue-dark': '#080c2d',
  'do-blue-medium': 'rgb(20, 86, 255)',
  'do-blue-light': 'rgb(0, 105, 255)',
}

CLASE 3.1.
BARRA DE NAVEGACION I.

Empezammos a maquetar la estructura dando tamaño, color y espaciados correspondientes.

CLASE 3.2.
BARRA DE NAVEGACION II.

Igual que el anterior.

CLASE 3.3.
HOVER, FOCUS Y ACTIVE EN LOS ELEMENTOS.

CLASE 3.4.
CUERPO DEL SITIO.


