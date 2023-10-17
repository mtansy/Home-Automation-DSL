 // Simulate Backend Data
 var current_electricity_cost = Math.random() * 100;  // Simulate a random electricity cost
 var user_location = Math.random() * 10;  // Simulate a random user location distance in miles

 // Simulated Backend Functions
 function turn_on_essential() {
   console.log("Turning on essential devices");
 }

 function turn_off_non_essential_devices() {
   console.log("Turning off non-essential devices");
 }

 function schedule_device_activation(device, startTime, endTime) {
   console.log(`Scheduled ${device} to turn on at ${startTime} and off at ${endTime}`);
 }
