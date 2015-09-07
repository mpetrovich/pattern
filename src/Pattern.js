var _ = require('lodash');

/**
 * @constructs
 */
function Pattern() {}

/* ---------------------------------------------------------------------
 * Public
 * --------------------------------------------------------------------- */

/**
 * @static
 * @param {Array} patterns
 * @return {Array}
 */
Pattern.merge = function(patterns) {
	var patternsGroupedByName = _.groupBy(patterns, 'name');

	var patternsMerged = _.map(patternsGroupedByName, function(patternsToMerge) {
		var patternMerged = new Pattern();

		_.forEach(patternsToMerge, function(pattern) {
			patternMerged.import(pattern);
		});

		return patternMerged;
	});

	return patternsMerged;
};

/**
 * @return {String}
 */
Pattern.prototype.getName = function() {
	return this.name;
};

/**
 * @param {String} name
 */
Pattern.prototype.setName = function(name) {
	this.name = name;
};

/**
 * @return {String}
 */
Pattern.prototype.getDescription = function() {
	return this.description;
};

/**
 * @param {String} description
 */
Pattern.prototype.setDescription = function(description) {
	this.description = description;
};

/**
 * @return {Array.<PatternParameter>}
 */
Pattern.prototype.getParameters = function() {
	return this.parameters || [];
};

/**
 * @param {PatternParameter} parameter
 */
Pattern.prototype.addParameter = function(parameter) {
	this.parameters = this.parameters || [];
	this.parameters.push(parameter);
};

/**
 * @return {Array.<String>}
 */
Pattern.prototype.getExamples = function() {
	return this.examples || [];
};

/**
 * @param {String} description
 * @param {Array.<Object>} codeBlocks
 * @param {String} codeBlocks[i].syntax
 * @param {String} codeBlocks[i].code
 */
Pattern.prototype.addExample = function(description, codeBlocks) {
	this.examples = this.examples || [];
	this.examples.push({
		description: description,
		codeBlocks: codeBlocks,
	});
};

/**
 * @param {String} key
 * @param {String} value
 */
Pattern.prototype.addMeta = function(key, value) {
	this.meta = this.meta || {};
	this.meta[key] = value;
};

/**
 * @param {Pattern} pattern
 */
Pattern.prototype.import = function(pattern) {
	_.merge(this, pattern);
};

module.exports = Pattern;
