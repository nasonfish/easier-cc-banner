chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.executeScript({file: "filter.js"});
}, {
    url: [
        {
        hostEquals: 'banssbp.coloradocollege.edu',
        pathSuffix: 'p_disp_dyn_ctlg' }
    ]}
);    

chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.executeScript({file: "filter.js"});
}, {
    url: [
        {
        hostEquals: 'banssbp.coloradocollege.edu',
        pathSuffix: 'p_proc_term_date' }
    ]}
);    

chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.executeScript(null, {file: "catalog.js"});
}, {
    url: [
        {
        hostEquals: 'banssbp.coloradocollege.edu',
        pathSuffix: 'p_display_courses' }
    ]}
);    

//preload
chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.executeScript(null, {file: "catalog_filter.js"});
}, {
    url: [
        {
        hostEquals: 'banssbp.coloradocollege.edu',
        pathSuffix: 'p_disp_dyn_ctlg' }
    ]}
);    

chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.tabs.executeScript(null, {file: "menu.js"});
}, {
    url: [
        {
        hostEquals: 'banssbp.coloradocollege.edu',
        pathSuffix: 'P_GenMenu' }
    ]}
);    