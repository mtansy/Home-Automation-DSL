// Code Generators
   
Blockly.JavaScript['turn_on_essential'] = function(block) {
  return 'turn_on_essential();\n';
};

Blockly.JavaScript['turn_off_non_essential'] = function(block) {
  return 'turn_off_non_essential_devices();\n';
};


Blockly.JavaScript['location_based_activation'] = function(block) {
  const operator = block.getFieldValue('OPERATOR');
  const threshold = block.getFieldValue('THRESHOLD');
  const actions = Blockly.JavaScript.statementToCode(block, 'DO').trim();

  // Create the code string
  const code = `locationBasedActivation('${operator}', ${threshold}, '${actions}');\n`;
  return code;
};


Blockly.JavaScript['if_electricity_cost'] = function(block) {
  const threshold = block.getFieldValue('THRESHOLD');
  const location = block.getFieldValue('LOCATION');
  const devices = Blockly.JavaScript.statementToCode(block, 'DEVICES').trim().split('\n');
  const actions = Blockly.JavaScript.statementToCode(block, 'DO').trim();
  return `handleElectricityCost(${threshold}, '${actions}', '${location}', [${devices.map(device => `'${device}'`).join(', ')}]);\n`;
};


Blockly.JavaScript['security_system_control'] = function(block) {
  const action = block.getFieldValue('ACTION');
  const code = block.getFieldValue('CODE');
  return `securitySystemControl('${action}ED', '${code}');\n`;
};

Blockly.JavaScript['schedule_device_activation'] = function(block) {
  const startTime = block.getFieldValue('START_TIME');
  const endTime = block.getFieldValue('END_TIME');
  return `scheduleDeviceActivation('${startTime}', '${endTime}');\n`; // Replace 'DeviceName' with actual device
};

// Blockly.JavaScript['set_temperature'] = function(block) {
//   const temperature = block.getFieldValue('TEMP');

//   return `adjustThermostat(${temperature});\n`;
// };

Blockly.JavaScript['set_temperature'] = function(block) {
  const temperature = block.getFieldValue('TEMP');
  const code = `
  adjustThermostat(${temperature});
  fetch('http://localhost:3000/send-sms', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Temperature set to ${temperature}°F' })
  });
  `;
  return code;
};

Blockly.JavaScript['smart_plug_control'] = function(block) {
  const action = block.getFieldValue('ACTION');
  const name = block.getFieldValue('NAME');
  return `smartPlugControl('${action}', '${name}');\n`;
};

Blockly.JavaScript['control_lights'] = function(block) {
  const action = block.getFieldValue('ACTION');
  const room = block.getFieldValue('ROOM');
  return `controlLights('${action}', '${room}');\n`;
};

Blockly.JavaScript['lock_unlock_door'] = function(block) {
  const action = block.getFieldValue('ACTION');
  const door = block.getFieldValue('DOOR');
  return `lockUnlockDoor('${action}', '${door}');\n`;
};


// DEVICES
Blockly.JavaScript['amazon_alexa'] = function(block) {
  // Example: Log a message or call a function related to Amazon Alexa
  return 'Amazon Alexa\n';
};
Blockly.JavaScript['philips_lightbulb'] = function(block) {
  // Example: Log a message or call a function related to Philips Lightbulbs
  return 'Philips Lightbulb\n';
};
Blockly.JavaScript['curtains'] = function(block) {
  // Example: Log a message or call a function related to Curtains
  return 'Curtains\n';
};
Blockly.JavaScript['smart_plugs'] = function(block) {
  // Example: Log a message or call a function related to Smart Plugs
  return 'Smart Plugs\n';
};


