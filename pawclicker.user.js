// ==UserScript==
// @name         Cookie Clicker Paw Cursor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace cursor image in Cookie Clicker with a custom paw image
// @author       OpenAI ChatGPT
// @match        https://orteil.dashnet.org/cookieclicker/
// @match        https://orteil.dashnet.org/cookieclicker/beta/
// @icon         https://orteil.dashnet.org/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function replaceCursor() {
        if (typeof Game !== 'undefined' && Game.Loader && Game.Loader.Replace) {
            Game.Loader.Replace('cursor.png', 'https://raw.githubusercontent.com/BlobIsBack/cookie_clicker_paw/refs/heads/main/cursor_paw.webp');
        } else {
            // Game not ready yet, retry in 1 second
            setTimeout(replaceCursor, 1000);
        }
    }

    // Start trying to replace the cursor
    replaceCursor();
})();
