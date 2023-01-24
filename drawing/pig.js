class Pig{
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
        ctx.strokeStyle = "#FFBBDD";
        ctx.fillStyle = "#FFCCDD";
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
        }

    // lewe ucho
        ctx.beginPath();
        ctx.ellipse(this.x - 38, this.y - 60, 14, 7, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    // prawe ucho
        ctx.beginPath();
        ctx.ellipse(this.x + 38, this.y - 60, 14, 7, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    // głowa
        ctx.beginPath();
        ctx.arc(this.x, this.y, 63, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    // pyszczek
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x, this.y + 20, 30, 0, 2 * Math.PI);
        ctx.stroke();
    // lewa dziurka w nosie
        ctx.beginPath();
        ctx.arc(this.x - 14, this.y + 14, 3, 0, 2 * Math.PI);
        ctx.stroke();
    // prawa dziurka w nosie
        ctx.beginPath();
        ctx.arc(this.x + 14, this.y + 14, 3, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.lineWidth = 5;
        ctx.strokeStyle = "#440F44";
        ctx.fillStyle = "#440F44";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
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
                ctx.arc(this.x, this.y + 30, 7, 0, Math.PI);
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
 
canvas = document.getElementById("pig_canvas");
ctx = canvas.getContext("2d");
const const_pig = new Pig(90, 90, 1);
const_pig.draw(ctx);

function animate_pig(){
    let canvas_animal = document.getElementById("animal_canvas");
    let canvas_box = document.getElementById("box_canvas");
    let ctx_animal = canvas_animal.getContext("2d");
    let ctx_box = canvas_box.getContext("2d");

    let box_speed = 0.025;
    let myPig = new Pig(300, 490, Math.random() > 0.5, 2.2, box_speed);
    myPig.draw(ctx_animal);
    let myBox = new Box(box_speed);
    myBox.draw(ctx_box);

    let updatePig = function(pig){
        requestAnimationFrame(updatePig);
        myPig.update(ctx_animal); 
    }
    let updateBox = function(box){
        requestAnimationFrame(updateBox);
        myBox.update(ctx_box); 
    }

    updatePig();
    updateBox();
}