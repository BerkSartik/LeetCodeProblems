
var getNoZeroIntegers = function(n) {
    var i = 0;

    do {
        i++;
        var j = n - i;        
    } while(j.toString().includes('0') || i.toString().includes('0'));
    
    return[i ,j];
};
