 // Simulate Backend Data
 var current_electricity_cost = Math.random() * 100;  // random electricity cost
 var user_location = Math.random() * 10;  // random user location (distance in miles)

 var actionLog = []; // array to store logs

 // Simulated Backend Functions
 function turn_on_essential() {
   console.log("Turning on essential devices");
 }

 function turn_off_non_essential_devices() {
   console.log("Turning off non-essential devices");
 }

 function scheduleDeviceActivation(startTime, endTime) {
  console.log(`Scheduled to turn on at ${startTime} and off at ${endTime}.`);
}


function locationBasedActivation(operator, threshold, action) {
  console.log(`Location-based activation: ${action} when user is ${operator} than ${threshold} miles from home.`);
}


function handleElectricityCost(threshold, actions, location, devices) {
  let deviceList = devices.join(', ');
  console.log(`Electricity cost is over ${threshold}. Actions: ${actions} in ${location} for devices: ${deviceList}.`);
}


function securitySystemControl(action, code) {
  console.log(`Home security system ${action} with code ${code}.`);
}
function adjustThermostat(temperature) {
  console.log(`Set thermostat to ${temperature}°F.`);
}

function smartPlugControl(action, plugName) {
  console.log(`Smart plug '${plugName}' turned ${action}.`);
}

function controlLights(action, room) {
  console.log(`Turned ${action} lights in ${room}.`);
}

function lockUnlockDoor(action, door) {
  console.log(`${action}ED the ${door}.`);
}

function garageDoor(action) {
  console.log(`${action}ED the garage door.`);
}


// logging function
function logAction(actionDescription) {
  var timestamp = new Date().toISOString();
  var logEntry = `${timestamp}: ${actionDescription}`;
  actionLog.push(logEntry);
  console.log(logEntry);
}
