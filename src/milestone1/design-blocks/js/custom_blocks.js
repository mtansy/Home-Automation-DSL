
// Creating blocks

Blockly.Blocks['if_electricity_cost'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("If ELECTRICITY COST is over")
          .appendField(new Blockly.FieldNumber(0, 0, 1000), "THRESHOLD");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("Do:");
      this.appendDummyInput()
          .appendField("Location:")
          .appendField(new Blockly.FieldDropdown([["Bedroom", "BEDROOM"], ["Living Room", "LIVING_ROOM"], ["Kitchen", "KITCHEN"]]), "LOCATION");
      this.appendDummyInput()
          .appendField("Devices:");
      this.appendStatementInput("DEVICES")
          .setCheck(null);
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
        .appendField("miles from home");
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


// New block: allows turning a smart plug on or off
Blockly.Blocks['smart_plug_control'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Turn")
      .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "ACTION")
      .appendField("smart plug")
      .appendField(new Blockly.FieldTextInput("Living Room Lamp"), "NAME");
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
        .appendField(new Blockly.FieldDropdown([["Front Door", "FRONT DOOR"], ["Back Door", "BACK DOOR"], ["Bedroom", "BEDROOM"]]), "DOOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['security_system_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ARM", "ARM"], ["DISARM", "DISARM"]]), "ACTION")
        .appendField("home security system. CODE: ")
        .appendField(new Blockly.FieldTextInput("1234"), "CODE");
    this.setColour(230);
    this.setTooltip("Control the home security system");
    this.setHelpUrl(""); // Optionally, set a URL for help documentation
  }
};


// Amazon Alexa Block
Blockly.Blocks['amazon_alexa'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Amazon Alexa");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
  }
};

// Philips Lightbulb Block
Blockly.Blocks['philips_lightbulb'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Philips Lightbulb");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
  }
};

// Curtains Block
Blockly.Blocks['curtains'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Curtains");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
  }
};

// Smart plugs
Blockly.Blocks['smart_plugs'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Smart Plugs");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
  }
};

Blockly.Blocks['curtains_control'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Curtains")
          .appendField(new Blockly.FieldDropdown([["Open", "OPEN"], ["Close", "CLOSE"]]), "ACTION")
          .appendField("in")
          .appendField(new Blockly.FieldDropdown([["Bedroom", "BEDROOM"], ["Living Room", "LIVING_ROOM"]]), "LOCATION");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
  }
};


Blockly.Blocks['set_temperature'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Set Home temperature to")
          .appendField(new Blockly.FieldNumber(70, 60, 90), "TEMP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
  }
};

Blockly.Blocks['alarm_control'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Alarm")
          .appendField(new Blockly.FieldDropdown([["Turn On", "ON"], ["Turn Off", "OFF"]]), "ACTION");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
  }
};

Blockly.Blocks['garage_control'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Garage Door")
          .appendField(new Blockly.FieldDropdown([["Open", "OPEN"], ["Close", "CLOSE"]]), "ACTION");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
  }
};
