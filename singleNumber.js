
var singleNumber = function(nums) {
    let ones = 0;
    let twos = 0; 
    let threes = 0; 
    
    for (const num of nums) {
        twos = twos | (ones & num);
        ones = ones ^ num;
        threes = ones & twos;
        
        
        ones = ones & ~threes;
        twos = twos & ~threes;
    }
    
    return ones
};

console.log(singleNumber([2,2,3,2]));


