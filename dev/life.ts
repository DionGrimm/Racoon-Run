/// <reference path="basicObject.ts"/>

class Life extends basicObject {

    constructor (game:Game, height:number) { // Get game, ground height, canvas width, moving speed and type
        super(game)
        this.game = game
        this.hspeed = this.game.objSpeed
        this.x = this.game.canvasWidth
        this.y = height
        this.width = 63
        this.height = 63
        this.Image = <HTMLImageElement>document.getElementById('life')
        this.Sound = <HTMLAudioElement>document.getElementById('Life_pickup')
    }

    update():void {
        this.hspeed = this.game.objSpeed
        // If there is a collision add 1 life
        if (this.game.collision(this)) { 
            this.alive = false
            this.game.lifeCount++
            let sound:HTMLAudioElement = <HTMLAudioElement>document.getElementById('lifeSnd')
            sound.play()
        }

        // Draw
        this.game.ctx.fillStyle = "#00FFFF"  
        super.update()
    }
}