class Box{
    constructor(speed){
        this.current_angle_left = 0;
        this.current_angle_right = Math.PI;
        this.speed = speed;

        this.radius = 120;
        this.d_an_left = - this.speed;
        this.d_an_right =   this.speed;
    }
    get_angle_left(){
        return this.current_angle_left;
    }
    get_angle_right(){
        return this.current_angle_right;
    }
    get_x(angle){
        return this.radius * Math.cos(angle);
    }
    get_y(angle){
        return this.radius * Math.sin(angle);
    }
    get_d_ang_left(){
        return this.d_an_left;
    }
    get_d_ang_right(){
        return this.d_an_right;
    }
    draw(ctx) {
        ctx.strokeStyle = "#B0916E";
        ctx.fillStyle = "#C0A78B";
        ctx.lineWidth = 7;
        ctx.lineCap = "round";

    // pudełko
        ctx.beginPath();
        ctx.moveTo(180, 400);
        ctx.lineTo(420, 400);
        ctx.lineTo(420, 580);
        ctx.lineTo(180, 580);
        ctx.lineTo(180, 400);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(180, 400);
        ctx.lineTo(420, 400);
        ctx.lineTo(420, 580);
        ctx.lineTo(180, 580);
        ctx.lineTo(180, 400);
        ctx.stroke();
    // lewe wieczko
        ctx.beginPath();
        ctx.moveTo(180, 400);
        ctx.lineTo(180+this.get_x(this.current_angle_left), 400+this.get_y(this.current_angle_left));
    // prawe wieczko
        ctx.moveTo(420, 400);
        ctx.lineTo(420+this.get_x(this.current_angle_right), 400+this.get_y(this.current_angle_right));
        ctx.stroke();
    
    
    }
    update(ctx){
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.draw(ctx);

        if(this.current_angle_left <= -(4 * Math.PI / 3) && this.d_an_left < 0){
            this.d_an_left = - this.d_an_left;
            this.d_an_right = - this.d_an_right;
        }
        else if(this.current_angle_left > 0 && this.d_an_left > 0){
            this.d_an_left =  - this.d_an_left;
            this.d_an_right =  - this.d_an_right;
        }

        this.current_angle_left += this.d_an_left;
        this.current_angle_right += this.d_an_right;
    }
}