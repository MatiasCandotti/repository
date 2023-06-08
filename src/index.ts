import { Application, Assets, Container, Sprite} from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x4145ed,
	width: 800,
	height: 600
});

const view = app.view as HTMLCanvasElement;

window.addEventListener("resize", ()=>{
	const scaleX = (window.innerWidth/app.screen.width);
	const scaleY = (window.innerHeight/app.screen.height);
	const scale = Math.min(scaleX, scaleY);

	const displayWidth = Math.round(app.screen.width * scale);
	const displayHeight = Math.round(app.screen.height * scale);

	const marginH = Math.round((window.innerWidth - displayWidth)/2);
	const marginV = Math.round((window.innerHeight - displayHeight)/2);

	/*app.*/view.style!.width = displayWidth + "px";
	/*app.*/view.style!.height = displayHeight + "px";

	

	/*app.*/view.style!.marginLeft = marginH + "px";
	///*app.*/view.style!.marginRight = marginH + "px";

	/*app.*/view.style!.marginTop = marginV + "px";
	///*app.*/view.style!.marginBottom = marginV + "px";
});
window.dispatchEvent(new Event("resize"));

Assets.add("Clampy", "./clampy.png");
Assets.add("myImage", "./image.png");
Assets.add("manImage", "./man.png");
Assets.add("buttonYN", "./buttonYesNo.png");
Assets.add("anchorGlobal", "./manAnchorGlobal.png");
Assets.add("anchorLocal", "./manAnchorLocal.png");

Assets.load(["Clampy","myImage","buttonYN","manImage","anchorGlobal","anchorLocal"]).then( ()=>{
	const clampy: Sprite = Sprite.from("Clampy");
	const image: Sprite = Sprite.from("myImage");
	const buttons: Sprite = Sprite.from("buttonYN");
	const man: Sprite = Sprite.from("manImage");
	const anchorGlobal: Sprite = Sprite.from("anchorGlobal");
	const anchorLocal: Sprite = Sprite.from("anchorLocal");
	
	const buttonManScale = 0.8;
	const anchorRotation = -(3/4)* Math.PI;
	
	console.log("Image size:", image.width, image.height);

	clampy.anchor.set(0.5);
	clampy.x = app.screen.width/2;
	clampy.y = app.screen.height/2;

	app.stage.addChild(clampy);

	image.anchor.set(0.5);
	image.x = (app.screen.width/2);
	image.y = (app.screen.height/2);
	image.rotation = -Math.PI/4;

	app.stage.addChild(image);
	
	const buttonMan: Container = new Container();

	buttonMan.pivot.set(0); //en pixeles
	buttonMan.addChild(man);

	buttons.anchor.set(0);
	buttons.x = -50;
	buttons.y = +50;
	buttons.scale.set(0.5, 0.5);

	buttonMan.addChild(buttons);

	anchorLocal.scale.set(0.5);
	anchorLocal.x = +100;
	anchorLocal.y = +50;
	anchorLocal.rotation = anchorRotation;

	buttonMan.addChild(anchorLocal);

	buttonMan.scale.set(buttonManScale);
	buttonMan.x = (app.screen.width)-man.width*buttonManScale;
	buttonMan.y = (app.screen.height)-man.height*buttonManScale;

	app.stage.addChild(buttonMan);

	const auxPos = anchorLocal.parent.toGlobal(anchorLocal.position);
	console.log("°* position:", auxPos.x, auxPos.y);
	anchorGlobal.x = auxPos.x;
	anchorGlobal.y = auxPos.y;
	anchorGlobal.rotation = anchorRotation;
	anchorGlobal.scale.set(0.5*(buttonManScale));

	app.stage.addChild(anchorGlobal);
})	
//Loader.shared.load();