var BaseError = require('./baseError');

function ParameterRequiredError(param) {
  BaseError.call(this, param + " is required.", "PARAM_REQUIRED");
}

ParameterRequiredError.prototype = Object.create(BaseError.prototype);
ParameterRequiredError.prototype.constructor = ParameterRequiredError;

module.exports = ParameterRequiredError;
