/**
 * @constructs
 */
function PatternParameter() {}

/**
 * @return {String}
 */
PatternParameter.prototype.getName = function() {
	return this.name;
};

/**
 * @param {String} name
 */
PatternParameter.prototype.setName = function(name) {
	this.name = name;
};

/**
 * @return {String}
 */
PatternParameter.prototype.getDescription = function() {
	return this.description;
};

/**
 * @param {String} description
 */
PatternParameter.prototype.setDescription = function(description) {
	this.description = description;
};

/**
 * @return {String}
 */
PatternParameter.prototype.getType = function() {
	return this.type;
};

/**
 * @param {String} type
 */
PatternParameter.prototype.setType = function(type) {
	this.type = type;
};

/**
 * @return {String}
 */
PatternParameter.prototype.getDefaultValue = function() {
	return this.defaultValue;
};

/**
 * @param {String} type
 */
PatternParameter.prototype.setDefaultValue = function(value) {
	this.defaultValue = value;
};

module.exports = PatternParameter;
