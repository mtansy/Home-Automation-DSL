function generateCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codeDiv').innerText = code;
}

function runCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  var outputDiv = document.getElementById('outputDiv');
  try {
      console.oldLog = console.log;
      console.log = function(message) {
          outputDiv.innerHTML += message + '<br>';
      };
      eval(code);
      console.log = console.oldLog;
  } catch (e) {
      outputDiv.innerText = 'Error: ' + e;
  }
}

function saveCode() {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  var blob = new Blob([code], { type: 'text/javascript' });
  var a = document.createElement('a');
  a.download = 'home_automation.js'; // Specify the desired file name with a .js extension
  a.href = URL.createObjectURL(blob);
  a.click();
}

function saveBlocks() {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xml);
    var blob = new Blob([xmlText], {type: 'text/xml'});
    var a = document.createElement('a');
    a.download = 'blocks.xml';
    a.href = URL.createObjectURL(blob);
    a.click();
}

function loadBlocks() {
    document.getElementById('loadInput').click();
}

function loadBlocksFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var xml = Blockly.utils.xml.textToDom(e.target.result);
        Blockly.Xml.appendDomToWorkspace(xml, workspace);
    };
    reader.readAsText(file);
}