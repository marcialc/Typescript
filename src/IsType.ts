/**
 * Gets two types and compares if they are the same
 * If equal returns true if not false
 */
type IsType<T, K> = T extends K ? (K extends T ? true : false) : false;

/**
 * Example
 */
