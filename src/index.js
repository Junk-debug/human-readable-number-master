module.exports = function toReadable(n) {
    if (n === 0) return 'zero';
    let num = n.toString();
    const simple = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve'
    ];
    const base = [
        0,
        1,
        'twen',
        'thir',
        'for',
        'fif',
        'six',
        'seven',
        'eigh',
        'nine',
    ];
    function fromZeroToHundred(n) {
        n = +n;
        let num = n.toString();
        if (n < 13) return simple[n];
        if (n == 14) return simple[num[1]] + 'teen';
        if (n < 20) return base[num[1]] + 'teen';
        if (n < 100) return base[num[0]] + 'ty' + ' ' + simple[num[1]];
    };

    if (n < 100) return fromZeroToHundred(n).trim();
    if (n < 1000) return (simple[num[0]] + ' hundred' + ' ' + fromZeroToHundred(num.slice(1))).trim();
};
