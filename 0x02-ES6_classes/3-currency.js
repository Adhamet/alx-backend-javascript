export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
     * Creates a full string representation of this Currency
     * @returns {String}
     */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
