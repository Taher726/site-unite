import ContactForm from "./components/contact_form";
import HeroContact from "./components/hero_contact";

export default function ContactPage() {
    return (
        <div className="bg-white">
            <HeroContact />
            <ContactForm/>
        </div>
    );
}