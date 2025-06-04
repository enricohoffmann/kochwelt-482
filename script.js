
class navLink {
    constructor(linkText, linkHref, linkAlt, linkClasses) {
        this.linkText = linkText;
        this.linkHref = linkHref;
        this.linkAlt = linkAlt;
        this.linkClasses = linkClasses;
    };
};


function init(isStartpage) {
    loadHeader(isStartpage);
    loadFooter(isStartpage);

    
    let rezeptOpen = document.getElementById('rezeptBtn');
    rezeptOpen.addEventListener('click', function(){
        window.open('./recipes-01/recipes-01.html');
    })
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


    let linkArray = [
        new navLink("Start", isStartpage ? "./index.html" : "../index.html", "Zurück zur Hauptseite", []),
        new navLink("Rezept des Tages", isStartpage ? "./recipes-01/recipes-01.html" : "../recipes-01/recipes-01.html", "Hähnchen Döner", []),
        new navLink("Kontakt", isStartpage ? "./kontakt.html" : "../kontakt.html", "Kontaktseite", []),
        new navLink("Impressum", isStartpage ? "./impressum.html" : "../impressum.html", "Impressumseite", [])
    ];


    let linkDiv = createLinkDiv(linkArray, ["header-links"]);

    header.appendChild(linkDiv);

    

    /* let responsive_button = document.createElement('div');
    responsive_button.classList.add('resp_button');
    responsive_button.addEventListener('click', function() {
       toggleRespMenu(); 
    });

    let res_button_image = document.createElement('img');
    res_button_image.setAttribute("src", isStartpage ? "./assets/icons/bars-solid.svg" : "../assets/icons/bars-solid.svg");
    res_button_image.classList.add('resp_button_img');

    responsive_button.appendChild(res_button_image);
    header_links.appendChild(responsive_button);

    let content_Div = document.getElementsByClassName('content');

    let resp_menu = document.createElement('div');
    resp_menu.classList.add('resp_menu_box', 'resp_menu_close');
    resp_menu.setAttribute('id', 'resp_menu');

    content_Div[0].appendChild(resp_menu);
    header.after(resp_menu); */



}

function loadFooter(isStartpage) {


    let footer = document.getElementsByTagName("footer");
    footer[0].classList.add("footer");

    let image_logo = document.createElement("img");
    image_logo.classList.add("footer-kochwelt-logo");

    image_logo.setAttribute("src", isStartpage ? "./assets/img/logo.png" : "../assets/img/logo.png");
    image_logo.setAttribute("alt", "Kochwelt Logo");

    footer[0].appendChild(image_logo);

    let sozial_logos = document.createElement("div");
    sozial_logos.classList.add("social-logos");

    footer[0].appendChild(sozial_logos);

    let facebook_link = document.createElement("a");
    facebook_link.classList.add("sozial-logo-links", "facebook")
    facebook_link.classList.add("sozial-logo-links", "facebook")
    facebook_link.setAttribute("href", "http://facebook.com");
    facebook_link.setAttribute("title", "Link zu Facebook");
    facebook_link.setAttribute("target", "_blank");

    sozial_logos.appendChild(facebook_link);

    let instagram_link = document.createElement("a");
    instagram_link.classList.add("sozial-logo-links", "instagram");
    instagram_link.classList.add("sozial-logo-links", "instagram");
    instagram_link.setAttribute("href", "http://instagram.com");
    instagram_link.setAttribute("title", "Link zu Instagram");
    instagram_link.setAttribute("title", "Link zu Instagram");
    instagram_link.setAttribute("target", "_blank");
    
    sozial_logos.appendChild(instagram_link);

    let twitter_link = document.createElement("a");
    twitter_link.classList.add("sozial-logo-links", "twitter");
    twitter_link.classList.add("sozial-logo-links", "twitter");
    twitter_link.setAttribute("href", "http://twitter.com");
    twitter_link.setAttribute("title", "Link zu Twitter");
    twitter_link.setAttribute("target", "_blank");
   
    sozial_logos.appendChild(twitter_link);
}

function createLinkDiv(linkArray, divClasses) {
    let div = document.createElement('div');

    for (let c = 0; c < divClasses.length; c++) {
        div.classList.add(divClasses[c]);        
    }


    for (let i = 0; i < linkArray.length; i++) {
        const element = linkArray[i];
        
        let link = document.createElement('a');
        link.setAttribute("href", element.linkHref);
        link.setAttribute("title", element.linkAlt);
        link.innerText = element.linkText;

        for (let c = 0; c < element.linkClasses.length; c++) {
            link.classList.add(element.linkClasses[c]);            
        }

        div.appendChild(link);

    }

    return div;
}
