class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const _nums = new Set(nums);
        // return _nums.size != nums.length;
        const map = new Map();
        for(let num of nums){
            if(map.has(num)){
                return true;
            }
            else{
                map.set(num, 1);
            }
        }
        return false;
    }
}
