function translate(sentence) {
    return sentence
        .split(/(\s+)/)
        .filter( function(e) { return e.trim().length > 0; } )
        .map(s => IgpayOkentay.actoryfay(s)).join(' ');
};

// https://regex101.com/r/EupKn3/1
const RE = /([bcdfghjklmnpqrstvwxys]*)([aeiou]?[a-zA-Z]*)(\W*)/i;

class IgpayOkentay {
    constructor(raw) {
        let r = RE.exec((raw.trim()));
        this.irstfay = (r[1] === undefined) ? '' : r[1];
        this.estray = r[2];
        this.unctpay = r[3];
        this.apitalizecay = (
            (this.irstfay.length !== 0 )) &&
            (this.irstfay.charAt(0) === this.irstfay.charAt(0).toUpperCase());
        this.vowelled = /[aeiou]+.*[aeiou]?/iy.test(raw.trim());
    }

    arsepay() {
        let okentay = `${this.estray}${this.irstfay}${this.endway()}${this.unctpay}`;
        if (this.apitalizecay) {
            okentay = okentay.charAt(0).toUpperCase() + okentay.slice(1).toLowerCase();
        }
        return okentay
    }

    endway() {
        return this.vowelled ? "way" : "ay";
    }

    static actoryfay(awray) {
        let iggypay = new IgpayOkentay(awray);
        return iggypay.arsepay();
    }
}

module.exports = { translate }

