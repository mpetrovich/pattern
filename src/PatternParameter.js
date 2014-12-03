/**
 * @constructs
 */
function PatternParameter() {}

/**
 * @param {String} name
 */
PatternParameter.prototype.setName = function (name) {
	this.name = name;
};

/**
 * @param {String} description
 */
PatternParameter.prototype.setDescription = function (description) {
	this.description = description;
};

/**
 * @param {String} type
 */
PatternParameter.prototype.setType = function (type) {
	this.type = type;
};

/**
 * @param {String} type
 */
PatternParameter.prototype.setDefaultValue = function (value) {
	this.defaultValue = value;
};

module.exports = PatternParameter;
