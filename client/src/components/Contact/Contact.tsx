import { Button, FormControl, FormLabel, Input, Textarea } from "@hope-ui/solid";
import { createSignal } from "solid-js";
import { currentLibrary } from "../../store";
import { HiOutlineMail } from 'solid-icons/hi'

import "./styles.css";

export default function Contact() {
    const [contactForm, setContactForm] = createSignal({ name: "", email: "", subject: "", message: "" });

    const handleContactFormChange = (e: any) => {
        setContactForm({ ...contactForm(), [e.target.id]: e.target.value })
    }

    const isValid = () => {
        if (contactForm().name && contactForm().email && contactForm().subject && contactForm().message) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(contactForm());
    }

    return (
        <div class="contact-outer-container" id="contact">
            <div class="contact-inner-container">
                <div class="header-container">
                    <h1>{currentLibrary().contact.title}</h1>
                    <div>{currentLibrary().contact.p1}</div>
                    <div class="email-container">
                        <HiOutlineMail size={24} color="#000000" />
                        <div style="margin-left:10px"><strong>Jerome.Gautier92@gmail.com</strong></div>
                    </div>
                </div>
                <form class="contact-form" onsubmit={handleSubmit}>
                    <div class="first-div">
                        <FormControl class="input-container">
                            <FormLabel for="name">{currentLibrary().contact.input1}</FormLabel>
                            <Input id="name" type="name" oninput={handleContactFormChange} />
                        </FormControl>
                        <FormControl class="input-container">
                            <FormLabel for="email">{currentLibrary().contact.input2}</FormLabel>
                            <Input id="email" type="email" oninput={handleContactFormChange} />
                        </FormControl>
                    </div>
                    <FormControl class="input-container">
                        <FormLabel for="subject">{currentLibrary().contact.input3}</FormLabel>
                        <Input id="subject" type="subject" oninput={handleContactFormChange} />
                    </FormControl>
                    <FormControl class="input-container">
                        <FormLabel>{currentLibrary().contact.input4}</FormLabel>
                        <Textarea id="message" name="message" rows="5" oninput={handleContactFormChange} />
                    </FormControl>
                    <Button class="submit-btn" type="submit" disabled={!isValid()}>
                        {currentLibrary().contact["submit-btn"]}
                    </Button>
                </form>
            </div>
        </div>
    )
}