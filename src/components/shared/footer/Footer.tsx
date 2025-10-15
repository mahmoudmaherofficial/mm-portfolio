"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const links = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mahmoudmaherofficial",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mahmoudmaherofficial2/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mahmoudmaherofficial@gmail.com",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      href: "https://mahmoudmaher.netlify.app",
    },
  ];

  return (
    <footer className="mt-16 border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight">Mahmoud Maher</h2>
            <p className="text-sm text-muted-foreground">Building modern web experiences 🚀</p>
          </motion.div>

          {/* Links */}
          <motion.ul
            className="flex flex-wrap !justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="hover:text-primary transition-colors font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Socials */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}>
            {socials.map((social, i) => (
              <Button
                key={i}
                size="icon"
                variant="ghost"
                className="hover:text-primary transition-transform hover:scale-110"
                asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom note */}
        <motion.div
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          © {new Date().getFullYear()} Mahmoud Maher. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
