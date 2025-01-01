import { IconType } from "react-icons";

interface ButtonProps{
    text: string
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void;
    small?: boolean
    outline?: boolean
    disabled? : boolean
}

const CardButton:React.FC<ButtonProps> = ({text, onClick, small, outline, disabled}) => {
  return (
    <button disabled={disabled} className={`rounded-lg p-3 ${small? "w-full md:w-[250px]" : "w-full"} ${outline? "border text-black" : "bg-orange-500 text-white"}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default CardButton
