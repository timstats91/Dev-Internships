import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({formId}) => {
    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
        return <p className="max-w-5xl mx-auto my-5">Message sent!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="border-2 border-slate-400 p-10 max-w-5xl mx-auto my-5 ">
            <div>
                <label htmlFor="email">
                    Email Address
                </label>
                <Input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="mt-3">
                <label htmlFor="message">
                    Message
                </label>
                <div>
                    <textarea className="border-2 border-slate-400 p-1 hover:border-slate-500 w-[212px]"
                    id="message"
                    name="message"
                    />
                </div>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div>
                <button className="btn" type="submit" disabled={state.submitting}>
                Submit
                </button>
            </div>
      </form>
    );
};