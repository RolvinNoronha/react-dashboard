
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import Register from "./Register";
import SignIn from "./SignIn";

export type Props = {
    register: boolean,
    setRegister: Dispatch<SetStateAction<boolean>>,
}

const Form = () => {

    const router = useRouter();
    const [register, setRegister] = useState<boolean>(false);

    

    return (
        <div className="justify-center max-[1000px]:w-4/5 flex-col items-center h-1/2 w-2/5">
            {register ? 
                <Register 
                    register={register}
                    setRegister={setRegister}
                />
                :
                <SignIn 
                    register={register}
                    setRegister={setRegister}
                />
            }
        </div>
  )
}

export default Form