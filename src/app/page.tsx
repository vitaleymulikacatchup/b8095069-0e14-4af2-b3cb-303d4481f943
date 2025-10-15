"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "High-End Gaming PC Interior with Colorful RGB Lights" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34234301/pexels-photo-34234301.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two professionals working at a shared office desk, top view." },
  { "id": "feature-image-1", "url": "https://images.pexels.com/photos/11035537/pexels-photo-11035537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a hand holding a sticker with a humorous tech message: 'It's not a bug, it's a feature.'" },
  { "id": "feature-image-2", "url": "https://images.pexels.com/photos/9558903/pexels-photo-9558903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Happy teenage girl showcasing smartphone with green screen for mockup or design." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/29179693/pexels-photo-29179693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young woman wearing headphones, typing on a laptop with nearby smartphone on a white table." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Peak"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Elevate Your Workflow"
            description="Discover innovative solutions with Peak SaaS."
            buttons={[{ text: "Get Started", href: "about" }, { text: "Learn More", href: "pricing" }]}
            imageSrc="https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Transforming Ideas into Reality with Cutting-Edge Technology."
            buttons={[{ text: "Our Story", href: "about" }, { text: "Meet the Team", href: "team" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            features={[
              { title: "Seamless Integration", description: "Integrate with ease using powerful APIs.", imageSrc: "https://images.pexels.com/photos/11035537/pexels-photo-11035537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { title: "User-Friendly Interface", description: "Experience simplicity and efficiency.", imageSrc: "https://images.pexels.com/photos/9558903/pexels-photo-9558903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Choose Your Plan"
            plans={[
              { id: "1", price: "$29/mo", name: "Basic", buttons: [{ text: "Get started", href: "contact" }, { text: "Contact Sales", href: "contact" }], features: ["10 projects", "Basic support", "Limited features"] },
              { id: "2", badge: "Most popular plan", badgeIcon: "Sparkles", price: "$49/mo", name: "Pro", buttons: [{ text: "Get started", href: "contact" }, { text: "Contact Sales", href: "contact" }], features: ["Unlimited projects", "Priority support", "All features"] }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for the latest updates."
            imageSrc="https://images.pexels.com/photos/29179693/pexels-photo-29179693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Careers", href: "careers" }] },
              { title: "Resources", items: [{ label: "Blog", href: "blog" }, { label: "Help Center", href: "faq" }] }
            ]}
            copyrightText="© 2025 | Peak"
            onPrivacyClick={() => console.log('Privacy clicked')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
