class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: "" | "S" | "M" | "XL" = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) return false;
          break;
        case "number":
          if (this[key] <= 0) return false;
          break;
        default:
          throw new Error("This type is not valid");
      }
    }

    return true;
  }

  toString() {
    //! NO DRY
    // if(this.name.length <= 0) throw new Error("Name is empty");
    // if(this.price <= 0) throw new Error("Price is zero");
    // if(this.size.length <= 0) throw new Error("Size is empty");

    //* DRY
    if (!this.isProductReady()) return;

    return `Product ${this.name} with price ${this.price} and size ${this.size}`;
  }
}

(() => {
  const product = new Product("Blue Large Pants", 100, "M");
  console.log(product.toString());
})();
