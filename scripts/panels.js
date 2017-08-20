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

function handleClick() {
    panels.click(e => {
        console.log("target:", e.currentTarget)
        let thisPanel = $(e.currentTarget)
        let thisTopMessage = thisPanel.find(".top-message")
        let thisMiddleMessage = thisPanel.find(".middle-message")
        let thisBottomMessage = thisPanel.find(".bottom-message")

        let notThisPanel = panels.filter((i, panel) => panel !== e.currentTarget)
        console.log(thisPanel, notThisPanel)
        notThisPanel.css("flexBasis", NORMAL_AMOUNT)   

        //Set timeout allows the open panel to close before opening the next one
        setTimeout(() => {
            if(thisPanel.css("flexBasis") == EXPAND_AMOUNT) {
                thisTopMessage.css("top", "-100%")
                thisBottomMessage.css("top", "100%")
                thisPanel.css("flexBasis", NORMAL_AMOUNT)
            } else {
                thisTopMessage.css("top", "0")
                thisBottomMessage.css("top", "0")
                thisPanel.css("flexBasis", EXPAND_AMOUNT)
            }
        }, 300)
    })
}

function closePanel() {
    let openPanel = panels.filter((i, panel) => $(panel).css("flexBasis") === EXPAND_AMOUNT)
    openPanel.css("flexBasis", NORMAL_AMOUNT)
}
