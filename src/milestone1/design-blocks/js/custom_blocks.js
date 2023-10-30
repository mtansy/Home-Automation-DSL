// Creating blocks

Blockly.Blocks['if_electricity_cost'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("If electricity cost exceeds")
            .appendField(new Blockly.FieldNumber(0, 0, 1000), "THRESHOLD")
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
    }
  };

  Blockly.Blocks['turn_off_non_essential'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn OFF non-essential devices");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
    }
  };

  Blockly.Blocks['schedule_device_activation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Schedule device activation at")
            .appendField(new Blockly.FieldTextInput("00:00"), "START_TIME") // Changed to TextInput
            .appendField("to")
            .appendField(new Blockly.FieldTextInput("00:00"), "END_TIME");  // Changed to TextInput
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
    }
  };

    Blockly.Blocks['location_based_activation'] = {
    init: function() {
      this.appendValueInput("DISTANCE")
        .setCheck("Number")
        .appendField("If distance is")
        .appendField(new Blockly.FieldDropdown([["less than", "LESS"], ["greater than", "GREATER"]]), "OPERATOR")
        .appendField(new Blockly.FieldNumber(0, 0, 1000), "THRESHOLD")
        .appendField("miles from home, then");
      this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("Do:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    }
  };

  Blockly.Blocks['turn_on_essential'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn ON essential devices");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
    }
  };