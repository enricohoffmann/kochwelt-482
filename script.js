function init(isStartpage) {
    loadHeader(isStartpage);
    loadFooter(isStartpage);
}
function loadHeader(isStartpage) {

    let header = document.getElementsByTagName("header")[0];

    let logo_link = document.createElement("a");
    logo_link.setAttribute("href", isStartpage ? "./index.html" : "../index.html");
    logo_link.setAttribute("title", "Zurück zur Hauptseite");

    let logo = document.createElement("img");
    logo.setAttribute("class", "header-logo");
    logo.setAttribute("src", isStartpage ? "./assets/img/logo.png" : "../assets/img/logo.png");
    logo.setAttribute("alt", "Header Logo");
    logo_link.appendChild(logo);

    header.appendChild(logo_link);

    let header_links = document.createElement("div");
    header_links.classList.add("header-links");

    header.appendChild(header_links);

    let link_start = document.createElement("a");
    link_start.setAttribute("href", isStartpage ? "./index.html" : "../index.html");
    link_start.setAttribute("title", "Zurück zur Hauptseite");
    link_start.innerText = "Start";

    header_links.appendChild(link_start);

    let link_reciepe_of_day = document.createElement("a");
    link_reciepe_of_day.setAttribute("href", "#");
    link_reciepe_of_day.setAttribute("title", "");
    link_reciepe_of_day.innerText = "Rezept des Tages";

    header_links.appendChild(link_reciepe_of_day);

    let link_kontakt = document.createElement("a");
    link_kontakt.setAttribute("href", "#");
    link_kontakt.setAttribute("title", "");
    link_kontakt.innerText = "Kontakt";

    header_links.appendChild(link_kontakt);

    let link_impressum = document.createElement("a");
    link_impressum.setAttribute("href", "#");
    link_impressum.setAttribute("title", "");
    link_impressum.innerText = "Impressum";

    header_links.appendChild(link_impressum);
}

function loadFooter(isStartpage) {


    let footer = document.getElementsByTagName("footer");
    footer[0].classList.add("footer");

    let footer_inner = document.createElement("div");
    footer_inner.classList.add("footer-inner");

    footer[0].appendChild(footer_inner);

    let image_logo = document.createElement("img");
    image_logo.classList.add("footer-kochwelt-logo");

    image_logo.setAttribute("src", isStartpage ? "./assets/img/logo.png" : "../assets/img/logo.png");
    image_logo.setAttribute("alt", "Kochwelt Logo");

    footer_inner.appendChild(image_logo);

    let sozial_logos = document.createElement("div");
    sozial_logos.classList.add("social-logos");

    footer_inner.appendChild(sozial_logos);

    let facebook_link = document.createElement("a");
    facebook_link.setAttribute("href", "http://facebook.com");
    facebook_link.setAttribute("title", "Link zu Facebook");
    facebook_link.setAttribute("target", "_blank");

    let facebook_image = document.createElement("img");
    facebook_image.setAttribute("src", isStartpage ? "./assets/img/find-us-on-facebook-icon.png" : "../assets/img/find-us-on-facebook-icon.png");
    facebook_image.setAttribute("alt", "Facebook");
    facebook_link.appendChild(facebook_image);

    sozial_logos.appendChild(facebook_link);

    let instagram_link = document.createElement("a");
    instagram_link.setAttribute("href", "http://instagram.com");
    instagram_link.setAttribute("title", "Link zu Facebook");
    instagram_link.setAttribute("target", "_blank");

    let instagram_image = document.createElement("img");
    instagram_image.setAttribute("src", isStartpage ? "./assets/img/follow-us-on-instagram-icon.png" : "../assets/img/follow-us-on-instagram-icon.png");
    instagram_image.setAttribute("alt", "Instagramm");
    instagram_link.appendChild(instagram_image);
    
    sozial_logos.appendChild(instagram_link);

    let twitter_link = document.createElement("a");
    twitter_link.setAttribute("href", "http://twitter.com");
    twitter_link.setAttribute("title", "Link zu Twitter");
    twitter_link.setAttribute("target", "_blank");

    let twitter_image = document.createElement("img");
    twitter_image.setAttribute("src", isStartpage ? "./assets/img/follow-us-on-twitter-icon.png" : "../assets/img/follow-us-on-twitter-icon.png");
    twitter_image.setAttribute("alt", "Twitter");
    twitter_link.appendChild(twitter_image);
    
    sozial_logos.appendChild(twitter_link);

}


let rezeptOpen = document.getElementById('rezeptBtn');
rezeptOpen.addEventListener('click', function(){
    window.open('./recipes-01/recipes-01.html');
})