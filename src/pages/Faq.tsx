import { Accordion } from '@kobalte/core';
import { For } from 'solid-js';
import faq from '../assets/faq.json';
import styles from '../css/Faq.module.css';
import { Icon } from 'solid-heroicons';
import { chevronUp } from 'solid-heroicons/outline';

function Faq(){
    return(
        <div>
            <p>Faq</p>
            
            <Accordion.Root isMultiple class={styles.root}>
            <For each={faq.list} fallback={<div>no items available</div>}>
                {(item, index) => (
                    <Accordion.Item value={index().toString()} class={styles.item}>
                        <Accordion.Header class={styles.header}>
                            <Accordion.Trigger class={styles.trigger}>
                                <span>{item.question}</span>
                                <Icon path={chevronUp} class={styles['trigger-icon']}/>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content class={styles['item-content']}>
                            <p>{item.answer}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                )}
            </For>
            </Accordion.Root>
        </div>
    )
}

export default Faq;