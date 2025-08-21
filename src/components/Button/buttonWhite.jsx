const ButtonWhite= ({icon : icon, text, onClick})=>{
    return(
        <button className="flex items-center border-1 rounded-lg p-2 hover:bg-gray-100" onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}
export default ButtonWhite;