/*
 * Copyright © 2021 Sarah Klocke <sarah@egirl.rip>
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * the LICENSE.md file for more details.
 */

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const pollChanged = async () => {
    const divs = [...document.getElementsByTagName("div")].filter(div => div.className && div.className.match(/^pollingAnswers/));
    
    for (const i in divs) {
        const div = divs[i];

        await sleep(5000);
        
        div.getElementsByTagName("div").item(0).getElementsByTagName("button").item(0).click();
    }
};

const observer = new MutationObserver(pollChanged);
observer.observe(document.getElementById("app"), {
    childList: true,
    attributes: true,
    subtree: true
});