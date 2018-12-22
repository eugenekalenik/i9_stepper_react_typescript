export function getIndexOfArrayElement(array: string[], element: string) {
  return array.filter((el: string) => el === element)[0];
}
