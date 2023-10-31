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

Blockly.Blocks['adjust_thermostat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set thermostat")
        .appendField(new Blockly.FieldNumber(72, 50, 90), "TEMPERATURE")
        .appendField("°F");
    this.appendDummyInput()
        .appendField("for thermostat")
        .appendField(new Blockly.FieldTextInput("Living Room"), "THERMOSTAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['control_lights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Turn On", "ON"], ["Turn Off", "OFF"]]), "ACTION")
        .appendField("lights in")
        .appendField(new Blockly.FieldTextInput("Living Room"), "ROOM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['lock_unlock_door'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Lock", "LOCK"], ["Unlock", "UNLOCK"]]), "ACTION")
        .appendField("the")
        .appendField(new Blockly.FieldTextInput("Front Door"), "DOOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['security_system_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Arm", "ARM"], ["Disarm", "DISARM"]]), "ACTION")
        .appendField("the security system with code")
        .appendField(new Blockly.FieldTextInput("1234"), "CODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};
