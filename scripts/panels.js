import $ from "jquery"

let panels = $(".panel")
let EXPAND_AMOUNT = `${100/3}%`
let NORMAL_AMOUNT = `${100/6}%`
console.log("AYYYY")
setPanelBackgroundColors()
handleClick()

function setPanelBackgroundColors() {
    let images = ["panel1.jpg", "panel2.jpg", "panel3.jpg", "panel4.jpg", "panel5.jpg", "panel6.jpg"]
    console.log("AAYYYAYAYAYA")
    panels.each((i, panel) => {
        let background = images[i]
        $(panel).css("background", `url(/images/${background}) center no-repeat`)
    })
}

function setClickHandler() {
    $panels.click(e => {
        let $panel = $(e.currentTarget)

        shouldPanelOpen($panel) ? openPanel($panel) : closePanel($panel)
    })
}

function shouldPanelOpen(panel) {
    let $panel = $(panel)

    return $panel.css("flexGrow") == NORMAL_AMOUNT ? true : false
}

function openPanel(panel) {
    console.log("Opening panel", $(panel))
    $(panel).css("flexGrow", EXPAND_AMOUNT)
}

function closePanel(panel) {    
    console.log("Closing panel", $(panel))
    $(panel).css("flexGrow", NORMAL_AMOUNT)
}
