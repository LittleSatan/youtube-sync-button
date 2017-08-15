// ==UserScript==
// @name         youtube Extend Button
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

function addSyncButton(){

    if (document.getElementById("watch8-secondary-actions") !== null && document.getElementById("watch8-secondary-actions").querySelector("#syncButton") === null){

        var syncButton = document.createElement("button");
        syncButton.setAttribute("id", "syncButton");
        syncButton.classList.add("yt-uix-button", "yt-uix-button-size-default", "yt-uix-button-opacity", "yt-uix-tooltip");
        var content = document.createElement("span");
        content.classList.add("yt-uix-button-content");
        content.innerHTML = "Syncplay";
        syncButton.appendChild(content);
        document.getElementById("watch8-secondary-actions").insertBefore(syncButton, document.getElementById("watch8-secondary-actions").children[document.getElementById("watch8-secondary-actions").children.length - 1]);
        syncButton.addEventListener('click', function(){
            setInterval(makeSyncDiv, 300)
        }, false);
	}

}

function makeSyncDiv(){
    if (document.getElementById("watch7-content") !== null && document.getElementById("watch7-content").querySelector("#syncDivOptions") === null){
        var syncDivOptions = document.createElement("div");
        syncDivOptions.setAttribute("id", "syncDivOptions");
        var content = document.createElement("span");
        content.classList.add("yt-uix-button-content");
        content.innerHTML = "test for options";
        syncDivOptions.appendChild(content);
        document.getElementById("watch7-content").insertBefore(syncDivOptions, document.getElementById("action-panel-details"));        
    }
}

setInterval(addSyncButton, 300);