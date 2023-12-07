function runCode() {

  var code = Blockly.JavaScript.workspaceToCode(workspace);

  document.getElementById('codeDiv').innerText = code;

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

document.getElementById('show-logs').addEventListener('click', function() {
    const logWindow = window.open('', '_blank');
    if (logWindow) {
      // Assuming actionLog is the array containing your log data
      actionLog.forEach(log => {
        logWindow.document.write(`<p>${log}</p>`);
      });
    } else {
      alert('Unable to open log window. Please check your popup settings.');
    }
});