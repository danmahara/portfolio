<?php
require_once("header.html");

?>
<style>
    .contactBody {
        display: flex;
        background-color: silver;
        height: 655px;
        width: 100%;
        align-items: center;
        justify-content: center;

    }

    .links {
        font-size: 25px;
        margin: 5px;
        width: 20px;
    }

    .socialPanel {
        display: flex;
        position: absolute;
        left: 0px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 200px;
        width: 4rem;
        background-color: white;
        text-align: center;

    }

    .firstDiv {
        display: flex;
        justify-content: center;
        margin: 4.5em;
    }
</style>
<div class="contactBody">
    <div class="firstDiv">
        <p>
            <strong> Connect With Me:</strong>
            Let's stay in touch! Follow me on LinkedIn, Github or send message on Whatsapp for updates on my latest
            projects, frontend tips, and
            industry insights.
        </p>
    </div>
    <div class="socialPanel">
        <a class="links" href="https://www.linkedin.com/in/dan-mahara-1a2846280/" target="_blank"><iconify-icon
                icon="skill-icons:linkedin"></iconify-icon></a>
        <a class="links" href="https://github.com/danmahara/"><iconify-icon icon="devicon:github"
                target="_blank"></iconify-icon></a>
        <a class="links" href="https://wa.me/9866520039?text=Hello%20there!" target="_blank"><iconify-icon
                icon="logos:whatsapp-icon"></iconify-icon></a>
    </div>
</div>