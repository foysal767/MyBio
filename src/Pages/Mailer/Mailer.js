import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast';

const Mailer = () => {
    const sendEmail = event => {
        event.preventDefault()
        emailjs.sendForm('service_upmey2r', 'template_eyldl4c', event.target, 'nEafvTaZeN0Ss0GoV')
            .then(res => {
                console.log(res)
                toast.success('Message Successfully send!')
            })
            .catch(err => console.log(err))
    }
    return (
        <section className='py-16'>
            <div className='w-4/12 mx-auto rounded-xl border-2 p-6'>
                <h1 className='text-left text-3xl font-semibold text-success'>Contact Form</h1>
                <form className='my-6 text-left' onSubmit={sendEmail}>
                    <div>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='my-6'>
                        <input type="email" placeholder="Email" name='user_email' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered" name='message' placeholder="Message"></textarea>
                    </div>
                    <button className='btn btn-success mt-4' type="submit">Send</button>
                </form>
            </div>
        </section>

    );
};

export default Mailer;