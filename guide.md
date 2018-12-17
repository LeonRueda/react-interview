# Valoración React

La idea de la valorcion es dar una buena vista al conocimiento del candidato en javascript en general y en react en particular

1. Hablar con el candidato acerca de que lo trajo hasta hoy
1.1 preguntar por herramientas/frameworks que utiliza/ha utilizado; Typescript, Angular(js/2,4,6,7)
2. Cual es el mejor proyecto que ha realizado en Javascript - React. 
2.1 Hacerse una idea de la cosa mas dificil o interesante que el candidato ha realizado
3. Preguntar por Conocimientos en CSS y relacionados.
4. Front-End en general: *Service Workers* NodeJs Tasks Runners Linters Deploy...
5. Preguntar por Soft Skills (Team Lead?, Entrevistas?, diseño de cursos?)
6. Explicar/Preguntar como se trabaja un poco con pruebas y con TDD
7. Ejercicio 1 tarjeta de credito con casos de prueba: (test1)[https://github.com/LeonRueda/react-interview/blob/master/src/masker.js]
7.1 Realizar la implementacion del *framework* de pruebas
8. Ejercicio 2 groupBy simple para ver el manejo de datos: (test2)[https://github.com/LeonRueda/react-interview/blob/master/src/data-group.js]


## Para los ejercicios Revisar:
- Ayudar con la implementacion de las pruebas si es necesario
- Ayudar con la implementacion de la primera funcion si es necesario
- Uso de ES6 var - const - let uso de metodos en arrays, arrow functions, etc...
- Uso de operadores rest, concat, spread, etc...
- legibilidad, nombres de los methods y variables
- validar edge cases como null, espacios, undefineds, etc...
- Uso de TDD!
- legilibilidad del codigo (nombre de variables, consistencia de la implementacion funciones auxiliares, etc...)
- Patrones de diseño como funciones auxiliares, guard clauses, implementacion de servicios, controladores, etc
- side efects en funciones y en manejo de metodos para arrays (forEach, maps, reduce, filter, concat, contains, etc...)


## Preguntas de react: ver questions.md

### Test 1:
Implement a credit card masker that replaces all but the 1st and last 4 digits in the provided sequence
Should not mask input shorter than 6 characters
Should not mask input with alphanumeric characters

### Test 2:
Implement a calculator that accepts an expression as a string and performs the calculations
Expressions should be evaluated such that a operation will operate on the previous 2 numbers
Assumption can be made that an expression provided will always be valid
Valid operations are + - / *
If no operations are provided, the last value in the expression should be returned
Should return 0 if no expression is provided
