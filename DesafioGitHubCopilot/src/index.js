let cardNumber = '5021 3168 5151 1174';

function validateCreditCard(cardNumber) {
    // Remove espaços do número do cartão de crédito
    cardNumber = cardNumber.replace(/\s+/g, '');

    const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const regexMasterCard = /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/;
    const regexAmericanExpress = /^3[47][0-9]{13}$/;
    const regexDiscover = /^(6011[0-9]{12}|65[0-9]{14}|64[4-9][0-9]{13})$/;
    const regexHipercard = /^6062[0-9]{12}$/;
    const regexDinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    const regexEnRoute = /^(2014|2149)[0-9]{11}$/;
    const regexJCB = /^(?:2131|1800|35\d{3})\d{11}$/;
    const regexVoyager = /^8699[0-9]{11}$/;
    const regexAura = /^50[0-9]{14,17}$/;

    if (regexVisa.test(cardNumber)) {
        return 'Visa';
    } else if (regexMasterCard.test(cardNumber)) {
        return 'MasterCard';
    } else if (regexAmericanExpress.test(cardNumber)) {
        return 'American Express';
    } else if (regexDiscover.test(cardNumber)) {
        return 'Discover';
    } else if (regexHipercard.test(cardNumber)) {
        return 'Hipercard';
    } else if (regexDinersClub.test(cardNumber)) {
        return 'Diners Club';
    } else if (regexEnRoute.test(cardNumber)) {
        return 'EnRoute';
    } else if (regexJCB.test(cardNumber)){
        return 'JCB';
    } else if (regexVoyager.test(cardNumber)) {
        return 'Voyager';
    } else if (regexAura.test(cardNumber)) {
        return 'Aura';
    } else {
        return 'Bandeira não identificada';
    }
}

let cardType = validateCreditCard(cardNumber);
console.log(`A bandeira é: ${cardType}`);