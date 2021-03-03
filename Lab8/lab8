let five = require('johnny-five');

let board = new five.Board();

board.on('ready', () => 
{
	const led = new five.Led(13);
	var blinkCount = 0;
	const blinkMax = 10;

	led.blink(500, () => 
	{
		blinkCount++;

		console.log(`Zhangxin luo have changed state ${blinkCount} times`);

		if (blinkCount >= blinkMax) 
		{
			console.log('Tao He shall stop blinking now');
			led.stop();
		}
	});
});