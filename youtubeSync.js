// ==UserScript==
// @name         youtube Sync Button
// @version      0.1
// @description  Watch youtube videos with friends
// @author       MarissaChan
// @include      http*://*.youtube.com/*
// @include      http*://youtube.com/*
// @include      http*://*.youtu.be/*
// @include      http*://youtu.be/*
// @run-at       document-end
// @grant        MIT
// ==/UserScript==

// This funcion will (try to) add the sync button to the menu
function addSyncButton(){
    // Test if the menu exists. And if the menu exists, then test if the menu has a sync button. If there is no sync button but there is a menu, return true
    if (document.getElementById("watch8-secondary-actions") !== null && document.getElementById("watch8-secondary-actions").querySelector("#syncButton") === null){
        // create an element called syncButton
        var syncButton = document.createElement("button");
        // set id and classes for the new button
        syncButton.setAttribute("id", "syncButton");
        syncButton.classList.add("yt-uix-button", "yt-uix-button-size-default", "yt-uix-button-opacity", "yt-uix-tooltip");
        // create an element (span) for the content.
        var content = document.createElement("span");
        // set classes and text of the span
        content.classList.add("yt-uix-button-content");
        content.innerHTML = "Syncplay";
        // add the content to the button
        syncButton.appendChild(content);
        // let's insert the button to the menu. the new sync button should be the second last button in the menu.
        document.getElementById("watch8-secondary-actions").insertBefore(syncButton, document.getElementById("watch8-secondary-actions").children[document.getElementById("watch8-secondary-actions").children.length - 1]);
        // make an addEventListener for the button
        syncButton.addEventListener('click', function(){
            // make the div with the options. and also make an interval so the div will recreated when the user changes the video 
            makeSyncDiv();
            setInterval(makeSyncDiv, 1000);
        }, false);
	}
}

function makeSyncDiv(){
    if (document.getElementById("watch7-content") !== null && document.getElementById("watch7-content").querySelector("#syncDivOptions") === null){
        var syncDivOptions = document.createElement("div");
        syncDivOptions.setAttribute("id", "syncDivOptions");
        syncDivOptions.classList.add("branded-page-box", "yt-card", "scrolldetect");
        var content = document.createElement("span");
        content.classList.add("yt-uix-button-content");
        content.innerHTML = "<h2>SyncTube</h2></br>test for options";
        syncDivOptions.appendChild(content);
        document.getElementById("watch7-content").insertBefore(syncDivOptions, document.getElementById("action-panel-details"));
    }
}

setInterval(addSyncButton, 1000);