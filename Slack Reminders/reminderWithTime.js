function sendToSlack() {

  var name = document.getElementById('name').value;
  var e = document.getElementById("typeOfRequest");
  var requestType = e.options[e.selectedIndex].value;
  var date = document.getElementById('date').value;
  var timePeriod = "";
  timePeriod = document.getElementById('amountOfTime').value;
  var time = "";
  time = document.getElementById('time').value;
  var additionalNote = "";
  additionalNote = document.getElementById('note').value;

  var xhttp = new XMLHttpRequest()

  var text = name + " will be " + requestType;
  var date = "on " + date;

  var msg = name + " will be " + requestType + " " + date;
  if (timePeriod != "") {
    text = text + " (" + timePeriod + ")";
    msg = msg + " (" + timePeriod + ")";
  }

  if (time != "") {
    date = date + " at " + time;
    msg = msg + " at " + time;
  }

  if (additionalNote != "") {
    text = text + ". " + additionalNote;
    msg = msg + ". " + additionalNote;
  }

    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      document.getElementById("demo").innerHTML = "<h2>You successfully sent an update to your Slack team!</h2>";
      document.getElementById("button").innerHTML = "Send another";
      document.getElementById("msgSent").innerHTML = "<i>" + msg + " </i> </br>";

      reset("name");
      reset("date");
      reset("time");
      reset("typeOfRequest");
      reset("amountOfTime");
      reset("note");

      console.log(this.responseText);
    }
  };
  var xhttpMessage = 'https://slack.com/api/reminders.add?token=*&text=' + text + '&time=' + date + '&channel=C2K4JR8LW&pretty=1';
  xhttp.open('POST', xhttpMessage);
  /*  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); */
  xhttp.send();
  console.log(this.responseText);

}

function reset(idName) {
  document.getElementById(idName).value = "";
}