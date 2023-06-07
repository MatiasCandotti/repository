import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x4145ed,
	width: 800,
	height: 600
});

window.addEventListener("resize", ()=>{
	const scaleX = (window.innerWidth/app.screen.width);
	const scaleY = (window.innerHeight/app.screen.height);
	const scale = Math.min(scaleX, scaleY);

	const displayWidth = Math.round(app.screen.width * scale);
	const displayHeight = Math.round(app.screen.height * scale);

//	const marginH = Math.round((window.innerWidth - displayWidth)/2);
//	const marginV = Math.round((window.innerHeight - displayHeight)/2);

	app.view.style!.width = displayWidth + "px";
	app.view.style!.height = displayHeight + "px";

//	app.view.style!.marginLeft = marginH + "px";
//	app.view.style!.marginRight = marginH + "px";

//	app.view.style!.marginTop = marginV + "px";
//	app.view.style!.marginBottom = marginV + "px";
});
window.dispatchEvent(new Event("resize"));

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