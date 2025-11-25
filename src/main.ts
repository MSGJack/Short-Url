import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="main">
    <div class="Upper">
      <div class="Box-Content">
        <header>
          <div class="LeftHeader">
            <img class="logo" src="assets/logo.svg" aria-label="Logo"/>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resource</li>
            </ul>
          </div>
          <div class="RightHeader">
            <span>Login</span>
            <button>Sign Up</button>
          </div>
        </header>

        <header class="Mobile-Header">
          <img class="logo" src="assets/logo.svg" aria-label="Logo"/>
          <div class="Mobile-Heading">
            <a>Features</a>
            <a>Pricing</a>
            <a>Resource</a>
            <hr/>
            <span>Login</span>
            <button>Sign Up</button>
          </div>
          <div class="Mobile-Burger">
            <div class="B1"></div>
            <div class="B2"></div>
            <div class="B3"></div>
          </div>
        </header>

        <div class="Top-Section">
          <div class="Top-Left">
            <h1>More than just shorter links</h1>
            <p>Build you brand's recognition and get detailed insights on how your links are performing</p>
            <button>Get Started</button>
          </div>
          <div class="Top-Right">
            <img class="work" src="assets/illustration-working.svg" aria-label="Working Image"/>
          </div>
        </div>
      </div>
      </div>


       <div class="Mid">
      <div class="Box-Content">

        <div class="Middle-Section">
          <div class="Text-Area">
            <div class="Text-Wrapper">
              <input class="Url-Input" placeholder="  Shorten a link here..."/>
              <button class="Url-Button">Shorten It!</button>
              <div class="Input-Error"></div>
            </div>
          </div>
          <div id="New-Links"></div>
        <div class="Middle-Heading">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div class="Middle-Details">
          <div class="Brand">
            <img class="Brand-Recognition" src="assets/icon-brand-recognition.svg" aria-label="Brand Recognition"/>
            <span><strong>Brand Recongnition</strong></span>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
          </div>
          <div class="Details">
            <img class="Records" src="assets/icon-detailed-records.svg" aria-label="Detailed Records Image"/>
            <span><strong>Detailed Records</strong></span>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>   
          <div class="Customizable">
            <img class="Fully-Custome" src="assets/icon-fully-customizable.svg" aria-label="Fully Customizable"/>
            <span><strong>Fully Customizable</strong></span>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagment.</p>
          </div>
            </div>
  </div>
  </div>
  </div>



  <div class="Banner">
    <h2>Boost your links today</h2>
    <button>Get Started</buuton>
  </div>

  <footer>
    <img class="logo" src="assets/logo.svg" aria-label="Logo"/>
    <div class="Other">
    <div class="Info">
      <div class="Footer-F">
        <span>Feautres</span>
        <ul>
          <li>Link Sharing</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div class="Footer-R">
        <span>Resources</span>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div class="Footer-C">
        <span>Company</span>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
      <div class="Social-Medias">
        <img class="facebook" src="assets/icon-facebook.svg" aria-label="Facebook Logo"/>
        <img class="twitter" src="assets/icon-twitter.svg" aria-label="Twitter Logo"/>
        <img class="Pinterest" src="assets/icon-pinterest.svg" aria-label="Pinterest Logo"/>
        <img class="Instagram" src="assets/icon-instagram.svg" aria-label="Instagram Logo"/>
    </div>
    </div>
  </footer>
  
  </div>
`;

const urlButton = document.querySelector<HTMLButtonElement>(".Url-Button")!;
const urlInput = document.querySelector<HTMLInputElement>(".Url-Input")!;
const errorDiv = document.querySelector<HTMLDivElement>(".Input-Error")!;

const errorMessageElement = document.createElement("div");
errorMessageElement.classList.add("Error-Message");

const addNewLinkDiv = document.querySelector<HTMLDivElement>("#New-Links");

async function shortenUrl() {
  const url = urlInput.value.trim();

  if (!url) {
    urlInput.classList.add("Url-Error");
    errorDiv.innerHTML = ` <p>Please enter a URL</p>`;
    return;
  }

  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    console.log("Not A Link");
    errorDiv.innerHTML = `<p>Please enter a valid URL</p>`;
    return;
  }

  errorDiv.innerHTML = "";

  const newLinkDiv = document.createElement("div");
  newLinkDiv.classList.add("NewLink");

  const urlDiv = document.createElement("div");
  urlDiv.classList.add("UrlLink");

  const NewSection = document.createElement("div");
  NewSection.classList.add("NewSection");

  const newUrlDiv = document.createElement("div");
  newUrlDiv.classList.add("New-Url");

  const copyBtn = document.createElement("div");
  copyBtn.classList.add("Copy-Btn");

  const newUrl = Math.random().toString(36).substring(3, 9);
  urlDiv.innerHTML = `${url}`;
  newUrlDiv.innerHTML = `<a href="#${newUrl}" target="blank">https://my.link/${newUrl}</a>`;
  copyBtn.innerHTML = `Copy`;

  copyBtn.addEventListener("click", () => {
    copyUrl(newUrl);

    copyBtn.textContent = "Copied!";
    copyBtn.classList.remove("Copy-Btn");
    copyBtn.classList.add("Copied");
  });

  NewSection.appendChild(newUrlDiv);
  NewSection.appendChild(copyBtn);
  newLinkDiv.appendChild(urlDiv);
  newLinkDiv.appendChild(NewSection);
  addNewLinkDiv?.prepend(newLinkDiv);
  urlInput.value = "";
  return;
}

urlButton.addEventListener("click", shortenUrl);

function copyUrl(url: string) {
  navigator.clipboard
    .writeText(url)
    .then(() => {})
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

const burgerMenu = document.querySelector<HTMLDivElement>(".Mobile-Burger")!;
const mobileLinks = document.querySelector<HTMLDivElement>(".Mobile-Heading")!;
const workDiv = document.querySelector<HTMLDivElement>(".Top-Right")!;
/*
function openBurger() {
  const mobileLinks =
    document.querySelector<HTMLDivElement>(".Mobile-Heading")!;
  if (mobileLinks.style.display === "flex") {
    mobileLinks.style.display = "none";
    burgerMenu.classList.toggle("change");
  } else {
    mobileLinks.style.display = "flex";
    burgerMenu.classList.toggle(".hange");
  }
}

burgerMenu.addEventListener("olick", openBurger);

*/

function openBurger() {
  burgerMenu.classList.toggle("change");
  mobileLinks.classList.toggle("open");
  workDiv.classList.toggle("move");
}

burgerMenu.addEventListener("click", openBurger);

