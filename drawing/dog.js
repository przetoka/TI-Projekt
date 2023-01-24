class Dog{
    constructor(x, y, dead_or_alive, speed, box_speed){
        this.x = x;
        this.y = y;
        this.dead_or_alive = dead_or_alive;
        this.speed = speed;
        this.height = 0;
        this.dy = - this.speed;
        this.box_speed = - box_speed;
    }
    draw(ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.save();

        ctx.strokeStyle = "#8C4834";
        ctx.fillStyle = "#A0522D";
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
        }

        ctx.save();

    // lewe ucho
        ctx.beginPath();
        ctx.moveTo(this.x - 65, this.y - 44);
        ctx.lineTo(this.x - 63, this.y);
        ctx.lineTo(this.x +40, this.y + 10);
        ctx.lineTo(this.x - 17, this.y - 68);
        ctx.lineTo(this.x - 65, this.y - 44);
        ctx.stroke();
        ctx.fill();
    // prawe ucho
        ctx.beginPath();
        ctx.moveTo(this.x + 65, this.y - 44);
        ctx.lineTo(this.x + 63, this.y);
        ctx.lineTo(this.x - 40, this.y + 10);
        ctx.lineTo(this.x + 17, this.y - 68);
        ctx.lineTo(this.x + 65, this.y - 44);
        ctx.stroke();
        ctx.fill();

    // głowa
        ctx.beginPath();
        ctx.arc(this.x, this.y, 63, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    // latka
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#DDA987";
        ctx.fillStyle = "#DEC8A7";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "gainsboro";
            ctx.fillStyle = "gainsboro";
        }
        ctx.beginPath();
        ctx.arc(this.x + 28, this.y - 10, 20, Math.PI/2, Math.PI*3 / 2);
        // ctx.arc(this.x + 35, this.y - 14, 6.3, Math.PI, Math.PI*3);
        ctx.lineTo(this.x + 28, this.y - 2.8);
        ctx.lineTo(this.x + 32.2, this.y - 4.9);
        ctx.arc(this.x + 28, this.y + 2.8, 9, Math.PI, Math.PI*3);
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 5;
        ctx.strokeStyle = "#440F44";
        ctx.fillStyle = "#440F44";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "silver";
        }
        if(this.dead_or_alive){
            // lewe oko
                ctx.beginPath();
                ctx.ellipse(this.x - 28, this.y - 17.5, 0.7, 2.1, 0, 0, 2 * Math.PI);
                ctx.stroke();
            // prawe oko
                ctx.beginPath();
                ctx.ellipse(this.x + 28, this.y - 17.5, 0.7, 2.1, 0, 0, 2 * Math.PI);
                ctx.stroke();
            
            // buzia
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x,this.y + 19.6)
                ctx.lineTo(this.x, this.y + 40)
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x - 7, this.y + 40, 7, 0, Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(this.x + 14,this.y + 40);
                ctx.arc(this.x + 7, this.y + 40, 7, 0, Math.PI);
                ctx.stroke();
            }
            else{
            // lewe oko
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x - 20, this.y - 20);
                ctx.lineTo(this.x - 30, this.y - 10);
                ctx.moveTo(this.x - 20, this.y - 10);
                ctx.lineTo(this.x - 30, this.y - 20);
                ctx.stroke();
            // prawe oko
                ctx.beginPath();
                ctx.moveTo(this.x + 20, this.y - 20);
                ctx.lineTo(this.x + 30, this.y - 10);
                ctx.moveTo(this.x + 20, this.y - 10);
                ctx.lineTo(this.x + 30, this.y - 20); 
                ctx.stroke();
            }
    // nosek
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y + 19.6, 16.8, Math.PI/4*5, 7 / 4 * Math.PI);
        ctx.lineTo(this.x, this.y + 19.6)
        ctx.lineTo(this.x - 11.9, this.y + 7)
        ctx.stroke();
        ctx.fill();


        
        ctx.strokeStyle = "#8C4834";
        ctx.fillStyle = "#A0522D";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
        }

        ctx.lineWidth = 8;
    // lewe ucho
        ctx.beginPath();
        ctx.moveTo(this.x - 65, this.y - 44);
        ctx.lineTo(this.x - 37, this.y - 15);
        ctx.lineTo(this.x - 21, this.y - 65);
        ctx.lineTo(this.x - 65, this.y - 44);
        ctx.stroke();
        ctx.fill();
    // prawe ucho
        ctx.beginPath();
        ctx.moveTo(this.x + 65, this.y - 44);
        ctx.lineTo(this.x + 37, this.y - 15);
        ctx.lineTo(this.x + 21, this.y - 65);
        ctx.lineTo(this.x + 65, this.y - 44);
        ctx.stroke();
        ctx.fill();
    }



    update(ctx){
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.draw(ctx);

        if(this.height <= -(4 * Math.PI / 3)/2 && this.box_speed < 0){
            this.dy = - this.dy;
            this.box_speed = - this.box_speed;
        }
        else if(this.height > 0 && this.box_speed > 0){
            this.dy = - this.dy;
            this.box_speed = - this.box_speed;
            this.dead_or_alive = Math.random() > 0.5;
        }
        
        this.y += this.dy;
        this.height += this.box_speed;
    }
}

let canvas = document.getElementById("dog_canvas");
let ctx = canvas.getContext("2d");
const const_dog = new Dog(90, 90, 1, 0, 0);
const_dog.draw(ctx);



function animate_dog(){
    let canvas_animal = document.getElementById("animal_canvas");
    let canvas_box = document.getElementById("box_canvas");
    let ctx_animal = canvas_animal.getContext("2d");
    let ctx_box = canvas_box.getContext("2d");

    let box_speed = 0.025;
    let myDog = new Dog(300, 490, Math.random() > 0.5, 2.2, box_speed);
    myDog.draw(ctx_animal);
    let myBox = new Box(box_speed);
    myBox.draw(ctx_box);

    let updateDog = function(dog){
        requestAnimationFrame(updateDog);
        myDog.update(ctx_animal); 
    }
    let updateBox = function(box){
        requestAnimationFrame(updateBox);
        myBox.update(ctx_box); 
    }

    updateDog();
    updateBox();
}