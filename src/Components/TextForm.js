import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        // console.log("Button was clicked.")
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase.","Success")
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const handleLowClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase.","Success")
    }

    const clearText = ()=>{
        setText("")
        props.showAlert("Cleared Text.","Success")

    }

    const copyText = (event) => {
        const textarea = document.getElementById("textarea")
        textarea.select()
        document.execCommand('copy')
        props.showAlert("Copied Text.","Success")
    }

    const removeExtraSpace = ()=>{
        setText(text.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, ""))           // It has two replaces.
        props.showAlert("Removed extra spaces.","Success")
    }
    // +++++ ************
    document.title = "TextUtils - Home"
    // ++++++++++ ********************
    return (
        <>
            <div className="textForm">
                <h1>{props.heading}</h1>
                <textarea className={"textarea-form"} value={text} onChange={handleOnChange} id={"textarea"}></textarea>
                <button className={"upperBtn"} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={"upperBtn"} onClick={handleLowClick}>Convert to Lowercase</button>
                <button className={"upperBtn"} onClick={copyText}>Copy Text</button>
                <button className={"upperBtn"} onClick={removeExtraSpace}>Remove Extra Spaces</button>
                <button className={"upperBtn clear"} onClick={clearText}>Clear Text</button>
            </div>
            <div className={"wordCounter"}>
                <h1>Your Text Summary</h1>
                <p>{text===""?0:text.split(" ").length} words and {text.length} characters.</p>
                <p>Estimated reading time: {0.008 * (text===""?0:text.split(" ").length)} mins</p>
            </div>
            <div>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}


