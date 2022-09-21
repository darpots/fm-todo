import type { Todo } from '../types/types';

const key = 'ToDoApp';

export function getLocalStorage() {
	const localData = localStorage.getItem(key);
	if (localData) {
		return JSON.parse(localData);
	}
	return;
}

export function setLocalStorage(data: Todo[]): void {
	localStorage.setItem(key, JSON.stringify(data));
}
