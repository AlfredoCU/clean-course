(() => {
  function isRedFruit(fruit: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit);
  }

  type FruitColor = "red" | "yellow" | "purple";
  type FruitsByColor = { [key: string]: string[] };

  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor: FruitsByColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    // Other validation: !Object.keys(fruitsByColor).includes(color)
    if (!fruitsByColor[color]) {
      throw new Error(`the color must be: red, yellow, purple`);
    }

    return fruitsByColor[color];
  }

  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step working.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isFourthStepWorking) return "Fourth step broken.";
    return "Working properly!";
    // return isFourthStepWorking ? "Working properly!" : "Fourth step broken.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // false

  // getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores y esperar los resultados
})();
