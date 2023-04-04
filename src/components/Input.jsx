import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Input = (props) => {
    const { label, style, InputStyle, name, errMessage, type, ...inputProps } = props;

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={` flex flex-col relative justify-end  ${style}`}>
            <div className={` ${type === 'password' && "flex justify-between items-center"} `}>
                <label className=" text-sm font-semibold" >{label}</label>

                {/* Render a div that toggles the password visibility when clicked
 if the input type is password */}
                {type === "password" && (
                    <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="flex hover:cursor-pointer items-center text-[#858585] "
                    >
                        {showPassword ? <AiFillEye size={16} /> : <AiFillEyeInvisible  size={16} />}
                        <span >Hide</span>
                    </div>
                )}
            </div>

            {/* Render an input if the type is not 'option' */}
            {type !== "option" && (
                <input
                    // Set the input properties using the spread operator
                    {...inputProps}
                    // Disable autocomplete, autocorrect and autocapitalize
                    autoComplete="false"
                    autoCorrect="false"
                    autoCapitalize="false"
                    // Show password as plain text if showPassword is true, else show as the input type
                    type={showPassword ? "text" : type}
                    // Apply the input style classes
                    className={` w-full border-2 rounded  border-lightGray bg-transparent h-[40px] mt-1 focus:outline-none
                     focus:border-primary px-5  ${InputStyle}`}
                />
            )}

            {/* Render  this if the type is not 'passsword' */}
            {
                type !== "password" ?
                    <span className=" text-red-700 absolute bottom-[-20px] text-[10px] ">{errMessage}</span>
                    : ""
            }
        </div>
    );
}

export default Input;