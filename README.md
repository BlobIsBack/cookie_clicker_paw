# cookie_clicker_paw

### for the best experience, use the [userscript](https://github.com/BlobIsBack/cookie_clicker_paw/raw/refs/heads/main/pawclicker.user.js) on browser and the [add-on](https://steamcommunity.com/sharedfiles/filedetails/?id=3512226136 on steam

to temporarily add it in a browser : open the console (CTRL + SHIFT + i) and use the command 

```
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
```

to set the default images back, just reload the page

to always have it, you can use the [userscript](https://github.com/BlobIsBack/cookie_clicker_paw/raw/refs/heads/main/pawclicker.user.js) in the repo, to install it you need an extension like [violentmonkey](https://violentmonkey.github.io/)

to add it to the steam version, subscribe to the add-on [here](https://steamcommunity.com/sharedfiles/filedetails/?id=3512226136)

the image is based on the one from [this add-on](https://kayofeld.github.io/Cookie-Clicker-mod/boykisser.js), i edited it so it looks better (imo)

the javascript was mainly generated using AI because i'm lazy idk

if you have any issues, restart the game and/or browser, if the issue persists or happens often, feel free to do an issue or a pull request
