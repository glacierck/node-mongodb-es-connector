/*
 * @Author: horan 
 * @Date: 2017-07-09 10:24:01 
 * @Last Modified by: horan
 * @Last Modified time: 2018-10-10 12:50:36
 * @Startup
 */

var path = require("path");
var filePath = path.join(__dirname, 'crawlerData');
var getFileList = require('./lib/util/util').readFileList(filePath, [], ".json");
require('./lib/util/util').createInfoArray(getFileList);
require('./lib/main').init(getFileList, filePath);