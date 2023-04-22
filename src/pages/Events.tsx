import events from '../assets/events.json';
import styles from '../css/Events.module.css';
import { Icon } from 'solid-heroicons';
import dayjs from 'dayjs';
import { createSignal, createEffect, Index, getOwner, onMount} from 'solid-js';

interface d2 extends Date{
    toCH(): string;
    adjust(): d2;
}
let d = new d2()
d.setDate(1);
// let d = dayjs().date(1);
const[date, setDate] = createSignal(d)
// function adjust(n: number): Date{
//     return new Date(date().setMonth(date().getMonth() + n, 1))
// }

function toCH(i: Date): string{
    return `${new Intl.DateTimeFormat("en-US",{month:"long"}).format(date())} ${date().getFullYear()}`;
}


function Events(){
    // const cells = Array(42);
    const[cells, setCells] = createSignal(Array(42)); 
    const setCell = (index: number, value: number) => {
        const cell = cells()[index];
        cells()[index] = value;
    }
    function draw(d: Date): void{
        let start = new Date(d);
        start.setDate(1 - d.getDay());
        for(let i=0; i<cells.length; i++){
            if(start.getMonth() == d.getMonth()){
                setCell(i, 1)
            }else{
                setCell(i, 0)
            }
            start.setDate(start.getDate() + 1);
        }
        console.log(cells())
    }
    function checkMonth(){
        //get start, return true or false if month match, and increment day
    }
    // onMount(()=>{draw(date())})
    createEffect(()=>{draw(date())})
    return(
        <div>
            <p>Events</p>
            <p class={styles.cent}>{toCH(date())}</p>
            <div class={styles.cent}>
            <button onClick={()=> date().add(1, 'M') /* fix this */}>next month</button>
            <br />
            <button onClick={()=> date().subtract(1, 'M')}>previous month</button>
            <br />
            <br />
            <button onClick={()=> date().add(1, 'y')}>next year</button>
            <br />
            <button onClick={()=> date().subtract(1, 'y')}>previous year</button>
            </div>

            <div class={styles['calendar-container']}>
                <Index each={cells()}>{(c,i)=>
                    <div class={styles.cell}>{i} {c()}b</div>
                }</Index>
            </div>
        </div>
    )
}

export default Events;

