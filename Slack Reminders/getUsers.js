function getUsers() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var users = JSON.parse(this.responseText);

      var members = users.members;

      var finalString = getMembers(members);
      console.log(finalString);
      if(finalString !=null) {
        document.getElementById("name").innerHTML = finalString;
      }

   }
  };

  function getMembers(array) {
    var selection ="";
    for (i = 0; i < array.length; i++) {
      var username = array[i].name;
      var fullname = array[i].profile.first_name + array[i].profile.last_name;
     selection += "<option value=" + fullname + ">" + fullname + "</option>";
    }
    return selection;
  }

  xhttp.open('GET', 'https://slack.com/api/users.list?token=*&pretty=1');
  xhttp.send();
}