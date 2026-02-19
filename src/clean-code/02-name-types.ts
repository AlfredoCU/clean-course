// Nombres según el tipo de dato.
(() => {
  // ARRAYS

  // malo
  const fruit = ["apple", "banana", "cherry"];

  // regular
  const fruitList = ["apple", "banana", "cherry"];

  // bueno
  const fruits = ["apple", "banana", "cherry"];

  // mejor
  const fruitNames = ["apple", "banana", "cherry"];

  // BOOLEANS

  // mal
  const open = true;
  const write = true;
  const fruittwo = true;
  const active = false;
  const noValues = true;
  const notEmpty = true;

  // mejor

  const isOpen = true;
  const canWrite = true;
  const hasFruits = true;
  const isActive = false;
  const hasValues = true;
  const isEmpty = true;

  // NUMBERS

  // mal
  const fruitsl = 3;
  const cars = 10;

  // mejor
  const maxFruits = 5;
  const minFruits = 1;
  const totalFruits = 3;
  const totalOfCars = 10;

  // FUNCTIONS

  // mal

  const createUserIfNotExists = () => {};
  const updateUserIfNotEmpty = () => {};
  const sendEmailIfFieldsValid = () => {};

  // mejor
  const createUser = () => {};
  const updateUser = () => {};
  const sendEmail = () => {};
})();

// TODO: Tarea
(() => {
  const temperaturesInCelsius = [33.6, 12.34]; // temperaturesCelsius

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const userEmails = users.map((user) => user.email);

  const canJump = false;
  const canRun = true;
  const hasItems = true; // hasInventory
  const isLoading = false;

  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  const endTime = new Date().getTime() - startTime;

  function getBooks() {
    throw new Error("Function not implemented.");
  }

  function getBooksFromUrl(url: string) {
    // getBooksByUrl
    throw new Error("Function not implemented.");
  }

  function getSqueraArea(side: number) {
    // getSquareAreaBySide
    throw new Error("Function not implemented.");
  }

  function printJob() {
    throw new Error("Function not implemented.");
  }
})();

// El sentido semantico de los nombres es muy importante.
// Los nombres deben ser descriptivos y tener un sentido semantico (nombre basado en el contexto de la aplicación).
