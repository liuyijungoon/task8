"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    it("不合法的输入", function(){
        var input ='123345'
        var result = main(input);
        var expect_string = 'input is illegal!';
        
        expect(expect_string).to.equal(result);
    });

    it("input='12345'", function(){
        var input ='12345'
        var result = main(input);
        var expect_string = '|:::||::|:|::||::|::|:|:|::|:|:|';
        
        expect(expect_string).to.equal(result);
    });
    
    it("input='12345-6789'", function(){
        var input ='12345-6789'
        var result = main(input);
        var expect_string = '|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|'
        
        expect(expect_string).to.equal(result);
    });
     it("input= '|:::||::|:|::||::|::|:|:|::|:|:|'", function(){
        var input ='|:::||::|:|::||::|::|:|:|::|:|:|'
        var result = main(input);
        var expect_string = '12345'
        
        expect(expect_string).to.equal(result);
    });
     it("input='|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|'", function(){
        var input ='|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|';
        var result = main(input);
        var expect_string = '12345-6789'
        
        expect(expect_string).to.equal(result);
    });
       


});
