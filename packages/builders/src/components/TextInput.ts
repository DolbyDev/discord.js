import type { ComponentType } from 'discord-api-types';
import type { Component } from '..';
import { customIdValidator } from './Assertions';

export class InputTextComponent implements Component {
	// TODO: use dapi enum
	public readonly type: ComponentType = 4;
	public readonly custom_id!: string;
	public readonly label!: string;
	// TODO: use dapi enum
	public readonly style!: number;
	public readonly min_length?: number;
	public readonly max_length?: number;

	/**
	 * Sets the custom id for this input text
	 * @param customId The custom id of this input text
	 */
	public setCustomId(customId: string) {
		customIdValidator.parse(customId);
		Reflect.set(this, 'custom_id', customId);
		return this;
	}

	/**
	 * Sets the label for this input text
	 * @param label The label for this input text
	 */
	public setLabel(label: string) {
		Reflect.set(this, 'label', label);
		return this;
	}

	/**
	 * Sets the style for this input text
	 * @param style The style for this input text
	 */
	public setStyle(style: number) {
		Reflect.set(this, 'style', style);
		return this;
	}

	/**
	 * Sets the minimum length of text for this input text
	 * @param minLength The minimum length of text for this input text
	 */
	public setMinLength(minLength: number) {
		Reflect.set(this, 'min_length', minLength);
		return this;
	}

	/**
	 * Sets the maximum length of text for this input text
	 * @param maxLength The maximum length of text for this input text
	 */
	public setAxLength(maxLength: number) {
		Reflect.set(this, 'max_length', maxLength);
		return this;
	}

	// TODO: use dapi types
	// @ts-expect-error
	public toJSON(): unknown {
		return {
			...this,
		};
	}
}
