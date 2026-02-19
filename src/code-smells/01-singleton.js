const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object("I am the instance");
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log("Misma instancia? ", instance1 === instance2); // true
}

main();

// let contador;

// function getContador() {
//   if (!contador) {
//     contador = { valor: 0 };
//   }
//   return contador;
// }

// const a = getContador();
// const b = getContador();

// a.valor++;

// console.log(a.valor); // 1
// console.log(b.valor); // 1 ✅


// Cuando tienes algo que debe ser único:
// ⚙️ Configuración de la app
// 📡 Cliente de API
// 🧾 Logger
// 🗂️ Cache
// 🔐 Sesión de usuario