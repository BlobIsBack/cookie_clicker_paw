// ==UserScript==
// @name         Cookie Clicker Paw Cursor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace cursor image in Cookie Clicker with a custom paw image
// @author       ChatGPT And Claude AI
// @match        https://orteil.dashnet.org/cookieclicker/
// @match        https://orteil.dashnet.org/cookieclicker/beta/
// @icon         https://orteil.dashnet.org/favicon.ico
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    function replaceCursor() {
        if (typeof Game !== 'undefined' && Game.Loader && Game.Loader.Replace) {
            (() => {
                Game.Loader.Replace('cursor.png', 'https://raw.githubusercontent.com/BlobIsBack/cookie_clicker_paw/refs/heads/main/cursor_paw.webp');

                ['productIcon0', 'productIconOff0'].forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        const imageUrl = id === 'productIcon0' ?
                            'url("https://raw.githubusercontent.com/BlobIsBack/cookie_clicker_paw/refs/heads/main/paw.webp")' :
                            'url("https://raw.githubusercontent.com/BlobIsBack/cookie_clicker_paw/refs/heads/main/paw_off.webp")';

                        Object.assign(element.style, {
                            backgroundImage: imageUrl,
                            backgroundPosition: '0px 0px',
                            backgroundSize: 'contain'
                        });
                    }
                });
            })();
        } else {
            setTimeout(replaceCursor, 250);
        }
    }
    replaceCursor();
})();
