class Product {
    constructor(name) {
        this.name = name;
    }

    static #products = [];

    static getAll() {
        return this.#products;
    }

    static findByName(name) {
        return this.#products.find(product => product.name === name);
      }



    static add(product) {
        this.#products.push(product);
    }

    static deleteByName(name) {
        const index = this.#products.findIndex(product => product.name === name);
        if (index !== -1) {
          this.#products.splice(index, 1);
          return true; 
        }
        return false; 
      }

    static getLast() {
        if (!this.#products.length) {
            return;
        }

        return this.#products[this.#products.length - 1];
    }
}

module.exports = Product;