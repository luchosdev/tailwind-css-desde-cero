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

CLASE 3.4--4.5.
CUERPO DEL SITIO

CLASE 5.1.
MENÚ ESTÁTICO.

CLASE 5.2.
MENÚS DESPLEGABLES.


<header class="sticky top-0 z-10">
        <!-- Navbar 1 -->
        <div class=" bg-do-blue-dark2 text-gray-300 py-2 text-sm font-semibold">
            <div class="container mx-auto flex justify-between">
                <a class="flex items-center text-center cursor-pointer">
                    Our Sydney data center is here! Learn about our new, state-of-the-art data center in Australia ->
                </a>
                <div class="hidden lg:flex gap-x-4 items-center">
                    <a href="" class="hover:text-white">We're Hiring</a>
                    <a href="" class="hover:text-white">Blog</a>
                    <a href="" class="hover:text-white">Docs</a>
                    <a href="" class="hover:text-white">Get Support</a>
                    <a href="" class="hover:text-white">Sales</a>
                </div>
            </div>
        </div>

        <!-- Navbar 2 -->
            <!-- Mobile -->
        <div class="container lg:hidden flex justify-between items-center mx-auto py-5 shadow-md relative bg-do-white text-do-blue-mediumdark2">
            <div>
                <img src="https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg" alt="DigitalOceanPicture">
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>

            <!-- Desktop -->
        <div class="hidden lg:block shadow-md relative bg-do-white">
            <div class="container flex justify-between items-center mx-auto py-5 text-do-blue-mediumdark2">
                <div class="flex items-center gap-x-6 font-medium">
                    <a href="">
                        <img src="https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg" alt="DigitalOceanPicture">
                    </a>
                    <div class="flex items-center cursor-pointer" onClick='show()'>
                        <a href="" class="mr-2">Products</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <a href="" class="mr-2">Solutions</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <a href="">Marketplace</a>
                    <div class="flex items-center cursor-pointer">
                        <a href="" class="mr-2">Community</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <a href="">Pricing</a>
                </div>
                <div>
                    <a href="" class="hover:bg-gray-200 px-5 py-3 rounded-lg font-medium focus:outline-dotted focus:outline-1 focus:bg-sky-100">Log In</a>
                    <a href="" class="px-5 py-3 rounded-lg bg-do-blue-light hover:bg-do-blue-medium active:bg-do-blue-mediumdark active:text-sky-400 text-white font-bold">Sign Up</a>
                </div>
            </div>
        </div>

        <!-- Products Bar -->
        <div class="bg-white px-3 pt-4 content-start hidden">
            <div class="flex">
                <div class="pr-12 1/3">
                    <p class="ml-2 mb-2 text-sm font-bold text-do-blue-dark uppercase tracking-wider">
                        Featured Products
                    </p>
                    <ul class="flex flex-col">
                        <li class="group hover:bg-sky-200 rounded-2xl p-1">
                            <a class="flex flex-col p-1 rounded-2xl" href="/products/droplets">
                                <span class="text-lg font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">Droplets</span>
                                <span class="text-do-gray-medium">Scalable virtual machines</span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl p-1">
                            <a class="flex flex-col p-1 rounded-2xl" href="/products/kubernetes">
                                <span class="text-lg font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">Kubernetes</span>
                                <span class="text-do-gray-medium">Managed Kubernetes clusters</span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl p-1">
                            <a class="flex flex-col p-1 rounded-2xl" href="/products/cloudways">
                                <span class="text-lg font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">Cloudways</span>
                                <span class="text-do-gray-medium">Managed cloud hosting</span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl p-1">
                            <a class="flex flex-col p-1 rounded-2xl" href="/products/app-platform">
                                <span class="text-lg font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">App Platform</span>
                                <span class="text-do-gray-medium">Get apps to market faster</span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl p-1">
                            <a class="flex flex-col p-1 rounded-2xl" href="/products/managed-databases">
                                <span class="text-lg font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">Databases</span>
                                <span class="text-do-gray-medium">Worry-free setup &amp; maintenance</span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl p-1">
                            <a class="flex flex-col p-1 rounded-2xl" href="/products/spaces">
                                <span class="text-lg font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">Spaces</span>
                                <span class="text-do-gray-medium">Simple object storage</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="grid 2/3 content-start grow grid-cols-3 mx-12 pb-10">
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">Compute</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/droplets">Droplets</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/kubernetes">Kubernetes</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">App Platform</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/functions">Functions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">Cloud Website Hosting</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Cloudways</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">Storage</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/spaces">Spaces Object Storage</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/block-storage">Volumes Block Storage</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">Networking</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/vpc">Virtual Private Cloud (VPC)</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloud-firewalls">Cloud Firewalls</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/load-balancer">Load Balancers</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="https://www.digitalocean.com/docs/networking/dns/">DNS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">Managed Databases</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/managed-databases-mongodb">MongoDB</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/managed-databases-mysql">MySQL</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/managed-databases-postgresql">PostgreSQL</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/managed-databases-redis">Redis™</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">Developer Tools</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="https://docs.digitalocean.com/reference/api/">API</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/tools-and-integrations#tools-and-integrations-cli">CLI</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/support">Support Plans</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/monitoring">Monitoring</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/uptime-monitoring">Uptime</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a class="group flex justify-center items-center py-4 border-t border-t-gray-200 font-jetbrains font-semibold cursor-pointer hover:text-do-blue-medium text-do-blue-light" href="">
                See all products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </a>
        </div>

        <!-- Solutions Bar -->
        <div class="bg-white pt-8 content-start hidden" >
            <div class="flex 1/3 px-10">
                <div class="pr-10 flex flex-col gap-2">
                    <p class="ml-1 mb-8 text-sm font-bold text-do-blue-dark uppercase tracking-wider">
                        OUR BUSINESS SOLUTIONS
                    </p>
                    <ul class="flex flex-col gap-6">
                        <li class="group hover:bg-sky-200 rounded-2xl">
                            <a class="flex flex-col p-4" href="/products/droplets">
                                <span class="text-xl font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">Website Hosting</span>
                                <span class="text-do-gray-medium">
                                    Simple and reliable cloud website hosting
                                </span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl">
                            <a class="flex flex-col p-4" href="/products/kubernetes">
                                <span class="text-xl font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">VPS Hosting</span>
                                <span class="text-do-gray-medium">
                                    VPS hosting options suited to every need
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex justify-between 2/3 mx-10 pb-10 gap-20">
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider ">CLOUDWAYS</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/droplets">Managed WordPress
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/kubernetes">Managed Woocommerce
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">Managed Magento
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">BY USE CASE</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Cloud VPN</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Web &amp; Mobile Apps</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Game Development</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Video Streaming</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Saas Platforms</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Blockchain</a>
                            </li>
                        </ul>
                    </div>
                    <div class="font-jetbrains font-semibold hover:text-do-blue-medium text-do-blue-light">
                        <p class="group cursor-pointer">
                            Questions? <br>
                            Speak With An Expert
                        </p>
                        <a class="group flex items-center font-jetbrains font-semibold cursor-pointer hover:text-do-blue-medium text-do-blue-light" href="">
                            Today
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <a class="group flex justify-center items-center py-4 border-t border-t-gray-200 font-jetbrains font-semibold cursor-pointer hover:text-do-blue-medium text-do-blue-light" href="">
                See all products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </a>
        </div>

        <!-- Community Bar -->
        <div class="bg-white pt-8 content-start hidden">
            <div class="flex 1/3 px-10">
                <div class="pr-10 flex flex-col gap-2">
                    <p class="ml-1 mb-8 text-sm font-bold text-do-blue-dark uppercase tracking-wider">
                        OUR COMMUNITY
                    </p>
                    <ul class="flex flex-col gap-6">
                        <li class="group hover:bg-sky-200 rounded-2xl">
                            <a class="flex flex-col p-4" href="/products/droplets">
                                <span class="text-xl font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">
                                    Community Home
                                </span>
                                <span class="text-do-gray-medium">
                                    DevOps and development guides
                                </span>
                            </a>
                        </li>
                        <li class="group hover:bg-sky-200 rounded-2xl">
                            <a class="flex flex-col p-4" href="/products/kubernetes">
                                <span class="text-xl font-epilogue text-do-blue-mediumdark2 font-medium group-hover:text-do-blue-light">CSS-Tricks</span>
                                <span class="text-do-gray-medium">
                                    All things web design
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex justify-between 2/3 mx-10 pb-10 gap-20">
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider ">RESOURCES</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/droplets">Tutorials
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/kubernetes">Questions And Answers
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">Tools
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">Write for Donations
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">Customer Stories
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">DigitalOcean Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider">GET INVOLVED</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Hatch Startup Program</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Open Source Sponsorships</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Hacktoberfest</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Deploy</a>
                            </li>
                            <li>
                                <a class="text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/cloudways">Do Impact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="mb-4 text-sm font-bold text-do-blue-dark uppercase tracking-wider ">DOCUMENTATION</p>
                        <ul class="flex flex-col gap-2 mb-10">
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/droplets">Quick Start
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/kubernetes">Droplets
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">Storage
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">App Platform
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">API Reference
                                </a>
                            </li>
                            <li class="">
                                <a class="flex items-center text-do-gray-medium font-medium gap-2.5 hover:text-do-blue-dark2" href="/products/app-platform">Domains and DNS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>