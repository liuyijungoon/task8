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
        console.log(item);
        result=result+coding_rule[item]
    }
    result=result+'|';
    return result;
}
function main(input){
      coding_rule={'0':'||:::',
    '1':':::||',
    '2':'::|:|',
    '3':'::||:',
    '4':':|::|',
    '5':':|:|:',
    '6':':||::',
    '7':'|:::|',
    '8':'|::|:',
    '9':'|:|::'};
decoding_rule={'||:::':'0',
    ':::||':'1',
    '::|:|':'2',
    '::||:':'3',
    ':|::|':'4',
    ':|:|:':'5',
    ':||::':'6',
    '|:::|':'7',
    '|::|:':'8',
    '|:|::':'9'};
    var after_check=calculate_checksum(input);
    return  coding(after_check);
}

module.exports = main;
