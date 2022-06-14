const Button = ({color, text}) => {


    function onClick() {
        console.log("hello")
    }

    return <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
}
export default Button