  var coding_rule={'0':'||:::',
        '1':':::||',
        '2':'::|:|',
        '3':'::||:',
        '4':':|::|',
        '5':':|:|:',
        '6':':||::',
        '7':'|:::|',
        '8':'|::|:',
        '9':'|:|::'};
   var decoding_rule={'||:::':'0',
        ':::||':'1',
        '::|:|':'2',
        '::||:':'3',
        ':|::|':'4',
        ':|:|:':'5',
        ':||::':'6',
        '|:::|':'7',
        '|::|:':'8',
        '|:|::':'9'};
function calculate_checksum(string) {
    let sum=0;
    for (var item of string){
        sum += Number(item);
    }
    let ge_of_sum=sum%10;
    let checksum=10-ge_of_sum;
    string=string+checksum;
    return string
}

function coding(string) {
    let result='|';
    for(let item of string)
    {
        //console.log(item);
        result=result+coding_rule[item]
    }
    result=result+'|';
    return result;
}
function classify_by_nine_or_five(input) {
    if(input.length===5)
    {
        return input;
    }
    else
    {
        let nine_string=input.split('-');
        return nine_string[0]+nine_string[1];
    }
}
function num_code(input) {
    var new_input=classify_by_nine_or_five(input);
    if(new_input){
        //console.log(new_input);
        var after_check=calculate_checksum(new_input);
        var result=coding(after_check);
        //console.log(coding(after_check));
    }
    return result;
}
function decoding_and_RmChecksum(input){
    let result=[];
    let expect_num=''
    let num_part_code=input.substring(1,input.length-1);
    for (var i=0;i<num_part_code.length;i=i+5)
    {
        result.push(num_part_code.substr(i,5))
    }
    result.pop();
    for(var item of result)
    {
        expect_num=expect_num+decoding_rule[item];
    }
    return expect_num;
}
function add_line(string) {
    if(string.length===9)
    {
        return string.substr(0,5)+'-'+string.substr(5,10);
    }
}
function code_num(string) {
    let result;
    result =decoding_and_RmChecksum(string);
    if(result.length===9)
    {
        result=add_line(decoding_and_RmChecksum(string));
    }
    return result;
}
function main(input) {
  
    if(input.length===32||input.length===52)
    {
        return code_num(input);
    }else if(input.length===5||input.length===10)
    {
        return num_code(input);
    }else
    {
        return 'input is illegal!';
    }
}
module.exports = main;
