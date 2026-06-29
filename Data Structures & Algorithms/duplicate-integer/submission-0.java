class Solution {
    public boolean hasDuplicate(int[] nums){
        Integer length = nums.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i=0;i<length;i++){
            if(map.containsKey(nums[i])){
                return true;
            }
            map.put(nums[i], 1);
        }
        return false;
    }
}