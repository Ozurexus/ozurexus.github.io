let i = -1;
const dog1 = document.getElementById("dog1");
const dog2 = document.getElementById("dog2");
const dog3 = document.getElementById("dog3");
async function getDog() {
  const response1 = await fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET",
  });
  response1.json().then((data) => {
    console.log(data.message);
    if (i != 0) {
      if (i < 4) {
        if (i == 1) {
          dog1.src = data.message;
          dog1.style.opacity = "100";
        }
        if (i == 2) {
          dog2.src = data.message;
          dog2.style.opacity = "100";
        }
        if (i == 3) {
          dog3.src = data.message;
          dog3.style.opacity = "100";
        }
      } else {
        if (i % 3 == 1) {
          dog1.src = data.message;
        }
        if (i % 3 == 2) {
          dog2.src = data.message;
        }
        if (i % 3 == 0) {
          dog3.src = data.message;
        }
      }
    }
  });
  i++;
}
getDog();
