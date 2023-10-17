// Code Generators
Blockly.JavaScript['if_electricity_cost'] = function(block) {
    const threshold = block.getFieldValue('THRESHOLD');
     const statements = Blockly.JavaScript.statementToCode(block, 'DO');
     return `
       if (current_electricity_cost > ${threshold}) {
         ${statements}
       }
     `;
   };
   
   Blockly.JavaScript['turn_on_essential'] = function(block) {
     return 'turn_on_essential();\n';
   };
 
   Blockly.JavaScript['turn_off_non_essential'] = function(block) {
     return 'turn_off_non_essential_devices();\n';
   };
 
   Blockly.JavaScript['schedule_device_activation'] = function(block) {
     const startTime = block.getFieldValue('START_TIME');
     const endTime = block.getFieldValue('END_TIME');
     return `
       schedule_device_activation('someDevice', '${startTime}', '${endTime}');
     `;
   };
 
    Blockly.JavaScript['location_based_activation'] = function(block) {
        const operator = block.getFieldValue('OPERATOR');
        const threshold = block.getFieldValue('THRESHOLD');
        const distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);

        const statements = Blockly.JavaScript.statementToCode(block, 'DO');

        return `
            if (user_location ${operator === 'LESS' ? '<' : '>'} ${threshold}) {
                ${statements}
            }
        `;
    };