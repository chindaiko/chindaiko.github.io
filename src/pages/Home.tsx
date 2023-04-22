import { Show } from 'solid-js';
import "solid-slider/slider.css";
import styles from "../css/Home.module.css";
import { Slider } from "solid-slider";
import { SliderButton, SliderProvider, createSlider } from "solid-slider";
import c1 from '../assets/liz rizz.jpg';
import c2 from '../assets/squeamish boy.jpg';
import c3 from '../assets/huh.jpg';
import { Icon } from "solid-heroicons";
import { chevronLeft, chevronRight } from "solid-heroicons/outline";

function Home(){
    return(
        <div>
            <p>Home</p>
            <div>
                <Carousel/>
            </div>
            
            <div>
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo urna molestie. Ac ut consequat semper viverra nam libero justo. Platea dictumst vestibulum rhoncus est. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Etiam sit amet nisl purus in mollis nunc sed. Fringilla ut morbi tincidunt augue. Eu lobortis elementum nibh tellus molestie. Ultricies tristique nulla aliquet enim tortor at auctor urna. Euismod lacinia at quis risus sed vulputate. Aliquam ut porttitor leo a. Quisque sagittis purus sit amet volutpat consequat mauris nunc.

Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Imperdiet sed euismod nisi porta lorem mollis. Vivamus at augue eget arcu dictum varius duis at. A iaculis at erat pellentesque adipiscing commodo elit at. Fringilla ut morbi tincidunt augue interdum velit euismod in. Dictum at tempor commodo ullamcorper a. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Viverra orci sagittis eu volutpat odio facilisis. Purus non enim praesent elementum facilisis leo vel. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Nam libero justo laoreet sit amet cursus sit amet dictum. In metus vulputate eu scelerisque felis imperdiet proin fermentum.

Tellus in metus vulputate eu scelerisque. Neque viverra justo nec ultrices. Est velit egestas dui id ornare arcu odio ut. Dolor sit amet consectetur adipiscing elit. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Dictumst quisque sagittis purus sit amet volutpat. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Condimentum lacinia quis vel eros donec ac odio tempor. Massa massa ultricies mi quis hendrerit dolor magna eget est. Nunc pulvinar sapien et ligula. Nunc mattis enim ut tellus elementum sagittis vitae. Id ornare arcu odio ut sem nulla. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Neque ornare aenean euismod elementum nisi quis eleifend. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Pretium nibh ipsum consequat nisl. Mauris cursus mattis molestie a iaculis. In ante metus dictum at tempor commodo ullamcorper a lacus. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing.

Eget mauris pharetra et ultrices. Est placerat in egestas erat imperdiet sed. Lacus viverra vitae congue eu. Massa enim nec dui nunc. Diam vel quam elementum pulvinar. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nisi vitae suscipit tellus mauris a diam. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Commodo ullamcorper a lacus vestibulum sed. Lacus vel facilisis volutpat est velit egestas dui id.

Nulla malesuada pellentesque elit eget gravida. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Mauris pharetra et ultrices neque ornare aenean euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Adipiscing vitae proin sagittis nisl rhoncus mattis. Tempus urna et pharetra pharetra massa. Fusce id velit ut tortor pretium viverra suspendisse potenti. Justo nec ultrices dui sapien eget. Pretium aenean pharetra magna ac placerat. Amet consectetur adipiscing elit duis tristique sollicitudin. Mauris sit amet massa vitae tortor condimentum lacinia quis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Ut tellus elementum sagittis vitae.</p>
            </div>
            
        </div>
    )
}

export default Home;

function Carousel(props?: {class?: string; classList?: { [k: string]: boolean | undefined; }}){
    const options = {duration: 1000};
    const [slider, {current, next, prev, moveTo}] = createSlider(options);
    return(
        <div>
            <SliderProvider>
                <Slider options={{ loop: true}} >
                    <BlurFillImg src={c1} title={"Peace through understanding culture"} class={styles['home-carousel']}/>
                    <BlurFillImg src={c2} class={styles['home-carousel']}/>
                    <BlurFillImg src={c3} class={styles['home-carousel']}/>
                </Slider>
                <div class={styles['slider-button-row']}>
                    <SliderButton prev class={styles.prevslide}>
                        <Icon path={chevronLeft} />
                    </SliderButton>
                    <SliderButton next class={styles.prevslide}>
                        <Icon path={chevronRight} />
                    </SliderButton>
                </div>
                
            </SliderProvider>
        </div>
        
    );
}

function BlurFillImg(props: {src: string; title?: string; class?: string; classlist?:  { [k: string]: boolean | undefined; }}){
    return(
        <div class={props.class}>
            <img src={props.src} class={styles['carousel-img-bg']}></img>
            <img src={props.src} class={styles['carousel-img-fg']}></img>
            <Show when={props.title}>
                <p class={styles['carousel-title']}>{props.title}</p>
            </Show>
            
        </div>
    )
}