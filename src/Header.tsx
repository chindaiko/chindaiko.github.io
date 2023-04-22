import { A } from '@solidjs/router';
import styles from "./css/Header.module.css"
import { Icon } from "solid-heroicons";
import { bars_3 } from "solid-heroicons/outline";
import { SliderButton } from 'solid-slider';

function Header(){
    
    const toggleMenu = () =>{
        const nav = document.getElementsByTagName('nav')[0] as HTMLElement;
        let height = getComputedStyle(nav).height;
        if(nav.classList.contains(styles.show)){
            nav.classList.remove(styles.show);
        }else{
            nav.classList.add(styles.show)
        }
        console.log(nav,height)
    }

    return(
        <div class={styles.header}>
            <div class={styles.title}>
                <A href="/" end>Chin Daiko</A>
            </div>

            <button id={styles.navbutton} onclick={toggleMenu}>
                <Icon path={bars_3}/>
            </button>

            <nav>
                <A href="/events">Events</A>
                <A href="/faq">FAQ</A>
                <A href="/contact">Contact us</A>
                
            </nav>

            
        </div>
    )
}

export default Header;