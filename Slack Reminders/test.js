function sendToSlack() {

  var msg = document.getElementById('message').value;

  var e = document.getElementById("selectChannel");
  var channel = e.options[e.selectedIndex].value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      document.getElementById("demo").innerHTML = "<h2>You successfully sent an update to your Slack team!</h2>";
      document.getElementById("button").innerHTML = "Send another";
      document.getElementById("msgSent").innerHTML = "<strong>Message: </strong> <i>" + msg + "</i> </br>";
      document.getElementById("message").value = "";

      console.log(this.responseText);
    }
  };
  xhttp.open('POST', 'https://hooks.slack.com/services/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');
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send("payload={\"channel\": \"" + channel + "\", \"text\" : \"" + msg + "\"}");
}