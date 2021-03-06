/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */
var md5 = require('md5');
var randomstring = require("randomstring");
var http = require('request');

// Config IAM_shareSecret here
const IAM_shareSecret = '123';
const IAM_API = 'http://10.251.251.251:9999/v1/';

// Gets a list of Things
export function create(req, res) {
    //    var ranString = randomstring.generate(7);
    //    console.log(req.body);
    //    console.log(IAM_shareSecret+ranString);
    //    console.log(IAM_API+'status/version?random='+ranString+'&md5='+md5(IAM_shareSecret+ranString));

    //    var iamAns = http.get(IAM_API+'status/version?random='+ranString+'&md5='+md5(IAM_shareSecret+ranString),function(err,httpResponse,body){
    //        console.log(body);
    //    });

    //now real thing
    var ranString = randomstring.generate(7);

    var newUser = {
        "random": ranString,
        "md5": md5(IAM_shareSecret + ranString),
        "name": req.body.username,
        "extend": {
            "self_pass": {
                "enable": true,
                "password": req.body.password,
                "modify_once": false
            },
            "custom_cfg": {
                "id-card": req.body.idCard
            }
        }
    };

    console.log(newUser);

    var iamAns = http.post(
        {
            url: IAM_API + 'user',
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            json: newUser
        }
        , function (err, httpResponse, body) {
            if(err){
                res.json(err.errno);
            }
            res.json(body);
        });
}