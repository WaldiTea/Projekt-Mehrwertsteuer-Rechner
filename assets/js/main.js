const mwstUpElem = document.getElementById('input-mwst-up');
const nineteenPercentElem = document.getElementById('nineteen-percent');
const txtMwstOnElem = document.getElementById('txt-mwst-on');
const amountElem = document.getElementById('input-amount');
const mwstOutElem = document.getElementById('mwst-out');
const txtBruNetElem = document.getElementById('txt-brutto-netto');
const bruNetOutElem = document.getElementById('bru-net-out');

function calc() {
  var inputAmount = Number(amountElem.value);
  var mwst, fullAmount;

  function print() {
    mwstOutElem.innerHTML = mwst.toFixed(2).replace('.', ',');
    bruNetOutElem.innerHTML = fullAmount.toFixed(2).replace('.', ',');
  }

  if(mwstUpElem.checked) {
    txtMwstOnElem.innerHTML = 'Nettobetrag (Preis ohne Mehrwertsteuer)';
    txtBruNetElem.innerHTML = 'Bruttobetrag (Endpreis)';

    if(nineteenPercentElem.checked) {
      mwst = inputAmount * (19 / 100);
      fullAmount = inputAmount + mwst;
      print();
    } 
    else {
      mwst = inputAmount * (7 / 100);
      fullAmount = inputAmount + mwst;
      print();
    }

  } else {
    txtMwstOnElem.innerHTML = 'Bruttobetrag (Preis inklusive Mehrwertsteuer)';
    txtBruNetElem.innerHTML = 'Nettobetrag';

    if(nineteenPercentElem.checked) {
      mwst = inputAmount * (19 / 119);
      fullAmount = inputAmount - mwst;
      print();
    } else {
      mwst = inputAmount * (7 / 107);
      fullAmount = inputAmount - mwst;
      print();
    }
  }
}
