# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten

```
yarn dev
ó
npm run dev
```

# 🧼 Clean Code & Buenas Prácticas

## 📌 Introducción

Este curso:

- ❌ No es para aprender a programar.
- ❌ No es para aprender JavaScript o TypeScript.
- ✅ Es para practicar y aprender buenas prácticas para el manejo de nuestro código.
- ✅ Busca reducir la **deuda técnica**.
- ✅ Aplica a cualquier lenguaje de programación.

---

# 💳 Deuda Técnica

## ¿Qué es?

> La falta de calidad en el código que genera una deuda que repercutirá en costos futuros.

### Impacto

- ⏳ Tiempo en mantenimiento.
- 🔄 Tiempo en refactorización.
- 🤯 Tiempo en comprender código legado.
- 🔁 Tiempo adicional en transferencia de conocimiento.
- 💸 Costos económicos.

> Caer en deuda técnica es normal y muchas veces inevitable.

---

## 🛠 ¿Cómo se paga la deuda técnica?

### Refactorización

Proceso que mejora el código **sin alterar su comportamiento**, haciéndolo:

- Más entendible
- Más mantenible
- Más tolerante a cambios

⚠️ Para refactorizaciones grandes es imprescindible contar con **pruebas automáticas**.

> “Si funciona, no lo toques” — mentalidad común cuando no hay tests.

---

# 🧼 Clean Code

> “Código limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda.” – Carlos Blé

> “Nuestro código tiene que ser simple y directo.” – Grady Booch

> “Programar es el arte de decirle a otro humano lo que quieres que la computadora haga.” – Donald Knuth

---

# 🏷 Nombres

## ✅ Principios

- Deben ser pronunciables y expresivos.
- Sin información técnica innecesaria.
- Según el tipo de dato.
- Claros y autoexplicativos.

## 📦 Clases

- Usar **UpperCamelCase**
- Formadas por sustantivos
- No demasiado genéricas

### 3 preguntas clave:

1. ¿Qué hace exactamente la clase?
2. ¿Cómo realiza su tarea?
3. ¿Hay algo específico sobre su ubicación?

---

# 🔧 Funciones

> “Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica.” – Ward Cunningham

## Reglas

- Simplicidad ante todo
- Tamaño reducido
- Idealmente menos de 20 líneas
- Evitar `else`
- Priorizar condicional ternaria
- Limitar a 3 parámetros posicionales

---

# 🔁 Principio DRY

**Don’t Repeat Yourself**

- Evitar duplicidad de código
- Simplifica pruebas
- Centraliza procesos
- Refactorizar cuando sea necesario

> “Si quieres ser un programador productivo esfuérzate en escribir código legible.” – Robert C. Martin

---

# 🧱 Estructura de Clases

Orden recomendado:

1. Propiedades estáticas
2. Propiedades públicas
3. Constructores estáticos
4. Constructor
5. Métodos estáticos
6. Métodos privados
7. Métodos públicos (de mayor a menor importancia)
8. Getters y Setters

> “El buen código parece estar escrito por alguien a quien le importa.” – Michael Feathers

---

# 💬 Comentarios

- Deben ser la **excepción**, no la regla.
- Preferir código autoexplicativo.
- Comentar el **por qué**, no el qué ni el cómo.

> “No comentes el código mal escrito, reescríbelo.” – Brian W. Kernighan

---

# 📐 Uniformidad

- Problemas similares → soluciones similares
- Mantener indentación consistente
- Mantener estilo uniforme en el proyecto

---

# 🚨 Acrónimo STUPID (Code Smells)

1. **S** – Singleton
2. **T** – Tight Coupling (Alto acoplamiento)
3. **U** – Untestability (No testeable)
4. **P** – Premature Optimization (Optimización prematura)
5. **I** – Indescriptive Naming (Nombres poco descriptivos)
6. **D** – Duplication (Duplicidad)

---

## 🔒 Singleton (¿Por qué es code smell?)

### Pros

- Garantiza una única instancia

### Contras

- Vive en contexto global
- Difícil de testear
- No es rastreable
- Puede modificarse desde cualquier lugar

---

## 🔗 Acoplamiento

### Bajo acoplamiento + Alta cohesión = Buen diseño

### Alto acoplamiento causa:

- Efecto dominó en cambios
- Dificultad para reutilizar
- Dificultad para testear

---

## 🎯 Cohesión

- Alta cohesión → clase enfocada en una responsabilidad clara
- Baja cohesión → clase hace demasiadas cosas

---

## 🧪 Código no testeable

Causas:

- Alto acoplamiento
- Dependencias no inyectadas
- Uso de singletons

Siempre pensar en tests desde el inicio.

---

## ⚡ Optimización prematura

No anticiparse a requisitos.

- ❌ Añade complejidad accidental
- ✅ Mantener opciones abiertas

---

## 🏷 Nombres poco descriptivos

- Variables mal nombradas
- Clases genéricas
- Funciones ambiguas

> La única medida de calidad es el “WTF por minuto”.

---

## 🔁 Duplicidad de Código

### Real

- Código idéntico
- Cambios múltiples necesarios
- Mayor probabilidad de errores

### Accidental

- Código similar pero con distinta función
- Puede resolverse con parámetros o abstracciones

---

# 🧠 Otros Code Smells

- Inflación
- Obsesión primitiva
- Lista larga de parámetros
- Feature Envy
- Intimidad inapropiada
- Cadenas de mensajes
- The Middle Man

---

# 🧱 Principios SOLID

1. **S** – Single Responsibility
2. **O** – Open/Closed
3. **L** – Liskov Substitution
4. **I** – Interface Segregation
5. **D** – Dependency Inversion

---

## S – Single Responsibility

> “Nunca debería haber más de un motivo por el cual cambiar una clase.”

No significa hacer una sola cosa, sino tener **una única responsabilidad**.

### Señales de violación

- Clase demasiado genérica
- Muchas importaciones
- Muchas responsabilidades
- Demasiadas líneas

---

## O – Open/Closed

- Abierto para extensión
- Cerrado para modificación

Evitar modificar código existente para nuevos comportamientos.

Se puede lograr mediante:

- Herencia
- Composición
- Patrón Strategy

---

## L – Liskov Substitution

> “Si U es subtipo de T, entonces debe poder sustituirse sin alterar el sistema.”

Las subclases deben comportarse correctamente en lugar de la clase base.

---

## I – Interface Segregation

> “Los clientes no deberían depender de interfaces que no utilizan.”

Interfaces pequeñas y específicas.

---

## D – Dependency Inversion

> “Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.”

- Dominio no debe depender de infraestructura.
- UI y DB deben depender de abstracciones.
- Usar inyección de dependencias.

---

# 🏗 Arquitectura y Abstracciones

- Componentes de dominio son los más importantes.
- Infraestructura (UI, DB, APIs) son detalles.
- Los detalles deben depender de abstracciones.

---

# 💉 Inyección de Dependencias

Un módulo requiere otro para funcionar.

Cuando la aplicación crece, debemos usar inyección de dependencias para:

- Reducir acoplamiento
- Mejorar testabilidad
- Facilitar cambios

---

# 🎯 Conclusión

Un buen diseño de software:

- Tiene alta cohesión
- Tiene bajo acoplamiento
- Sigue principios SOLID
- Evita code smells
- Prioriza legibilidad
- Reduce deuda técnica
