import { Link } from "react-router-dom";
import bgSignup from "../assets/image/bgSignup.png"
import { BrandLogo } from "../assets/svg/svg";
import Input from "../components/Input";

const LoginPage = () => {
    return (
        <div className=" h-screen w-full grid grid-cols-2 bg-gray text-white ">
            <section className=" relative p-[29px] h-screen flex flex-col justify-center  ">
                <img className="object-cover top-0 right-0 absolute w-full h-screen " src={bgSignup} alt="" />
            </section>
            <div className=" h-screen w-full p-[50px] flex-col flex justify-center ">
                <div className=" mb-10">
                    <BrandLogo />
                    <h3 className=" text-[14px]">Create account</h3>
                    <p className=" text-sm text-primary">Lorim epsim......</p>
                </div>
                <form className=" text-sm">
                    <div className=" grid grid-cols-2 gap-3 ">
                        <Input
                            id="firstName"
                            label="First name"
                            placeholder="First name..."
                            type="text"
                            value=""
                        />
                        <Input
                            id="lastName"
                            label="Last name"
                            placeholder="Last name..."
                            type="text"
                            value=""
                        />
                        <Input
                            id="email "
                            label="Email "
                            placeholder="Email..."
                            type="email"
                            value=""
                        />

                        <Input
                            id="password"
                            label="Password"
                            placeholder="Password..."
                            type="password"
                            value=""
                        />
                    </div>
                    <div className=" flex col-span-2 justify-between items-center mb-[20px] mt-[21px]">
                        <div className=" flex items-center  gap-2">
                            <input className="  checked:bg-[#ffff]" type="checkbox" />
                            <p>Remember me.</p>
                        </div>
                        <p><Link to="" className=" text-primary">Forgot Password?</Link></p>
                    </div>
                    <div className=" flex items-center  gap-2">
                        <input className="  checked:bg-[#ffff]" type="checkbox" />
                        <p>I agree to all the <span className=" text-primary">Terms</span> and <span className=" text-primary">Privacy policy</span> </p>
                    </div>

                    <div className=" grid grid-cols-2 gap-3  text-[14px] my-5">
                        <button className="h-[35px] bg-primary text-white font-medium rounded">Create account</button>
                        <div className="h-[35px] hover:cursor-pointer  bg-lightGray flex justify-center items-center rounded  font-medium">Sign-in with google</div>
                    </div>
                    <p className=" text-center text-[14px]">Don’t have an account? <span  className=" text-primary">Log In</span></p>
                </form>

            </div>
        </div>
    );
}

export default LoginPage;