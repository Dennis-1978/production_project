type Mods = Record<string, boolean | string>;

/**
 * Conveniently combines classes that are added by a certain condition.
 * @param cls {String} - Main class.
 * @param mods {Object} - An object with class modifications.
 * @param additional {Array} - An array of additional classes.
 * @returns {String} - A created string with all included classes.
 */
export function classNames(
	cls: string,
	mods: Mods = {},
	additional: string[] = [],
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(" ");
}
