__EJECUCIÓN - SEMANA 1__
- Al tratarse de pruebas manuales exploratorias (modificando el viewport) no se cuenta con código de ejecución.
- Al ser un grupo de 3 integrantes nos ha correspondido detectar al menos 15 errores. Encontramos 20, los cuales se encuentran en la sección ISSUES del proyecto: [Issues](https://github.com/maostageAndes/Semana8-PruebasAutomatizadasMisoGrupo17/issues)
- El inventario de pruebas exploratorias se encuentra en el siguiente link: [Inventario de pruebas exploratorias](https://docs.google.com/spreadsheets/d/1g90SI2BTKK6ZCkrrZfuSbVXDcpptux3_/edit?usp=sharing&ouid=101333718335758307242&rtpof=true&sd=true)
- La estrategia de pruebas para las 8 semanas se encuentra en el siguiente link: [Estrategia de Pruebas](https://docs.google.com/document/d/1fgb7LO28HcGESjPvXcYTds7dM6lxmtWj/edit?usp=sharing&ouid=109516556394632446046&rtpof=true&sd=true)
- Enlace a video: [Video]()

__EJECUCIÓN - SEMANA 2__
| Herramienta   |   Versión     |
| ------------- | ------------- |
| Node.js  | 18.20.1 |
| Npm  | 10.5.2  |
| Ghost  | 5.82.1  |
| Cypress  | 4.9.0  |

- El proyecto se encuentra en la raiz del repositorio, en la carpeta: semana 2.
- 

__ENTREGA SEMANA 7__
| Herramienta   |   Versión     |
| ------------- | ------------- |
| Node.js  | 18.20.1 |
| Npm  | 10.5.2  |
| Ghost  | 5.82.1  |
| Cypress  | 13.9.0  |

__Instalación y Ejecución:__
- Para el despliegue del sistema se requiere contar con Node.js, Npm y Cypress instalados, así como Visual Studio Code. El detalle de la instalación se puede consultar líneas abajo en la sección de "Configuración de Entorno" e "Instalación y Ejecución de Cypress" de la semana 6.
Para la ejecución del proyecto:
- Proceder con descargar el release 2.0.0. Luego de posicionarse en la carpeta "Cypress" proceder via línea de comandos con la ejecución "npx cypress open".
- Se dispone de 96 escenarios, los cuales están desplegados en los archivos de la carpeta Cypress\cypress\e2e\semana7\.

__Descripción de las estrategias usadas:__

Para la entrega de la semana 7 se usaron las 3 estrategias (Pool de Datos a Priori, Pool de Datos Pseudoaleatorio Dinámico y Escenarios Aleatorios) en un total de 96 escenarios (cabe recordar que nuestro grupo está formado por 3 integrantes, y no 4, por lo que nos corresponde entregar al menos 90 escenarios), tomando como base los escenarios de la última entrega en Cypress:
1. Crear Página
2. Editar Página
3. Crear Post
4. Editar Post
5. Crear Tag
6. Editar Tag
7. Login

- Para la estrategia de Pool de Datos a Priori se hizo uso de Mockaroo con su herramienta para generación de archivos en formato JSON.
- Para la estrategia de Pool de Datos Pseudoaleatorio Dinámico se hizo uso de Mockaroo con su herramienta de Mock API.
- Para la estrategia de Escenarios Aleatorios se hizo uso de Faker.
- Estas estrategias se integran en los escenarios de pruebas y nos proporcionan una cobertura de prueba completa y diversa, asegurando que en el sistema pueda manejar una variedad de situaciones y conjuntos de datos.
- Al automatizar la generación de datos con Mockaroo y Faker, vemos que se ahorra tiempo y esfuerzo (en comparación con efectuar pruebas manuales), lo que aumenta la eficiencia de las pruebas, y la cantidad de las mismas.

Con relación al total de pruebas se hizo un uso mayor de escenarios aleatorios con Faker debido a su facilidad de implementación, uso y ejecución, con relación a las otras 2 estrategias.

A continuación se presenta el detalle del despliegue de pruebas:
1. Crear Página
- Se usó con Datos a Priori (3 escenarios) para efectuar una prueba positiva con un título correcto y un contenido vacío.
- Se usó con Datos Pseudoaleatorios (4 escenarios) para verificar datos inválidos como código SQL y naughty string.
- Se usó con Datos Aleatorios (10 escenarios) para evaluar datos inválidos y pruebas de frontera.
2. Editar Página
- Se usó con Datos a Priori (2 escenarios) para efectuar una prueba positiva con un título correcto y un contenido vacío.
- Se usó con Datos Pseudoaleatorios (2 escenarios) para verificar datos inválidos como código SQL y naughty string.
- Se usó con Datos Aleatorios (5 escenarios) para evaluar datos inválidos y pruebas de frontera.
3. Crear Post
- Se usó con Datos a Priori (2 escenarios) para efectuar una prueba positiva con un título correcto y un contenido vacío.
- Se usó con Datos Pseudoaleatorios (4 escenarios) para verificar datos inválidos como código SQL y naughty string.
- Se usó con Datos Aleatorios (10 escenarios) para evaluar datos inválidos y pruebas de frontera.
4. Editar Post
- Se usó con Datos a Priori (2 escenarios) para efectuar una prueba positiva con un título correcto y un contenido vacío.
- Se usó con Datos Pseudoaleatorios (4 escenarios) para verificar datos inválidos como código SQL y naughty string.
- Se usó con Datos Aleatorios (10 escenarios) para evaluar datos inválidos y pruebas de frontera.
5. Crear Tag
- Se usó con Datos a Priori (3 escenarios) para efectuar una prueba positiva con un título correcto y un contenido vacío.
- Se usó con Datos Pseudoaleatorios (4 escenarios) para verificar datos inválidos como código SQL y naughty string.
- Se usó con Datos Aleatorios (10 escenarios) para evaluar datos inválidos y pruebas de frontera.
6. Editar Tag
- Se usó con Datos a Priori (3 escenarios) para efectuar una prueba positiva con un título correcto y un contenido vacío.
- Se usó con Datos Pseudoaleatorios (4 escenarios) para verificar datos inválidos como código SQL y naughty string.
- Se usó con Datos Aleatorios (10 escenarios) para evaluar datos inválidos y pruebas de frontera.
7. Login
- Se usó con Datos Aleatorios (4 escenarios) para evaluar datos inválidos.


__ENTREGA SEMANA 6__

Herramientas necesarias para el criterio de la semana 6

| Herramienta   |   Versión     |
| ------------- | ------------- |
| Node.js  | 18.20.1 |
| Npm  | 10.5.2  |
| Ghost  | 5.82.0  |
| Ghost  | 3.42.0  |
| Kraken  | 3.6.2  |
| Cucumber  | 6.0.7  |
| Cypress  | 13.9.0  |
| Backstop.js  | 6.3.23  |
| Resemble.js  | 5.0.0  |

Configurar tu entorno:

1. Debes tener instalado visual studio code que es donde partimos nosotros para poder ejecutar las pruebas.
2. Para instalarlo ir a la web oficial.
3. Debemos tener en nuestro repositorio local la release con la que se va a ejecutar las pruebas por lo que para ello vamos realizar lo siguiente:
   - Primero: Acceder al repositorio PruebasAutomatizadasMisoGrupo 17.
   - Segundo: hacer click en el botón "code" que esta situado encima de la carpetas a la derecha, adjunto captura:

	![image](https://github.com/maostageAndes/PruebasAutomatizadasMisoGrupo17/assets/166298922/8484b54f-84e4-4d06-b00d-943367ad4db2)

   - Tecero: hacer click en el botón "code" y copiar mediante el botón de la url del archivo en modo HTTPS, te adjunto captura:

     	![image](https://github.com/maostageAndes/PruebasAutomatizadasMisoGrupo17/assets/166298922/c188b468-f1ec-44e9-b790-3e7cb0352e14)
     
   - Cuarto: Acceder a visual studio code, dentro hace clic en la opción del terminal y ejecutar el siguiente comando "git clone url/copiada" desde la raiz donde quereis que se cree.
     
4. Mediante las opciones que tiene visual studio code hacer click en abrir la carpeta desde el sitio donde tenemos guardado el proyecto.
5. Ghost 5.82: Para ejecutar desde visual studio se debe acceder a la raíz cypress mediante el comando "cd" y luego ejecutar el comando "npx cypress open" para visualizar cada escenario desde cypress y poder ejecutarlo
6. Ghost 3.42: Para ejecutar desde visual studio se debe acceder a la raíz ghost-3-42-8 mediante el comando "cd" y luego ejecutar el comando "npx cypress open" para visualizar cada escenario desde cypress y poder ejecutarlo)

###Intalacion y ejecución de Cypress###

1.Instala Node.js: Cypress requiere Node.js para funcionar. Si aún no lo tienes instalado, puedes descargarlo desde el sitio oficial de Node.js1.
2.Instala Visual Studio Code: Si aún no tienes instalado Visual Studio Code, puedes descargarlo desde el sitio oficial de Visual Studio Code1.
3.Crea un nuevo proyecto: Abre Visual Studio Code y crea un nuevo proyecto o abre uno existente2.
4.Abre la terminal integrada: En Visual Studio Code, puedes abrir la terminal integrada desde la barra de menú seleccionando View > Terminal2.
5.Navega al directorio raíz de tu proyecto: En la terminal integrada, utiliza el comando cd para navegar al directorio raíz de tu proyecto2.
6.Instala Cypress: En la terminal integrada, ejecuta el siguiente comando para instalar Cypress como una dependencia de desarrollo en tu proyecto1:

Los archivos de de los 15 escenarios los encontrara en la carpeta e2e.

###Instalacion Kraken:###

1. Crear un directorio donde se pueda desplegar kraken.
2. Acceder al directorio.
3. Desde linea de comandos ejecutar los siguientes elementos:
npm init -y
npm install kraken-node
npm install android-platform-tools
npm install appium
npx kraken-node gen

4. Los escenarios se encuentran en la carpeta features/web/support, para la ejecucion de cada uno se debe mover el escenario de esta carpeta hacia la carpeta features. De esa forma, uno por uno. Solo puede haber un archivo de escenario (extensión .features) en la carpeta features. Para la ejecución se utiliza:
npx kraken-node run


###Criterios de evaluación###

En la wiki se encuentra la descripción de las funcionalidades de GHOST que se incluyen en las pruebas de esta semana. [1 punto]


El Release del repositorio tiene el código de los 40 escenarios de prueba de la semana pasada modificados para la toma de screenshots. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. [45 puntos]
**Somos un grupo de 3, por lo que tenemos 15 escenarios de prueba en la carpeta Cypress (se añadió la sentencia cy.screenshot para cada paso de escenario, utilizado page object de nombre forAll_pages.js), y 15 escenarios de prueba en la carpeta Kraken (modificación de archivo features/web/support/hooks.js). Los 30 escenarios en total incluyen lógica modifcada para la toma de screenshots.**

El Release del repositorio tiene el código de los 10 escenarios de prueba modificados para su correcta ejecución en la nueva versión de GHOST. Los escenarios son funcionales y en el readme del repo se detallan las instrucciones para ejecutarlos. Estas instrucciones deben llevar a la ejecución de los escenarios. De lo contrario no se darán los puntos. [20 puntos]
**Somos un grupo de 3, pero de igual manera trabajamos 10 escenarios de prueba en la carpeta Cypress (carpeta ghost-3-42-8. Se añadió la sentencia cy.screenshot para cada paso de escenario, utilizado page object de nombre forAll_pages.js.**

El Release del repositorio tiene el código del reporte HTML, que realiza automáticamente la comparación de dos carpetas de resultados de ejecución de pruebas. La comparación visual se debe hacer al nivel de cada paso de los escenarios. [9 puntos]
**La información relacionada al reporte HTML se encuentra en Backstop/backstop.json**

Se reportan por lo menos 5 diferencias visuales en el sistema de registro de incidencia del grupo, siguiendo el formato establecido por el grupo. [10 puntos]
**Las diferencias halladas se encuentran como issues en Github**

En la wiki del repo se describen los pros y contras de las dos herramientas utilizadas. Los pros/contras deben ser coherentes con las características de las herramientas. [15 puntos]
**Los pro y contras se encuentra en la Wiki del proyecto**

Link a video de explicación de procedimiento realizado en la semana para habilitar la toma de capturas de pantalla, las decisiones tomadas respecto a la construcción del reporte y breve explicación de los resultados obtenidos en la semana. [10 puntos]
**El link se encuentra en la Wiki en la sección de semana 6 del proyecto**

**Información Importante:**
**Para la versión de Ghost 5.82 el servidor en algunos momentos presenta delay que provoca que las ejecuciones de las pruebas presenten error, sin embargo la lógica es correcta, en cuanto disponemos de capturas y hemos probado las ejecuciones en ambientes locales.**
**Para la versión de Ghost 3.42 el servidor en algunos momentos deja de funcionar sin explicación alguna. Ello no implica que el código sea incorrecto, pues disponemos de capturas de las ejecuciones.**
