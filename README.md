# Empezando con React.

Para aprender a utilizar React, estoy siguiendo los videos de Luis Cabrera.
Enlace al primer video de su curso (me he basado en este video): https://youtu.be/Bh7j2upPAT8?list=PLdcAPGja1uw1fmhVo-obnAXEXPqYQ9HLy

## Información principal.
En este primer video se aprende a crear un proyecto con React desde cero para desarrollar un gestor de tareas, aprendiendo a utilizar hooks.
En mi caso he cambiado algunos elementos de la parte visual, pero la funcionalidad está basada 100% en el video de Luis.

## Información extra (mis apuntes).

Atajo para limpiar terminal de GIT: CTRL + L.
Si estamos dentro de la carpeta de nuestro proyecto, podemos abrirlo en VS escribiendo code.
Los componentes de React comienzan con letra mayúscula.
Un componente sólo puede retornar una única etiqueta, de modo que si queremos retornar varios elementos lo más inteligente es retornar un contenedor como por ejemplo un div. La mejor forma de agrupar etiquetas es con <>, es decir, fragment.
Para poder crear aplicaciones altamente interactivas, necesitamos implementar estados.
Las funciones que reciben argumentos se ejecutan automáticamente una vez, para que esto no ocurra, la hacemos retornar en una función de flecha ( () => función ).
Atajo para crear const con useState = useState y selecciono segunda opción (snippet).
El nombre del name y del atributo del objeto de estado deben ser iguales.
Para evitar el comportamiento por defecto de un formulario (recargar la página al realizar un submit) podemos recibir un preventDefault en nuestro form.
Hacer aplicación persistente mediante localStorage (mantener estados al recargar la página).
localStorage solo almacena Strings.



