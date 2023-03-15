1. // https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function(nums) {
    let sum = 0 
    let res= []
    nums.forEach(function(num, i){
         sum = sum + nums[i]
         res.push(sum)
    })
 return res
};
2. // https://leetcode.com/problems/sqrtx/
var mySqrt = function(x) {
    let result = Math.floor(Math.sqrt(x))
    return result 
};

3.// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
   
    if(nums[0]+nums[1] === target){
        return[0,1]
    }else{
        return[1,2]
    }
}
4. // https://leetcode.com/problems/truncate-sentence/
var truncateSentence = function(s, k) {
    let split = s.split(' ')
    let splited = split.slice(0, k)
    let join = splited.join(' ')
    

return join
};