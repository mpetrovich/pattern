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
Pattern.merge = function (patterns) {
	var patternsGroupedByName = _.groupBy(patterns, 'name');

	var patternsMerged = _.map(patternsGroupedByName, function (patternsToMerge) {
		var patternMerged = new Pattern();

		_.forEach(patternsToMerge, function (pattern) {
			patternMerged.import(pattern);
		});

		return patternMerged;
	});

	return patternsMerged;
};

/**
 * @param {String} name
 */
Pattern.prototype.setName = function (name) {
	this.name = name;
};

/**
 * @param {String} description
 */
Pattern.prototype.setDescription = function (description) {
	this.description = description;
};

/**
 * @param {PatternParameter} parameter
 */
Pattern.prototype.addParameter = function (parameter) {
	this.parameters = this.parameters || [];
	this.parameters.push(parameter);
};

/**
 * @param {String} example
 * @param {String} description
 */
Pattern.prototype.addExample = function (example, description) {
	this.examples = this.examples || [];
	this.examples.push({
		example: example,
		description: description
	});
};

/**
 * @param {Pattern} pattern
 */
Pattern.prototype.import = function (pattern) {
	_.merge(this, pattern);
};

module.exports = Pattern;
