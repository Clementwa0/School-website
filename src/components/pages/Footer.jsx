import { 
  MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube,
  ExternalLink, Download, BookOpen, Users, Calendar, FileText
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* School Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-school-gold/10 p-2 rounded-lg">
                <img 
                  src="/school-logo.png" 
                  alt="Excellence Academy Logo" 
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Excellence Academy</h3>
                <p className="text-sm text-gray-300">Est. 1985</p>
              </div>
            </div>
            <p className="text-gray-300 italic border-l-2 border-school-gold pl-3">
              "Nurturing Excellence, Inspiring Futures"
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              A premier institution dedicated to academic excellence, character development, and lifelong learning.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-school-gold rounded-full"></span>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-school-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white">123 Education Boulevard</p>
                  <p className="text-gray-400 text-sm">Learning City, LC 12345</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-school-gold flex-shrink-0" />
                <div>
                  <p className="text-white">(555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 8AM - 4PM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-school-gold flex-shrink-0" />
                <a 
                  href="mailto:info@excellenceacademy.edu" 
                  className="text-white hover:text-school-gold transition-colors"
                >
                  info@excellenceacademy.edu
                </a>
              </div>
              <button className="inline-flex items-center gap-2 text-sm text-school-gold hover:text-yellow-500 transition-colors">
                <ExternalLink className="h-4 w-4" />
                View on Google Maps
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-school-gold rounded-full"></span>
              Quick Links
            </h4>
            <nav className="grid grid-cols-1 gap-3">
              {[
                { icon: <BookOpen className="h-4 w-4" />, label: "About Us", href: "/about" },
                { icon: <Users className="h-4 w-4" />, label: "Admissions", href: "/admissions" },
                { icon: <BookOpen className="h-4 w-4" />, label: "Academics", href: "/academics" },
                { icon: <Calendar className="h-4 w-4" />, label: "News & Events", href: "/events" },
                { icon: <FileText className="h-4 w-4" />, label: "School Calendar", href: "/calendar" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="text-school-gold group-hover:translate-x-1 transition-transform">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-5">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-school-gold rounded-full"></span>
                Resources
              </h4>
              <div className="space-y-3">
                {[
                  { icon: <ExternalLink className="h-4 w-4" />, label: "Parent Portal", href: "#" },
                  { icon: <ExternalLink className="h-4 w-4" />, label: "Student Portal", href: "#" },
                  { icon: <Download className="h-4 w-4" />, label: "Download Forms", href: "#" },
                  { icon: <FileText className="h-4 w-4" />, label: "School Policies", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-school-gold">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-white">Stay Updated</h5>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-school-gold"
                />
                <button className="px-4 py-2 bg-school-gold hover:bg-school-gold/90 text-gray-900 font-medium rounded text-sm transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 Excellence Academy. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
                { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-school-gold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;