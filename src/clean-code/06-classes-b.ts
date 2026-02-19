// Objetos como propiedades - Refactor
// No aplicando el principio de responsabilidad única
(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
    lastAccess?: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, ...rest }: UserProps) {
      super(rest);
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      ...rest
    }: UserSettingsProps) {
      super(rest);
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    name: "Alfredo",
    gender: "M",
    birthdate: new Date("1997-02-11"),
    email: "alfredo11cu@gmail.com",
    role: "Admin",
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
  });

  console.log(userSettings);
})();
