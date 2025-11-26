(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
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
`;const d=document.querySelector(".Url-Button"),a=document.querySelector(".Url-Input"),l=document.querySelector(".Input-Error"),u=document.createElement("div");u.classList.add("Error-Message");const g=document.querySelector("#New-Links");async function v(){const t=a.value.trim();if(!t){a.classList.add("Url-Error"),l.innerHTML=" <p>Please enter a URL</p>";return}if(!t.startsWith("https://")&&!t.startsWith("http://")){console.log("Not A Link"),l.innerHTML="<p>Please enter a valid URL</p>";return}l.innerHTML="";const i=document.createElement("div");i.classList.add("NewLink");const r=document.createElement("div");r.classList.add("UrlLink");const n=document.createElement("div");n.classList.add("NewSection");const e=document.createElement("div");e.classList.add("New-Url");const s=document.createElement("div");s.classList.add("Copy-Btn");const o=Math.random().toString(36).substring(3,9);r.innerHTML=`${t}`,e.innerHTML=`<a href="#${o}" target="blank">https://my.link/${o}</a>`,s.innerHTML="Copy",s.addEventListener("click",()=>{p(o),s.textContent="Copied!",s.classList.remove("Copy-Btn"),s.classList.add("Copied")}),n.appendChild(e),n.appendChild(s),i.appendChild(r),i.appendChild(n),g?.prepend(i),a.value=""}d.addEventListener("click",v);function p(t){navigator.clipboard.writeText(t).then(()=>{}).catch(i=>{console.error("Failed to copy: ",i)})}const c=document.querySelector(".Mobile-Burger"),m=document.querySelector(".Mobile-Heading"),h=document.querySelector(".Top-Right");function b(){c.classList.toggle("change"),m.classList.toggle("open"),h.classList.toggle("move")}c.addEventListener("click",b);
