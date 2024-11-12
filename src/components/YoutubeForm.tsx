import { Button, TextField } from "@mui/material"

import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    email: Yup.string().email('Invalid format').required("email is required"),
    channel: Yup.string().required("channel is required"),
})

type FormDataType = {
    username: string,
    email: string,
    channel: string,

}

function YoutubeForm() {

    const form = useForm<FormDataType>({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            email: "",
            channel: "",
        }
    })
    const { register, handleSubmit, control, formState: { errors } } = form

    const onSubmit = (data: FormDataType) => {
        console.log("form submitted", data)
    }

    return (
        <div >
            <h1 className="text-2xl">i am  youtube form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
                <div>
                    <TextField
                        id="standard-basic"
                        label="User Name"
                        variant="standard"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Channel"
                        variant="standard"
                        {...register("channel")}
                        error={!!errors.channel}
                        helperText={errors.channel?.message}
                    />
                </div>
                <div>
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default YoutubeForm
