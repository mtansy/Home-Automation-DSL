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
