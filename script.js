body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    overflow-x: hidden;
}

#starfield {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.contact-card {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 150px auto;
    background: linear-gradient(to bottom, #d4a6b0, #263a6c); /* Multicolored background */
    border-radius: 20px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    padding: 20px;
    z-index: 1;
}

.left-column {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.right-column {
    padding: 20px;
}

.box {
    width: auto;
    padding: 20px;
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    border: 1px solid #e4e4e4;
    border-radius: 5px;
}

.profile {
    width: 200px;
    height: 200px;
    background-color: #000000; /* Black background */
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    position: relative;
    transition: transform 0.3s;
}

.profile-img {
    max-width: 100%;
    max-height: 100%;
}

.profile:hover .profile-img {
    transform: scale(1.1);
}

.profile-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    text-align: center;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.profile:hover .profile-overlay {
    opacity: 1;
}

.profile-overlay p {
    margin: 0;
    font-size: 18px;
}

h1, h2, h3, h4, h5 {
    margin: 0;
    color: #000000; /* Black text */
}

h1 {
    font-size: 24px;
}

h2 {
    font-size: 20px;
}

h3 {
    margin-top: 10px;
}

h4 {
    font-size: 16px;
    opacity: 0.8;
}

h5 {
    font-size: 14px;
}

.contact {
    margin: 5px 0;
    font-size: 16px;
    color: #000000; /* Black text */
}

ul,
ol {
    color: #333333; /* Dark gray text */
}

#formate {
    color: #333333; /* Dark gray text */
}

#exp {
    color: #333333; /* Dark gray text */
}

#edu {
    color: #333333; /* Dark gray text */
}

.title {
    color: #333333; /* Dark gray text */
    display: flex;
    justify-content: left;
}

.social-connection {
    margin-top: 3vh;
    display: flex;
    justify-content: left;
}

.social-link {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 10px;
    color: #333333; /* Dark gray text */
    font-size: 24px;
    transition: transform 0.3s ease;
}

.social-link:hover {
    transform: scale(1.5);
}

.linkedin:hover {
    color: #0077b5;
}

.instagram:hover {
    color: #bc2a8d;
}

.github:hover {
    color: #000000; /* Black text */
}

.social-connection img {
    width: 10px;
    height: 10px;
    margin: 10px;
}

@media only screen and (max-width: 600px) {
    .contact-card {
        margin: 50px auto;
    }
}
