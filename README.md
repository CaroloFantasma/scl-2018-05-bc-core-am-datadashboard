# Data Dashboard

# Usuarios y objetivos

Para la creación del proyecto se realizó una entrevista con la training manager de Laboratoria, <b>Valentina Smith</b> quien será la principal usuaria del producto.

Durante la entrevista descubrimos que el objetivo de nuestra usuaria con respecto a este producto, es poder acceder de manera sencilla y por medio de una interfaz “amigable” a la información específica de las estudiantes de Laboratoria, para así tener un mejor entendimiento de cómo va cada alumna en su proceso de aprendizaje.

Los datos más relevantes que necesita ver en la interfaz es el progreso que tiene cada alumna en los contenidos de aprendizaje en el sistema LMS, como por ejemplo: lecturas, vídeos, ejercicios y quizzez. Para así, evaluar esta información y tomar decisiones futuras.

La implementación mínima que debiara tener nuestro producto es la siguiente:

1. Permitir al usuario seleccionar un cohort de una lista de cohorts.
2. Al seleccionar un cohort:
   - Listar las alumnas de ese cohort
   - Para cada alumna:
     + Calcular porcentaje de completitud de todos los _cursos_.
     + Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
       y _quizzes_.
   - Ordenar alumnas por completitud _general_ (porcentaje consumido/completado
     de todos los cursos del cohort en cuestión), de _lecturas_, _ejercicios
     autocorregidos_ y _quizzes_.
   - Filtrar/buscar alumnas por nombre.
3. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

<h2> ¿Qué problemas soluciona esta aplicación para el usuario y con qué frecuencia la utilizaría? </h2>

Valentina revisa esta información todos los días o día por medio, generalmente desde su notebook o teléfono celular, por lo que es indispensable que nuestra aplicación sea ‘responsive’, para que así la pueda visualizar sin problemas de desconfiguración.

En la entrevista, llegamos a la conclusión de que el mayor problema que resuelve nuestra aplicación es que al poder tener acceso a la información detallada sobre el progreso de cada alumna, las training manager pueden tomar decisiones dependiendo de los avances de cada estudiante. Por ejemplo, si los resultados generales de un curso o tema se encuentran por debajo de la media esperada, las training manager evalúan estos datos y estadísticas,  y en caso de ser necesario tomar la decisión  de que los coaches repitan y refuercen una unidad antes de pasar a la siguiente.

<h2> Proceso de diseño </h2>

El proceso de diseño se basó en la información detallada del Readme del proyecto y principalmente, en las ideas entregadas por Valentina (nuestra usuaria), ya que nos informó que a ella le gustaría que la aplicación fuese lo más parecida al LMS de Laboratoria y que también usaramos los colores representativos, que son amarillo, verde menta y fucsia. 

La primera parte del diseño se creó por medio de un sketch hecho a mano con lápiz y papel, en donde establecimos nuestro primer modelo de interfaz con un prototipo de baja fidelidad.

Posteriormente, diseñamos un prototipo de interfaz de usuario de alta fidelidad utilizando una herramienta de diseño visual, en este caso “Figma”.

Por último, trabajamos en la implementación de nuestra interfaz, dándole prioridad a implementar los requisitos esenciales que se pidieron para este proyecto.

A continuación, puede ver nuestros diseños, en caso de no poder visualizarlos, por favor, ingrese a la carpera src/img-readme

<b>Prototipo de baja fidelidad </b>
![alt text](src\img-readme\sketch1.jpg)

![alt text](src\img-readme\sketch2.jpg)

![alt text](src\img-readme\sketch3chico.jpg)

<b>Prototipo de baja fidelidad responsive</b>

![alt text](src\img-readme\responsive.jpg)

<b>Prototipo de alta fidelidad </b>

![alt text](src\img-readme\data1.png)

![alt text](src\img-readme\data2.png)

![alt text](src\img-readme\data3.png)

![alt text](src\img-readme\data4.png)

<b>Prototipo de alta fidelidad responsive</b>

![alt text](src\img-readme\responsive1.png)

![alt text](src\img-readme\responsive2.png)

![alt text](src\img-readme\responsive3.png)
