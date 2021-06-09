/**
 * @name includes
 * @description Checks if arr has item inside
 *              Made because .includes() doesn't work for arrays with sub-arrays
 *
 * @param {any[]} arr  The actual array
 * @param {any} item   The item to check for
 */
export const includes = (arr: any[], item: any) => {
  for (let i = 0; i < arr.length; i++) {
    const item2 = arr[i];
    if (item2 == item) return true;
  }
  return false;
};

/**
 * @name equalsUnsorted
 * @description Check if two arrays are equal in contents, without checking order
 *
 * @param {any[]} arr1  Array to compare with arr2
 * @param {any[]} arr2  Array to compare with arr1
 */
export const equalsUnsorted = (arr1: any[], arr2: any[]) => {
  if (arr1.length != arr2.length) return false;
  let eq = true;
  for (let i = 0; i < arr1.length; i++) {
    const e = arr1[i];
    if (!includes(arr2, e)) eq = false;
  }
  return eq;
};

/**
 * @name includesUnsortedSubarrValues
 * @description .includes() but with usage of equalsUnsorted. Requires an any[][] and an any[]
 *
 * @param {any[]} arr   Array to check if item is inside of
 * @param {any[]} item  -
 */
export const includesUnsortedSubarrValues = (arr: any[][], item: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    const item2 = arr[i];
    if (equalsUnsorted(item, item2)) return true;
  }
  return false;
};

/**
 * @name removeDupes
 * @description Remove duplicate entries in an array
 * @default
 *
 * @param {any[]} arr           Array to remove duplicates from
 * @param {boolean} subarrCheck Remove arrays which have matching subarray contents. Example: [[1,2,3],[2,3,1],[4,1,2,3]] returns [[1,2,3],[4,1,2,3]]
 *
 * @returns []
 */
export const removeDupes = (arr: any[], subarrCheck: boolean = true) => {
  let returned = [];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];

    if (
      !(
        subarrCheck && Array.isArray(e)
          ? includesUnsortedSubarrValues
          : includes
      )(returned, e)
    )
      returned.push(e);
  }
  return returned;
};

export default removeDupes;
