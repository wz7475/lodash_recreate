
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
    }
};




// Do not write or modify code below this line.
module.exports = _;