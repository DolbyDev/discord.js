'use strict';

// This file contains the typedefs for camel-cased json data

/**
 * @typedef {Object} BaseComponentData
 * @property {ComponentType} type The type of component
 */
/**
 * @typedef {BaseComponentData} ActionRowData
 * @property {ComponentData[]} components The components in this action row
 */
/**
 * @typedef {BaseComponentData} ButtonComponentData
 * @property {ButtonStyle} style The style of the button
 * @property {?boolean} disabled Whether this button is disabled
 * @property {string} label The label of this button
 * @property {?APIComponentEmoji} emoji The emoji on this button
 * @property {?string} customId The custom id of the button
 * @property {?string} url The url of the button
 */
/**
 * @typedef {object} SelectMenuComponentOptionData
 * @property {string} label The label of the option
 * @property {string} value The value of the option
 * @property {?string} description The description of the option
 * @property {?APIComponentEmoji} emoji The emoji on the option
 * @property {?boolean} default Whether this option is selected by default
 */
/**
 * @typedef {BaseComponentData} SelectMenuComponentData
 * @property {string} customId
 * @property {?boolean} disabled
 * @property {?number} maxValues
 * @property {?number} minValues
 * @property {?SelectMenuComponentOptionData[]} options
 * @property {?string} placeholder
 */

/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData} MessageComponentData
 * @property {string} customId
 * @property {TextInputStyle} style
 * @property {string} label
 * @property {?number} minLength
 * @property {?number} maxLength
 * @property {?boolean} required
 * @property {?string} value
 * @property {?string} placeholder
 */

/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData|TextInputComponentData} ComponentData
 */
