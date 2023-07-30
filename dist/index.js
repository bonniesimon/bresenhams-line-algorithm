var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var drawPointsToScreen = function (points) {
    var _loop_1 = function (row) {
        var _loop_2 = function (col) {
            var shouldDrawPoint = points.some(function (point) { return (point.x === row && point.y === col); });
            if (shouldDrawPoint) {
                process.stdout.write(" @ ");
            }
            else {
                process.stdout.write(" * ");
            }
        };
        for (var col = 0; col < 20; col++) {
            _loop_2(col);
        }
        console.log("");
    };
    for (var row = 20; row >= 0; row--) {
        _loop_1(row);
    }
};
var bresenham = function (p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var pk = 2 * dy - dx;
    var pointNew = p1;
    var line = [__assign({}, p1)];
    while (pointNew.x !== p2.x || pointNew.y !== p2.y) {
        if (pk < 0) {
            pk = pk + 2 * dy;
            pointNew.x = pointNew.x + 1;
            pointNew.y = pointNew.y;
        }
        else {
            pk = pk + 2 * dy - 2 * dx;
            pointNew.x = pointNew.x + 1;
            pointNew.y = pointNew.y + 1;
        }
        line.push(__assign({}, pointNew));
    }
    return line;
};
var main = function () {
    var start = { x: 3, y: 2 };
    var end = { x: 18, y: 16 };
    var line = bresenham(start, end);
    drawPointsToScreen(line);
};
main();
