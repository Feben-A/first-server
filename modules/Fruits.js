const fruits = require("../fruits.json");

class Fruit {
  constructor({ genus, name, id, family, order, nutritions }) {
    (this.genus = genus),
      (this.name = name),
      (this.id = id),
      (this.family = family),
      (this.order = order),
      (this.nutritions = nutritions);
  }

  static showAll() {
    return fruits.map((fruit) => new Fruit(fruit));
  }

  static show(name) {
    let fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name);
    const instance = new Fruit(fruit);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw new Error("Fruit doesn't exist");
    }
  }

  static create(data) {
    const newFruit = data;
    const fruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === newFruit.name.toLowerCase()
    );
    if (fruit) {
      throw Error("The fruit already exists.");
    } else {
      //   console.log(newFruit);
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);
      return new Fruit(newFruit);
    }
  }

  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );
    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      return new Fruit(updatedFruit);
    } else {
      throw Error("Fruit not found");
    }
  }

  destroy() {
    const deletedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );
    if (deletedFruit) {
      const index = fruits.indexOf(deletedFruit);
      fruits.splice(index, 1);
    } else {
      throw Error("Fruit not found");
    }
  }
}

module.exports = Fruit;
