var five = require("johnny-five"),
  board, button,photoresistor;

board = new five.Board();

const http = require('http')

var transData;

board.on("ready", function() {

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A0",
    freq: 1000
  });

  // Inject the 'sensor' hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: photoresistor
  });

  // Attached to pin 2 and set a property parameter of 'isPulldown'
  button = new five.Button({
    pin: "2",
    isPulldown: true
  });

  // Convert a JavaScript object into a string of JSON 
  button.on("down", function() {
    var data = JSON.stringify({
      value: transData,
      timestamp: (new Date()).valueOf()
    });

    // A POST request by using the Node standard modules
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/readings',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    }

    const req = http.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`)

      res.on('data', (d) => {
        process.stdout.write(d)
      })
    })

    req.on('error', (error) => {
      console.error(error);
    })

    req.write(data);
    req.end();
    
  })

  button.on("up", function(value) {  
  });

  photoresistor.on("data", function() 
  {
    transData=this.value;
  });
});