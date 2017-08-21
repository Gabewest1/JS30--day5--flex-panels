import $ from "jquery"

let $panels = $(".panel")
const EXPAND_AMOUNT = 2.5
const NORMAL_AMOUNT = 1

setPanelsBackground()
setClickHandler()
setTransitionEnd()

function setTransitionEnd() {
    $panels.on("transitionend", handleTransitionEnd)
}

function handleTransitionEnd(e) {
    let animationName = e.propertyName || e.originalEvent.propertyName
    
    console.log("Animation Name:", animationName)
    if(animationName && animationName.includes("flex")) {
        transitionPanelText(e.currentTarget)
    }
}

function transitionPanelText(panel) {
    console.log("Transition text for panel:", panel)
    let $panel = $(panel)

    //Conditional Context: 
    //This occurs after a panel finishes its flex-grow transition so
    //we act based off the panels finished state
    if($panel.css("flexGrow") == NORMAL_AMOUNT) {
        transitionOutPanelText($panel)
    } else {
        transitionInPanelText($panel)
    }
}

function transitionInPanelText(panel) {
    let $panel = $(panel)
    let $topMessage = $panel.find(".top-message")
    let $middleMessage = $panel.find(".middle-message")
    let $bottomMessage = $panel.find(".bottom-message")

    $middleMessage.css("fontSize", "48px")
    $topMessage.animate({"top": "0"})
    $bottomMessage.animate({"top": "0"})
}

function transitionOutPanelText(panel) {
    let $panel = $(panel)
    let $topMessage = $panel.find(".top-message")
    let $middleMessage = $panel.find(".middle-message")
    let $bottomMessage = $panel.find(".bottom-message")
    
    $middleMessage.css("fontSize", "32px")
    $topMessage.animate({"top": "-100%"})
    $bottomMessage.animate({"top": "100%"})
}

function setPanelsBackground() {
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
