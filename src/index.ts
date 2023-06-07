import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("Clampy", "./clampy.png");
Assets.add("myImage", "./image.png");
Assets.add("manImage", "./man.png");
Assets.add("buttonYN", "./buttonYesNo.png");

Assets.load(["Clampy","myImage","buttonYN","manImage"]).then( ()=>{
	const clampy: Sprite = Sprite.from("Clampy");
	const image: Sprite = Sprite.from("myImage");
	const buttons: Sprite = Sprite.from("buttonYN");
	const man: Sprite = Sprite.from("manImage");
	
	console.log("Image size:", image.width, image.height);

	clampy.anchor.set(0.5);
	clampy.x = app.screen.width/2;
	clampy.y = app.screen.height/2;

	image.anchor.set(0.5);
	image.x = (app.screen.width/2);
	image.y = (app.screen.height/2);

	man.anchor.set(1);
	man.x = (app.screen.width);
	man.y = (app.screen.height);

	buttons.x = 0;
	buttons.y = (app.screen.height/8);
	
	app.stage.addChild(clampy);
	app.stage.addChild(image);
	app.stage.addChild(man);
	app.stage.addChild(buttons);
})	
//Loader.shared.load();