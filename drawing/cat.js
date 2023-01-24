class Cat{
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
        ctx.strokeStyle = "#CD853F";
        ctx.fillStyle = "#F4A460";
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
        }

    // lewe ucho
        ctx.beginPath();
        ctx.moveTo(this.x - 60, this.y - 75);
        ctx.lineTo(this.x + 20, this.y - 40);
        ctx.lineTo(this.x - 60, this.y);
        ctx.lineTo(this.x - 60, this.y - 70);
        ctx.stroke();
        ctx.fill();
    // prawe ucho
        ctx.beginPath();
        ctx.moveTo(this.x + 60, this.y - 75);
        ctx.lineTo(this.x - 20, this.y - 40);
        ctx.lineTo(this.x + 60, this.y);
        ctx.lineTo(this.x + 60, this.y - 70);
        ctx.stroke();
        ctx.fill();

        
        ctx.strokeStyle = "lightpink";
        ctx.fillStyle = "pink";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
        }
    // lewe ucho rozowe
        ctx.beginPath();
        ctx.moveTo(this.x - 53, this.y - 65);
        ctx.lineTo(this.x + 10, this.y - 30);
        ctx.lineTo(this.x - 50, this.y);
        ctx.lineTo(this.x - 53, this.y - 65);
        ctx.stroke();
        ctx.fill();
    // prawe ucho rozowe
        ctx.beginPath();
        ctx.moveTo(this.x + 53, this.y - 65);
        ctx.lineTo(this.x - 10, this.y - 30);
        ctx.lineTo(this.x + 50, this.y);
        ctx.lineTo(this.x + 53, this.y - 65);
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = "#CD853F";
        ctx.fillStyle = "#F4A460";
        ctx.lineWidth = 7;
        ctx.lineCap = "round";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "lightgray";
        }
    // głowa
        ctx.beginPath();
        ctx.arc(this.x, this.y, 63, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

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
                ctx.strokeStyle = "sienna";
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
        ctx.strokeStyle = "lightpink";
        ctx.fillStyle = "lightpink";
        if(!this.dead_or_alive){
            ctx.strokeStyle = "silver";
            ctx.fillStyle = "silver";
        }
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y + 19.6, 16.8, Math.PI/4*5, 7 / 4 * Math.PI);
        ctx.lineTo(this.x, this.y + 19.6)
        ctx.lineTo(this.x - 11.9, this.y + 7)
        ctx.stroke();
        ctx.fill();

    // łatki
        // srodkowa
            ctx.lineWidth = 5;
            ctx.fillStyle = "#FFF8DC";
            ctx.strokeStyle = "#DDD8BC";
            if(!this.dead_or_alive){
                ctx.strokeStyle = "gainsboro";
                ctx.fillStyle = "gainsboro";
            }
            ctx.beginPath();
            ctx.arc(this.x, this.y, 62, Math.PI*7.2/5, 4.905);
            ctx.lineTo(this.x, this.y - 20);
            ctx.lineTo(this.x - 14, this.y - 60);
            ctx.stroke();
            ctx.fill();
        // lewa
            ctx.beginPath();
            ctx.arc(this.x, this.y, 62, Math.PI*6.5/5, 4.3);
            ctx.lineTo(this.x - 20, this.y - 30);
            ctx.lineTo(this.x - 37.8, this.y - 49);
            ctx.stroke();
            ctx.fill();
        // prawa
            ctx.beginPath();
            ctx.arc(this.x, this.y, 62, Math.PI*8.1/5, 5.285);
            ctx.lineTo(this.x + 17, this.y - 30);
            ctx.lineTo(this.x + 21, this.y - 59);
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
canvas = document.getElementById("cat_canvas");
ctx = canvas.getContext("2d");

const const_cat = new Cat(90, 90, 1);
const_cat.draw(ctx);

function animate_cat(){
    let canvas_animal = document.getElementById("animal_canvas");
    let canvas_box = document.getElementById("box_canvas");
    let ctx_animal = canvas_animal.getContext("2d");
    let ctx_box = canvas_box.getContext("2d");

    let box_speed = 0.025;
    let myCat = new Cat(300, 490, Math.random() > 0.5, 2.2, box_speed);
    myCat.draw(ctx_animal);
    let myBox = new Box(box_speed);
    myBox.draw(ctx_box);

    let updateCat = function(cat){
        requestAnimationFrame(updateCat);
        myCat.update(ctx_animal); 
    }
    let updateBox = function(box){
        requestAnimationFrame(updateBox);
        myBox.update(ctx_box); 
    }

    updateCat();
    updateBox();
}