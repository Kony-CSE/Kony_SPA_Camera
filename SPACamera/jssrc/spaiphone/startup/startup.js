//startup.js file
var appConfig = {
    appId: "SPACamera",
    appName: "SPACamera",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.3.43",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    url: "http://10.10.3.43:80/middleware/MWServlet",
    secureurl: "https://10.10.3.43:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrCamera();
    frmCameraGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmCamera.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};