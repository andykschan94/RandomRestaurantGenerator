class Restaurant {
  constructor(id, restNames) {
    this.id = id;
    this.restNames = restNames;
  }

  static get id() {
    return this.id;
  }

  static get restNames() {
    return this.restNames;
  }
}

export default Restaurant;
