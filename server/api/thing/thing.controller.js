/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */
var md5 = require('md5');
var randomstring = require("randomstring");
var http = require('request');

// Config IAM_shareSecret here
const IAM_shareSecret = '123';
const IAM_API = 'http://192.200.241.91:9999/v1/';

// Gets a list of Things
export function create(req, res) {
    var ranString = randomstring.generate(7);
    console.log(IAM_shareSecret+ranString);
    console.log(IAM_API+'status/version?random='+ranString+'&md5='+md5(IAM_shareSecret+ranString));
    var iamAns = http.get(IAM_API+'status/version?random='+ranString+'&md5='+md5(IAM_shareSecret+ranString),function(err,httpResponse,body){
        console.log(body);
    } )
    res.json(md5('test'));
}