import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-[hsl(var(--primary))]">
              Savannah Haus
            </Link>
            <p className="mt-4 text-[hsl(var(--foreground))/0.7]">
              Digital solutions for modern businesses. Transform your digital presence with our expertise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/performance" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Performance Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/brand" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Brand Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/creative" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Creative Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/measurement" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Measurement Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[hsl(var(--foreground))/0.7] hover:text-[hsl(var(--primary))]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(var(--border))]">
          <p className="text-center text-sm text-[hsl(var(--foreground))/0.7]">
            © {new Date().getFullYear()} Savannah Haus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 