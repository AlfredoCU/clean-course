// Funciones - que hacen una sola cosa.
(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  type Movie = {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  };

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "alfredo") return false;

    console.log("Crear actor", fullName, birthdate);
    return true;
  }

  // Función complicada
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result;

    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };

  // Mejor
  interface GetPayAmountParams {
    isDead?: boolean;
    isSeparated?: boolean;
    isRetired?: boolean;
  }

  function getPayAmountV2({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }: GetPayAmountParams): number {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    if (isRetired) return 3000;
    return 4000;

    // return isRetired ? 3000 : 4000;
  }
})();
