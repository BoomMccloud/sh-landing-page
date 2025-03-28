import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Savannah Haus</h3>
            <p className="text-foreground/70 mb-4">
              Elevating brands through innovative advertising and app development solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Performance Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Brand Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  iOS & Android Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground/70">info@savannahhaus.com</span>
              </li>
              <li className="flex items-start">
                <Link 
                  href="https://calendly.com/jason-b-xu/30min" 
                  target="_blank"
                  className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                >
                  <span className="mr-2">Schedule a Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">© {new Date().getFullYear()} Savannah Haus. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

