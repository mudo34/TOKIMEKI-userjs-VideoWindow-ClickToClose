// ==UserScript==
// @name         TOKIMEKI VideoWindow ClickToClose
// @namespace    https://tokimeki.blue/
// @version      0.1.0
// @description  Videos一覧から動画を開いたときに空欄をクリックして閉じる
// @author       mudo34
// @match        https://tokimeki.blue/*
// @icon         https://www.google.com/s2/favicons?domain=tokimeki.blue
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', e => {
        const modal = e.target.closest('.video-modal');

        if (!modal || e.target !== modal) return;
        if (e.target !== modal) return;

        const closeButton = modal.querySelector('.video-modal-close');
        if (!closeButton) return;

        closeButton.click();
    });
})();
