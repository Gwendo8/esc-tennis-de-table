const ButtonRed= ({icon : icon, text, onClick})=>{
    return(
        <button className="flex items-center border-1 rounded-lg p-2 bg-red-600 hover:bg-red-700 text-white" onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}
export default ButtonRed;