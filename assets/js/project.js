AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "KandylandDao",
    cardImage: "https://lh3.googleusercontent.com/pw/AM-JKLWRdx0od0_RLX8WkF77USE7B6TUqJSWbuHQteZIuyETu9Z_tdIgwMedIbIP-FB_hzsqLMAknyseaWhJxx9h4hm82bmbzovGwP1PEo3cdVOPwCaWNg9PsSHivUmLzjPhldz9V4ZvKXRi6vEFMPrxPoI=w1166-h810-no?authuser=0",
    description: "KandylandDao was forked from wanderlandDao. This is worked on the avalanche",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://appkandyland.on.fleek.co/",
    Githublink: "https://github.com/DreamSky1996/kandyland-frontend",
  },
  {
    title: "RoofRuler",
    cardImage: "https://lh3.googleusercontent.com/pw/AM-JKLVWthiHAxC64nh0TUswKDYd43XiwMTWndf9rkp-HNqDbbrvaFQBrU42d7wWY0K5MVaWmep1gWEPD2XWkc_nIuFV6rsfk-BykXWWVoTZefo7lSTwspoO3RvHMx9mtkfh2uvoNT5WP44F6JAozcecx90=w1200-h800-no?authuser=0",
    description: "Roof Ruler is the best roof measurement tool. Let you freely measure the roof from the clouds without being restricted by time, location and cost.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://roofruler.com/",
    Githublink: "",
  },
  {
    title: "GridGaming",
    cardImage: "https://lh3.googleusercontent.com/pw/AM-JKLUNyxaDjI4aPDl4NL4hJsbUDSv6WZzj7RQu0a-wSzHGfy2Zplht7Jks3xagedKAX3CsJTIgbE-p-GERxS4cvJAr-vAasW8-tuyykRzQwpAqynDGe_fRHgI3NsEXBKup4WCKV659p_B4O5tF_9MZH2E=w1433-h948-no?authuser=0",
    description: "Go from zero-to-hero with a trademarked system. Sponsor a giveaway and tap into the grid. See why we're the fastest growing promotion brand on Twitter.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.gridgaming.io/",
    Githublink: "",
  },
  {
    title: "Cuba theme",
    cardImage: "https://lh3.googleusercontent.com/pw/AM-JKLVHEnOabvKoKHMRL_5zzf5D4WTpFENHkWOhyNWpeOmyMCF-glVZBqzVn8o2nON4HYwfqBh6nJ65cceztMl5WoFzp0hB1Wv16rLeiUSNHqcHfFv3ssssltSzlsUnOUmgYJxKPvafEDIxSwaYk_ZJrzM=w728-h692-no?authuser=0",
    description: "Benefits Of Clothes Swapping",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/DreamSky1996/cuba-html.git",
  },
  {
    title: "EVERETH",
    cardImage: "https://lh3.googleusercontent.com/pw/AM-JKLXmyTQOPsXTita88-rWbj0AtgyoiyzJJI1l0FrWlEvUzN16bXbPv6yEvXf0odY4yr2T8h35-0irrlehyl6Gdx8cjRAXcX93h2-X0Sj9o2OHvGpFLm1Yen-Y2EEXlFpw7u-vwvSJpyatN2CBTZ393k8=w1152-h909-no?authuser=0",
    description: "HOLD EVERETH EARN ETHEREUM",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/DreamSky1996/react-landing-crypto",
  },
  {
    title: "Benefits Of Clothes Swapping",
    cardImage: "https://lh3.googleusercontent.com/pw/AM-JKLWtJrMWzVOi2riAgaaOYzwQUW7WfKwjz_XVUqvVRYbP53K3e9zziMy-3cTimQxp9tIooWbaGIumTuMFFGXkNSnI_dEF95ygZPvA3ewxpE66jTE5604R6q8XZWtU1Gj2Wv2bOxtGurHiDMwdU-GIll8=w903-h864-no?authuser=0",
    description: "Benefits Of Clothes Swapping",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/DreamSky1996/yazi-react-front",
  }
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, tags, Previewlink, Githublink }) => {
      output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title" style="padding-bottom: 1.5rem;"><a href="#">${title}</a></h1>
              </div>
            <ul class="menu-content" style="top: 1.7rem;"><br>`;
            if (Previewlink != "") {
              output  += `<li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>`;
            }
            if (Githublink != "") {
              output += `<li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>`;
            }
           output  +=  ` </ul>
              </div>
            </div>
          </div>
        </div>`;
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}