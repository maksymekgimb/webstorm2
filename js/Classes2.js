class Room {
    width = 200;
    legth = 220;
    desk = false;
    space = function () {
        return this.width * this.length;

    }
    display = function () {
        console.log(`szerokość ${this.width}, długość ${this.legth};
            powierzchnia ${this.space() }, czy ma biurko ${this.desk}`  );
    }
}

const room = new Room();
console.log(room.display());