//Form JS File
function frmCamera_button1239151544535327_onClick_seq0(eventobject) {
    fileBrowse.call(this, eventobject);
};

function addWidgetsfrmCamera() {
    var label99929673359277 = new kony.ui.Label({
        "id": "label99929673359277",
        "isVisible": true,
        "text": "Camera In SPA",
        "skin": "lblSkin"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var button1239151544535327 = new kony.ui.Button({
        "id": "button1239151544535327",
        "isVisible": true,
        "text": null,
        "skin": "camBtnSkin",
        "focusSkin": "btnFocus",
        "onClick": frmCamera_button1239151544535327_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 5, 0, 5],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var richtext1239151544535331 = new kony.ui.RichText({
        "id": "richtext1239151544535331",
        "isVisible": true,
        "text": "<img id=\"customImageId\" style=\"display:none;\" alt='Test Image'/>",
        "skin": "richNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 56
    }, {});
    frmCamera.add(label99929673359277, button1239151544535327, richtext1239151544535331);
};

function frmCameraGlobals() {
    var MenuId = [];
    frmCamera = new kony.ui.Form2({
        "id": "frmCamera",
        "needAppMenu": true,
        "title": null,
        "headers": [hbox99929673359279],
        "enabledForIdleTimeout": false,
        "skin": "frmBGSkin",
        "addWidgets": addWidgetsfrmCamera
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};