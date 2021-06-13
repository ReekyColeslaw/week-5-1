//start button
function start() {
    console.log("start button pushed");
    //loads data
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    //turns off start button
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//stop button
function stop() {
    clearInterval(timer);
    console.log("stop button pushed");
    //turns off stop button
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;


}

function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}

//plays music
function playStation() {
    console.log("playStation() started");
    //locates song to play
    mySound = new sound("star_wars_disco.mp3")
    mySound.play();
}

//creates perameters for music
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

//better countdown timer with loops
function btrCountdownTimer() {
    //Sets the countdown to 10
    var count = 10;

    //creates a loop where on click it counts down from 10
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = count;
            count--;
            //sets the timer to count down every 1 second
        }, 1000 * i);
    }

    //when timere runs out displays blastoff
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
    }, 10000);
}

//adds Warning Less than ½ way to launch, time left = at 5 seconds
function evenBtrCountdownTimer() {
    //Sets the countdown to 10
    var count = 10;

    //creates a loop where on click it counts down from 10
    for (var i = 0; i < 11; i++) {

        //displays blastoff when timer runs out
        if (i == 10) {
            //displays the timer
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
                //countsdown by 1 second
            }, i * 1000);
            //displays warning when less then half time remains
        } else if (i > 4) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
                //countsdown by 1 second
            }, i * 1000);
            //displays normal count when above 5 seconds
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = count;
                count--;
                //countsdown by 1 second
            }, i * 1000);
        }
    }
}


//wk1-2 countdown timer should run 10....1 then blastoff
function startCountdown() {
    var count = 10;
    //the countdown timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //the countdown timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //after 2 sec, will run code in here
        //the countdown timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 2
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //after 3 sec, will run code in here
        //the countdown timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 3
        count = count - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //after 4 sec, will run code in here
        //the countdown timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 4
        count = count - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //after 5 sec, will run code in here
        //the countdown timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 5
        count = count - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //after 6 sec, will run code in here
        //the countdown timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 6
        count = count - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //after 7 sec, will run code in here
        //the countdown timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 7
        count = count - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //after 8 sec, will run code in here
        //the countdown timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 8
        count = count - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //after 9 sec, will run code in here
        //the countdown timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 9
        count = count - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //after 10 sec, will run code in here
        //the countdown timer should display Blastoff
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000); //display Blastoff text
}

//function to play craps
function playCraps() {
    //start the game of craps
    console.log("playCraps has started");
    //sets the variable for the first die
    var die1;
    //rolls the first die
    die1 = Math.ceil(Math.random() * 6);
    //displays the results of the rolled die
    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1;
    //sets the variable for the second die
    var die2;
    //rolls the sceond die
    die2 = Math.ceil(Math.random() * 6);
    //displays the results of the rolled die
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2;
    var dieSum = die1 + die2;
    //displays the results of both rolled die
    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is: " + dieSum;
    //displays the lose condition
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!!!";
        //displays the win condition
    } else if (die1 == die2 && die2 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Hurray!! Doubles! You Win!!";
        //displays the re roll condition
    } else {
        document.getElementById("crapsResults").innerHTML = "Please try again.";
    }

}
//defines input data
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,

    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;

    }
}