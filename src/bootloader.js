class Bootloader extends Phaser.Scene {
    constructor(){
        super({key: "Bootloader"});
    }
    preload(){
        console.log("Se ha cargado la escena del Boorloader");
    }
}

export default Bootloader;