const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
// console.log("hi, this is working");

// set up the nav bar

//get all a tags in the nav bar
const navLinks = document.querySelectorAll("nav a");
// console.log(navLinks);

//looop through the nodelist and apply the data from the object
//create a counter variable to get all of the links in the nav
let counter = 1;
navLinks.forEach(item => {
  if (counter !== navLinks.length + 1) {
    item.textContent = siteContent["nav"][`nav-item-${counter}`];
    counter += 1;
  }
});

//get the cta h1 and button data

// let ctaH1 = document.querySelector(".cta-text h1");
// ctaH1.textContent = siteContent["cta"]["h1"];

//using innerHTML to add in the line breaks to match design file
document.querySelector("h1").innerHTML = siteContent["cta"]["h1"].replace(
  / /g,
  "<br>"
);
// let ctaButton = document.querySelector(".cta-text button");
document.querySelector(".cta-text button").textContent =
  siteContent["cta"]["button"];

//get cta img
document.querySelector("#cta-img").src = siteContent["cta"]["img-src"];

//main content

//get all text content headers
const contentHeaders = document.querySelectorAll(".text-content h4");
// console.log(contentHeaders[0]);
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

//get all the text content paragraphs
const contentParagraphs = document.querySelectorAll(".text-content p");
contentParagraphs[0].textContent =
  siteContent["main-content"]["features-content"];
contentParagraphs[1].textContent = siteContent["main-content"]["about-content"];
contentParagraphs[2].textContent =
  siteContent["main-content"]["services-content"];
contentParagraphs[3].textContent =
  siteContent["main-content"]["product-content"];
contentParagraphs[4].textContent =
  siteContent["main-content"]["vision-content"];

//get middle img
document.querySelector("#middle-img").src =
  siteContent["main-content"]["middle-img-src"];

//contact heading
document.querySelector(".contact h4").textContent =
  siteContent["contact"]["contact-h4"];

//contact p's
const contactPs = document.querySelectorAll(".contact p");
// console.log(contactPs);
contactPs[0].innerHTML = siteContent["contact"]["address"];
contactPs[1].textContent = siteContent["contact"]["phone"];
contactPs[2].textContent = siteContent["contact"]["email"];

//footer
document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];
