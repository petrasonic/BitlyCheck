// ==UserScript==
// @name         bit.ly check
// @namespace    http://davidpetrasovic.com
// @version      0.1
// @description  See where bit.ly links are taking you before you go there.
// @author       Dave
// @grant        none
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function(event) {
    var bc_url, bc_list, bc_index;
    bc_list = document.getElementsByTagName("a");
    for (bc_index = 0; bc_index < bc_list.length; ++bc_index) {
        bc_url = bc_list[bc_index].href;
        if(bc_url.search('bit.ly/') != -1 && bc_url.substr(-1) !== "+"){
            bc_list[bc_index].href = bc_url+"+";
        }
    }
}); 