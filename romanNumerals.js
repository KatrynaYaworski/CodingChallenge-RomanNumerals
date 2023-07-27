function toRoman(num){
    let result = ''

    const numerals = [
        {value:1000, symbol:'M'},
        {value:500, symbol:'D'},
        {value:100, symbol:'C'},
        {value:50, symbol:'L'},
        {value:10, symbol:'X'},
        {value:5, symbol:'V'},
        {value:1, symbol:'I'},
    ];

    if (num <= 0 || num > 1000){
        return ('Number must be between 1 and 1000')
    }

    for (const numeral of numerals){
        while (num >= numeral.value){
            result += numeral.symbol;
            num -= numeral.value;
        }
    }
    return result
}