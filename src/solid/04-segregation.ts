// interface Bird {
//   fly(): void;
//   eat(): void;
//   run(): void;
//   swim(): void;
// }

// class Tucan implements Bird {
//   public fly() {}
//   public eat() {}
// }

// class Humminbird implements Bird {
//   public fly() {}
//   public eat() {}
//   public run() {}
// }

// class Ostrich implements Bird {
//   public fly() {
//     throw new Error("esta ava no vuela");
//   }
//   public eat() {}
//   public run() {}
// }

// class Penguin implements Bird {
//   public fly() {
//     throw new Error("esta ava no vuela");
//   }
//   public eat() {}
//   public run() {}
//   public swim() {}
// }

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void; // si cambia solo afecta a Tucan y Humminbird.
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim?(): void;
}

class Tucan implements Bird, FlyingBird {
  public eat() {}
  public fly() {}
}

class Humminbird implements Bird, FlyingBird {
  public eat() {}
  public fly() {}
}

// No se obliga a usar método que no se usan.
class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}
