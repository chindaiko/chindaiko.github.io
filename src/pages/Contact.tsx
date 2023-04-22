import { Icon } from "solid-heroicons";
import { envelope } from "solid-heroicons/outline";

function Contact(){
    return(
        <div>
            <p>Contact</p>

            <a href="http://mail.google.com/mail/?view=cm&fs=1&to-chindaiko@gmail.com">
                <Icon path={envelope} style="color: black; "></Icon>

            </a>
        </div>
    )
}

export default Contact;