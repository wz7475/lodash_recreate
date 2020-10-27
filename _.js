
/* https://www.codecademy.com/paths/web-development/tracks/web-dev-js-arrays-loops-objects/modules/pjs-javascript-capstone/projects/lodash */

const _ =
{
    clamp(num, low, up) {
        if (num >= low && num <= up)
            return num;
        else if (num < low)
            return low;
        else
            return up;
    },
    inRange(num, start, end) {
        if (start > end)
        {
            let buf = end;
            end = start;
            start = buf;
        }
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (num >= start && num < end)
            return true;
        return false;
    },
    words(arr){
        return arr.split(" ");
    },
    pad(str, len)
    {
        let current_len = str.length;
        if (current_len === len)
            return str;
        while(current_len !== len)
        {
            if((len - current_len) % 2 !== 0)
                str = " " + str;
            else    
                str += " ";
        }
        return str;
    }, 
    has(obj, key)
    {
        if (obj[key] !== undefined)
            return true;
        return false;
    },
    invert(obj)
    {
        Object.keys(obj).forEach(i => {
            value= obj[i];
            key = i;
            obj[value] = key;
            delete obj[i];
        });
        return obj;
    },
    findKey(obj, func)
    {
        Object.keys(obj).forEach(i =>{
            if (func(obj[i]))
                return i;
        });
        return undefined;
    }
};




// Do not write or modify code below this line.
module.exports = _;