import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

//Loader.shared.add({url:"./image.png", name: "myImage"});
//Loader.shared.add({url:"./clampy.png", name: "Clampy"});
Assets.add("Clampy", "./clampy.png");
Assets.add("myImage", "./image.png");

//Loader.shared.onComplete.add(()=>{
Assets.load(["Clampy","myImage"]).then( ()=>{
	const clampy: Sprite = Sprite.from("Clampy");
	const image: Sprite = Sprite.from("myImage");
	
	console.log("Image size:", image.width, image.height);

	clampy.anchor.set(0.5);
	clampy.x = app.screen.width / 2;
	clampy.y = app.screen.height / 2;

	image.x = 0;
	image.y = 0;
	
	app.stage.addChild(clampy);
	app.stage.addChild(image);
})	
//Loader.shared.load();