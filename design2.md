# DSL Design for Smart Home Automation

## Block: If Electricity Cost Exceeds Threshold
- **Description:** This block allows users to define a rule based on electricity cost.
- **Semantics:** When this block is used, the DSL will monitor electricity cost in real-time. If the cost exceeds the user-defined threshold, it will execute the associated actions.
- **Code Execution:**
  ```python
  if current_electricity_cost > user_defined_threshold:
      # Execute actions specified in the associated block
      turn_off_non_essential_devices()

## Block: Turn Off Non-Essential Devices
- **Description:** This block specifies actions to be taken when electricity costs exceed the threshold.
- **Semantics:** When triggered, this block will turn off non-essential smart home devices to reduce energy consumption.
- **Code Execution:**
  ```python
  def turn_off_non_essential_devices():
    for device in smart_home_devices:
        if device.type != "essential":
            device.turn_off()

## Block: Schedule Device Activation
- **Description:** This block allows users to schedule when specific devices should be turned on or off.
- **Semantics:** Users can define schedules for devices to automatically activate or deactivate at specified times.
- **Code Execution:**
  ```python
  def schedule_device_activation(device, activation_time, deactivation_time):
      if current_time == activation_time:
          device.turn_on()
      elif current_time == deactivation_time:
          device.turn_off()

## Block: Location-Based Activation
- **Description:** This block enables location-based triggers for devices.
- **Semantics:** Users can set specific devices to activate when they approach or leave a certain distance from their home.
- **Code Execution:**
  ```python
  def location_based_activation(device, distance_threshold, user_location):
      if calculate_distance(user_location, home_location) <= distance_threshold:
          device.turn_on()
      else:
          device.turn_off()

## Example Use Case for Recursive Program
- **Description:** There are many different recursive programs that can be used in Blockly to create infinitely many complex programs from a small number of building blocks. One of the prime examples of this is calculating factorials, shown below:
- **Code Execution:** 
    '''python 
    Function factorial(n)
    If n = 0
        Return 1
    Else
        Return n * factorial(n - 1)

## Data 
- **Data Our Project Needs to Maintain:** Some data that our project woul dneed to maintain could include user-defined thresholds, device information, and electricity cost data. A simple database example is shown below.
- **Table:** 
    Users | Devices | ElectricityCost($/month)
    --- | --- | ---
    1   | Amazon Alexa | 3
