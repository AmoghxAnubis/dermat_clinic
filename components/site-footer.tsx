import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468683685_545690398431332_8328133028339397898_n-YX4l1VbvLwSDvz37-xLM8cHqURbX7kZCFnnXtcAi9PEhCd5.avif"
              alt="Clinic Logo"
              width={150}
              height={50}
              className="mb-4 h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience the gold standard in skin care where science and artistry meet to reveal your best skin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Results Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@dermclinic.com</li>
              <li>123 Medical Plaza, Suite 100</li>
              <li>City, State 12345</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dermatology Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
