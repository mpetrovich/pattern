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
Pattern.prototype.getTitle = function() {
	return this.title;
};

/**
 * @param {String} title
 */
Pattern.prototype.setTitle = function(title) {
	this.title = title;
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
 * @param {Number} [height] in px
 */
Pattern.prototype.addExample = function(description, codeBlocks, height) {
	if (height !== undefined && height !== null) {
		height = _.toNumber(height);
	}
	this.examples = this.examples || [];
	this.examples.push({
		description: description,
		height: height,
		codeBlocks: codeBlocks,
	});
};

/**
 * @return {Object} Set of key-value pairs
 */
Pattern.prototype.getMeta = function() {
	return this.meta || {};
};

/**
 * @param {String} key
 * @param {*} value
 */
Pattern.prototype.addMeta = function(key, value) {
	this.meta = this.meta || {};
	this.meta[key] = value;
};

/**
 * @return {String}
 */
Pattern.prototype.getSource = function() {
	return this.source;
};

/**
 * @param {String} source
 */
Pattern.prototype.setSource = function(source) {
	this.source = source;
};

/**
 * @return {String}
 */
Pattern.prototype.getFilepath = function() {
	return this.filepath;
};

/**
 * @param {String} filepath
 */
Pattern.prototype.setFilepath = function(filepath) {
	this.filepath = filepath;
};

/**
 * @param {Pattern} pattern
 */
Pattern.prototype.import = function(pattern) {
	_.merge(this, pattern);
};

module.exports = Pattern;
