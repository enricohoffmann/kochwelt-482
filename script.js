function loadFooter() {
    let footer = document.getElementsByTagName("footer");
    footer[0].classList.add("footer");

    let footer_inner = document.createElement("div");
    footer_inner.classList.add("footer-inner");

    footer[0].appendChild(footer_inner);

    let image_logo = document.createElement("img");
    image_logo.classList.add("footer-kochwelt-logo");
    image_logo.setAttribute("src", "../assets/img/logo.png");
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
    facebook_image.setAttribute("src", "../assets/img/find-us-on-facebook-icon.png");
    facebook_image.setAttribute("alt", "Facebook");
    facebook_link.appendChild(facebook_image);

    sozial_logos.appendChild(facebook_link);

    let instagram_link = document.createElement("a");
    instagram_link.setAttribute("href", "http://instagram.com");
    instagram_link.setAttribute("title", "Link zu Facebook");
    instagram_link.setAttribute("target", "_blank");

    let instagram_image = document.createElement("img");
    instagram_image.setAttribute("src", "../assets/img/follow-us-on-instagram-icon.png");
    instagram_image.setAttribute("alt", "Instagramm");
    instagram_link.appendChild(instagram_image);
    
    sozial_logos.appendChild(instagram_link);

    let twitter_link = document.createElement("a");
    twitter_link.setAttribute("href", "http://twitter.com");
    twitter_link.setAttribute("title", "Link zu Twitter");
    twitter_link.setAttribute("target", "_blank");

    let twitter_image = document.createElement("img");
    twitter_image.setAttribute("src", "../assets/img/follow-us-on-twitter-icon.png");
    twitter_image.setAttribute("alt", "Twitter");
    twitter_link.appendChild(twitter_image);
    
    sozial_logos.appendChild(twitter_link);

}