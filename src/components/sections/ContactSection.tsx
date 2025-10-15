import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setSent(true);
        setIsSending(false);
        form.current?.reset();
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSending(false);
      }
    );
  };

  return (
    <section id="contact" className="relative py-16 overflow-x-hidden">
      <div className="container grid items-start gap-16 px-6 mx-auto md:grid-cols-2">
        {/* Left: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Let’s get in touch 📬</h2>
            <p className="max-w-md text-muted-foreground">
              I’d love to hear from you! Whether you have a question, project idea, or just want to say hi.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Input name="name" placeholder="Your Name" required />
              <Input type="email" name="email" placeholder="Your Email" required />
            </div>
            <Input name="title" placeholder="Message title" required />
            <Textarea name="message" placeholder="Your Message" rows={4} required />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto font-medium hover:scale-[1.02] transition-transform"
            disabled={isSending}>
            {isSending ? "Sending..." : sent ? "Message Sent ✅" : "Send Message"}
          </Button>
        </motion.form>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8">
          <div>
            <h3 className="mb-3 text-xl font-semibold">Contact Information</h3>
            <p className="max-w-sm mb-6 text-muted-foreground">
              You can reach out through email, phone, or connect with me on my social platforms.
            </p>

            <div className="space-y-4 text-sm">
              <a href="mailto:mahmoudmaherofficial@gmail.com" className="group flex !justify-start items-center gap-3">
                <Mail className="w-5 h-5 transition-all text-primary group-hover:text-primary/70 group-hover:scale-110" />
                <span>mahmoudmaherofficial@gmail.com</span>
              </a>
              <a href="tel:+201093931501" className="group flex !justify-start items-center gap-3">
                <Phone className="w-5 h-5 transition-all text-primary group-hover:text-primary/70 group-hover:scale-110" />
                <span>+20 10 9393 1501</span>
              </a>
              <a
                href="https://maps.google.com/?q=Menofia,+Egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex !justify-start items-center gap-3">
                <MapPin className="w-5 h-5 transition-all text-primary group-hover:text-primary/70 group-hover:scale-110" />
                <span>Menofia, Egypt</span>
              </a>
            </div>
          </div>

          <Separator className="w-2/3 my-4" />

          <div>
            <h4 className="mb-3 text-lg font-medium">Social Links</h4>
            <div className="flex !justify-start items-center gap-5">
              <a
                href="https://github.com/mahmoudmaherofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:text-primary hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoudmaherofficial2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:text-primary hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
