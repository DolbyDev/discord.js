import {
	APIActionRowComponent,
	APIMessageActionRowComponent,
	APIModalActionRowComponent,
	ComponentType,
} from 'discord-api-types/v10';
import type { ButtonComponent, SelectMenuComponent, UnsafeTextInputComponent } from '..';
import { Component } from './Component';
import { createComponent } from './Components';
import isEqual from 'fast-deep-equal';

export type MessageComponent = MessageActionRowComponent | ActionRow<MessageActionRowComponent>;
export type ModalComponent = ModalActionRowComponent | ActionRow<ModalActionRowComponent>;

export type MessageActionRowComponent = ButtonComponent | SelectMenuComponent;
export type ModalActionRowComponent = UnsafeTextInputComponent;

// TODO: Add valid form component types
/**
 * Represents an action row component
 */
export class ActionRow<
	T extends ModalActionRowComponent | MessageActionRowComponent = ModalActionRowComponent | MessageActionRowComponent,
> extends Component<
	Omit<Partial<APIActionRowComponent<APIMessageActionRowComponent>> & { type: ComponentType.ActionRow }, 'components'>
> {
	public readonly components: T[];

	public constructor({
		components,
		...data
	}: Partial<APIActionRowComponent<APIMessageActionRowComponent | APIModalActionRowComponent>> = {}) {
		super({ type: ComponentType.ActionRow, ...data });
		this.components = (components?.map((c) => createComponent(c)) ?? []) as T[];
	}

	/**
	 * Adds components to this action row.
	 * @param components The components to add to this action row.
	 * @returns
	 */
	public addComponents(...components: T[]) {
		this.components.push(...components);
		return this;
	}

	/**
	 * Sets the components in this action row
	 * @param components The components to set this row to
	 */
	public setComponents(...components: T[]) {
		this.components.splice(0, this.components.length, ...components);
		return this;
	}

	public toJSON(): APIActionRowComponent<ReturnType<T['toJSON']>> {
		return {
			...this.data,
			components: this.components.map((component) => component.toJSON()) as ReturnType<T['toJSON']>[],
		};
	}

	public equals(other: APIActionRowComponent<APIMessageActionRowComponent | APIModalActionRowComponent> | ActionRow) {
		if (other instanceof ActionRow) {
			return isEqual(other.data, this.data) && isEqual(other.components, this.components);
		}
		return isEqual(other, {
			...this.data,
			components: this.components.map((component) => component.toJSON()),
		});
	}
}
