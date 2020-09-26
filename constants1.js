// JavaScript source code
var UNIT1HEIGHT = 50;
var UNITWIDTH = 50;
var UNIT2HEIGHT = 100;
var mapsize;
mapSize = 10 *UNITWIDTH;

var map1_forest = [[0, 0, 0, 0, 0, 0, 1, 1, 0, 0,],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 1, 1, 1, 0,],
[0, 0, 0, 0, 0, 0, 1, 0, 1, 0,],
[0, 0, 0, 1, 0, 0, 1, 1, 1, 0,],
[0, 0, 1, 0, 1, 0, 0, 0, 0, 0,],
[0, 1, 0, 0, 1, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0,0,0,0,0,0,0,0,0,0,]];

var map2_forest = [[0, 0, 0, 1, 1, 1, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]];

var map1_volcano = [[0, 0, 1, 0, 0, 0, 0, 0, 0, 0,],
[1, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0,],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
[0, 1, 0, 0, 0, 1, 0, 0, 0, 0,],
[0, 1, 0, 1, 0, 1, 0, 0, 0, 0,],
[0, 1, 0, 0, 0, 1, 0, 0, 0, 0,],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0,]];

var map2_volcano = [[1, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
[0, 0, 1, 0, 1, 0, 0, 0, 0, 0,],
[0, 0, 1, 1, 1, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]];

var map1_ocean = [[1, 1, 1, 1, 0, 0, 0, 0, 0, 0,],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[1, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
[1, 0, 0, 1, 1, 0, 0, 0, 0, 0,],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[1, 0, 0, 0, 0, 0, 0, 1, 1, 1,],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0,],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0,],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0,]];

var map2_ocean = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
[0, 1, 1, 1, 0, 0, 0, 0, 0, 0,],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0,],
[0, 1, 1, 1, 1, 0, 0, 0, 0, 0,],
[0, 1, 1, 1, 1, 0, 0, 0, 0, 0,],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 1,],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1,]];





