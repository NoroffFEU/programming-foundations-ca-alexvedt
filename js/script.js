const busdriver = "The driver"
const buses = {
    driver: busdriver,
    id: 151,
    color: "green",
    startTime: "13:37",
    isDriving: false,
    capacity: 50,
    passengers: 0,
    destination: "Oslo",
    fuelLevel: 0.75,
    route: "From Rykkinn to",
    schedule: {
        departureTime: "13:30",
        arrivalTime: "15:00",
    },
    ignition: function() {
        bus.on = !bus.on
    }
  }

//   NOTE: First lets get the driver element from the html
const driverEl = document.querySelector("#driver");
//   NOTE: Add our busses driver property to the html
driverEl.append(buses.driver);

// NOTE: Get the is driving elment fomr the html
const isDrivingEl = document.querySelector("#is-driving");
// NOTE: Format is driving to display to the end-user
let displayIsDriving = formatIsDriving(buses.isDriving);
  // NOTE: Add our busses isDriving property to the html but the formatted value
isDrivingEl.append(displayIsDriving);

// Get the `Start driving` button element from the html
const startDrivingEl = document.querySelector("#start-driving");
// Add a click event handler to the `start driving` button when
startDrivingEl.addEventListener("click",() =>{
    // Check if the bus is already driving
    if (buses.isDriving) {
      alert("Bus is already driving");
      //If this happens, dont run code after "return"
      return;
    }
    // Change the bus isdriving property
    buses.isDriving = true;
    // Change the html of the driving element
    isDrivingEl.innerHTML = formatIsDriving(buses.isDriving);
});

/* get the `stop driving` button element from the html
const stopDrivingEl = document.querySelector("#stop-driving");
// Add a click event handler to the `stop driving` button
stopDrivingEl.addEventListener("click", () => {
}

stopDrivingEl.innerHTML = formatIsDriving(buses.isDriving);
*/

// Get the destination element from the HTML.
const destinationEl = document.querySelector("#destination");
// Display the destination from the buses object in your html to the end-user
destinationEl.innerHTML = buses.destination;

// Get route element from html 
const routeEl = document.querySelector("#route");
// Display the route from the buses object in your html to the end-user
routeEl.innerHTML = `${buses.route} ${buses.destination}`;
// Get "enter route" element from html
const enterRouteEl = document.querySelector("#new-route");
// get the "change route" button element from html
const changeRouteEl = document.querySelector("#change-route");
// Add a click event handler to the "change route" button
changeRouteEl.addEventListener("click", () => {
  buses.destination = enterRouteEl.value;
  destinationEl.innerHTML = buses.destination;
  routeEl.innerHTML = `${buses.route} ${buses.destination}`;
})




// --- Helper functions -----

// formats the buses property to be displayed to the end-user
function formatIsDriving(isDriving){
 return isDriving ? "yes" : "no"; 
}







    /*
    toggleDriving: function() {
        this.isDriving = !this.isDriving
        document.getElementById("is-driving").innerHTML = this.isDriving ? "driving" : "not driving";
    },
    pickupPassenger: function() {
        if (this.isDriving) {
            this.passengers += 1
            return console.log(`Picking up passenger. Total passengers: ${this.passengers}`)
        } else {
            return console.log("Cannot pickup passenger while bus is not driving.")
        }
    },
    dropoffPassenger: function() {
        if (this.isDriving) {
            if (this.passengers > 0) {
                this.passengers -= 1;
                return console.log(`Dropping off passenger. Total passengers: ${this.passengers}`)
            } else {
                return console.log("Cannot drop off passenger, bus has no passengers.")
            }
        } else {
            return console.log("Cannot drop off passenger while bus is not driving.")
        }
    },
    changeRoute: function(newRoute) {
        if (!this.isDriving) {
            this.route = newRoute;
            return console.log(`Route changed to: ${this.route}`)
        } else {
            return console.log("Cannot change route while bus is driving.")
        }
    },
    checkFuel: function() {
        return console.log(`Fuel level: ${this.fuelLevel}`)
    },
    checkStatus: function() {
        return console.log(`Bus ${this.id} is currently ${this.isDriving ? "driving" : "not driving"} with ${this.passengers} passengers on route ${this.route}`)
    },
    loginDriver: function(driverName) {
        if (!this.isDriving) {
            this.driver = driverName
            return console.log(`Driver ${this.driver} is logged in.`)
        } else {
            return console.log("Cannot login driver while bus is driving.")
        }
    },
    logoutDriver: function() {
        if (!this.isDriving) {
            this.driver = null
            return console.log(`Driver is logged out.`)
        } else {
            return console.log("Cannot logout driver while bus is driving.")
        }
    },
    showSchedule: function() {
        return console.log(`Bus ${this.id} departs at ${this.schedule.departureTime} and arrives at ${this.schedule.arrivalTime}`);
      }
    */