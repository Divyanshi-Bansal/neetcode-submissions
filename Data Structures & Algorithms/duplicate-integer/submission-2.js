class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const _nums = new Set(nums);
        return _nums.size != nums.length;
    }
}
