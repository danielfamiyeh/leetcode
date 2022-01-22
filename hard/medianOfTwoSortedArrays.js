/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let both = [...nums1, ...nums2];
  const midpoint = both.length/2;
  
  both.sort((a,b) => a-b);
  
  return both.length & 1 ? both[Math.floor(midpoint)] : (both[midpoint-1] + both[midpoint])/2
  
};