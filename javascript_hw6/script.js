const button = document.getElementById("GetUsers");
button.addEventListener("click", getUserInfo);

function getUserInfo() {
  const urlXml = "https://randomuser.me/api/?results=1";
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //   document.getElementById("Output").innerHTML = xhr.responseText;
      const resp = JSON.parse(xhr.response);
      //   console.log(resp.results);
      for (let user of resp.results) {
        document.getElementById("Output").innerHTML =
          "This is " + user.name.first + " " + user.name.last;

        let bgImg = user.picture.large;
        let bgImgSrc = JSON.stringify(user.picture.large);

        // img.setAtribute("");
        document.getElementById("backgroundImg").src = bgImg;

        // document.body.style.backgroundImage.src = bgImg;

        document.getElementById("backgroundImg").style.backgroundRepeat =
          "repeat";
        // document.body.style.backgroundImage = "url('bgImg')";
        console.log(bgImgSrc);
      }
    }
    // else {
    //   document.getElementById("Output").innerHTML =
    //     "There was an error. Please try again.";
    // }
  };
  xhr.open("GET", urlXml, true);
  xhr.send();
  //   console.log(xhr);
}
