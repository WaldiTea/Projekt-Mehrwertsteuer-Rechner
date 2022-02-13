const txtMwstOnElem = document.getElementById('txt-mwst-on');
const amountElem = document.getElementById('input-amount');
const mwstOutElem = document.getElementById('mwst-out');
const txtBruNetElem = document.getElementById('txt-brutto-netto');
const bruNetOutElem = document.getElementById('bru-net-out');

function triggerCalc() {
  var mwsts = Number(document.querySelector('input[name="MwSts"]:checked').value);
  var mwstUp = document.querySelector('input[name="Mwst"]:checked').value;

  if(mwstUp === 'mwstUp') {
    var netTxt = 'Nettobetrag (Preis ohne Mehrwertsteuer)';
    var grossTxt = 'Bruttobetrag (Endpreis)';

    calc(netTxt, grossTxt, mwsts, 100);

  } else {
    var netTxt = 'Bruttobetrag (Preis inklusive Mehrwertsteuer)';
    var grossTxt = 'Nettobetrag';

    calc(netTxt, grossTxt, mwsts, (100 + mwsts));
  }
}

function calc (arg1, arg2, mwsts, tax) {
  txtMwstOnElem.innerHTML = arg1;
  txtBruNetElem.innerHTML = arg2;
  var inputAmount = Number(amountElem.value);

  var mwst = inputAmount * (mwsts / tax);
  var fullAmount = inputAmount + mwst;
  print(mwst, fullAmount);
}

function print(mwst, fullAmount) {
  mwstOutElem.innerHTML = mwst.toFixed(2).replace('.', ',');
  bruNetOutElem.innerHTML = fullAmount.toFixed(2).replace('.', ',');
}
