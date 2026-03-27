'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Database, Brain, BarChart3, Zap, Lock, Users, ChevronRight, Headset, MessageCircle, Mail } from 'lucide-react';
import { Navbar1 } from '@/components/ui/navbar-1';
import { HeroSection } from '@/components/ui/hero-3';
import PricingSection4 from '@/components/ui/pricing-section-4';
import { TestimonialSection } from '@/components/ui/testimonials';
import { Features } from '@/components/ui/features-8';
import { HowItWorksVisual } from '@/components/ui/how-it-works-visual';
import { FaqSplit } from '@/components/ui/faq-split';
import { UseCasesVector } from '@/components/ui/use-cases-vector';
import { SiteFooter } from '@/components/ui/site-footer';
const ContactLocationMap = dynamic(
  () => import('@/components/ui/contact-location-map').then((m) => ({ default: m.ContactLocationMap })),
  { ssr: false, loading: () => <div className="mt-10 min-h-[320px] animate-pulse rounded-2xl bg-[#0a0a0a]" aria-hidden /> }
);

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, parameters: Record<string, unknown>) => number;
      reset: (optWidgetId?: number) => void;
      getResponse: (optWidgetId?: number) => string;
    };
    onRecaptchaLoadCallback?: () => void;
  }
}

export default function ZynteraiLanding() {
  const RECAPTCHA_SITE_KEY =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '6LfjmJgsAAAAAJnb7xcF9nVzc9jxoUbzKAVn4mtE';
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xojpvpaq';

  const recaptchaElRef = useRef<HTMLDivElement | null>(null);
  const recaptchaWidgetIdRef = useRef<number | null>(null);

  const [captchaToken, setCaptchaToken] = useState<string>('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState<string>('');

  const handleRecaptchaLoaded = useCallback(() => {
    if (!recaptchaElRef.current) return;
    if (!window.grecaptcha) return;
    if (recaptchaWidgetIdRef.current !== null) return;

    recaptchaWidgetIdRef.current = window.grecaptcha.render(recaptchaElRef.current, {
      sitekey: RECAPTCHA_SITE_KEY,
      theme: 'dark',
      callback: (token: string) => setCaptchaToken(token),
      'expired-callback': () => setCaptchaToken(''),
      'error-callback': () => setCaptchaToken(''),
    });
  }, [RECAPTCHA_SITE_KEY]);

  useEffect(() => {
    // v2 explicit render callback used by api.js?onload=...&render=explicit
    window.onRecaptchaLoadCallback = handleRecaptchaLoaded;
    // If the script is already present (client nav), render immediately.
    handleRecaptchaLoaded();
    return () => {
      if (window.onRecaptchaLoadCallback === handleRecaptchaLoaded) {
        delete window.onRecaptchaLoadCallback;
      }
    };
  }, [handleRecaptchaLoaded]);

  const handleContactSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setContactError('');

      const widgetId = recaptchaWidgetIdRef.current ?? undefined;
      const token = captchaToken || window.grecaptcha?.getResponse(widgetId) || '';

      if (!token) {
        setContactStatus('error');
        setContactError('Please complete the reCAPTCHA before submitting.');
        return;
      }

      setContactStatus('submitting');
      try {
        const res = await fetch('/api/recaptcha', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ token }),
        });
        const data = (await res.json()) as { success?: boolean; error?: string };

        if (!res.ok || !data.success) {
          setContactStatus('error');
          setContactError(data.error || 'reCAPTCHA verification failed. Please try again.');
          window.grecaptcha?.reset(widgetId);
          setCaptchaToken('');
          return;
        }

        const formEl = e.currentTarget as HTMLFormElement;
        const formData = new FormData(formEl);
        formData.append('g-recaptcha-response', token);

        const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });

        if (!formspreeRes.ok) {
          setContactStatus('error');
          setContactError('Unable to send your message right now. Please try again.');
          window.grecaptcha?.reset(widgetId);
          setCaptchaToken('');
          return;
        }

        setContactStatus('success');
        window.grecaptcha?.reset(widgetId);
        setCaptchaToken('');
        formEl.reset();
      } catch {
        setContactStatus('error');
        setContactError('Something went wrong. Please try again.');
        window.grecaptcha?.reset(widgetId);
        setCaptchaToken('');
      }
    },
    [captchaToken, FORMSPREE_ENDPOINT]
  );

  const testimonialsData = [
    {
      id: 1,
      quote:
        'Zynterai transformed our decision-making with real-time insights that improve strategy and execution.',
      name: 'Troy Wiliams',
      role: 'Chief Strategy Officer, Global Enterprise',
      imageSrc: '/W1.svg',
    },
    {
      id: 2,
      quote:
        'The centralized dashboard gives full cross-department visibility, eliminating silos and improving speed and clarity.',
      name: 'Edward Maya',
      role: 'Head of Operations, Mid-Sized Organization',
      imageSrc: '/W2.svg',
    },
    {
      id: 3,
      quote:
        'Zynterai interprets data, not just displays it. AI insights reduce manual analysis and improve decision accuracy.',
      name: 'Ivon Richards',
      role: 'Business Intelligence Lead, Technology Firm',
      imageSrc: '/W3.svg',
    },
  ];
  const useCaseItems = [
    {
      icon: Users,
      title: 'IDENTITY-BASED ATTACKS',
      description:
        'Phishing infrastructure spins up in minutes. ZentrovAI watches global DNS registration feeds around the clock — identifying lookalike domains and certificate fraud the moment they appear.',
      details:
        'This workflow monitors suspicious account behavior, validates user identity signals, and triggers rapid containment actions to stop impersonation attempts before they spread.',
    },
    {
      icon: Database,
      title: 'DOMAIN-BASED ATTACKS',
      description:
        'Lookalike domains and fresh phishing infrastructure appear faster than manual review can keep up. Zynterai correlates registrations, visual similarity, and certificate telemetry around the clock — surfacing impersonation and prioritizing takedowns before campaigns reach users.',
      details:
        'Domain intelligence pipelines continuously scan newly registered lookalike domains, score threat levels, and initiate automated takedown and blocklisting procedures.',
    },
    {
      icon: Brain,
      title: 'EMAIL-BASED ATTACKS',
      description:
        'Inboxes remain the main channel for BEC, credential theft, and targeted phishing. Zynterai reads headers, body, links, and attachments at scale — classifying intent, flagging social engineering, and routing only high-risk threads to analysts.',
      details:
        'AI agents classify message intent, detect social-engineering patterns, and prioritize incidents for analysts so high-risk email attacks are neutralized faster.',
    },
    {
      icon: Lock,
      title: 'SMS-BASED ATTACKS',
      description:
        'Smishing scales across short codes, spoofed senders, and burner numbers in hours. Zynterai ties message bursts, number reputation, and landing-page pivots together — enabling fast carrier blocks and coordinated response before losses mount.',
      details:
        'Telecom-layer signals and behavioral analysis help identify malicious SMS campaigns early, enabling fast number blocking and coordinated incident response.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/72 via-background/55 to-muted/50">

      <Navbar1 />
      <HeroSection />

      <HowItWorksVisual />

      <Features />

      {/* Use Cases Vector (sci-fi panel) */}
      <UseCasesVector items={useCaseItems.map((item) => ({ title: item.title, description: item.description }))} />

      <PricingSection4 />

      <TestimonialSection
        title="Trusted by Data-Driven Organizations"
        subtitle="How leadership teams use Zynterai to unify fragmented data and accelerate strategic decisions."
        testimonials={testimonialsData}
      />

      <FaqSplit />

      {/* Contact Section */}
      <section
        id="contact"
        className="relative isolate overflow-hidden px-4 py-20 backdrop-blur-[1px] sm:px-6 lg:px-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Contact%20Bg.svg')" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,40,49,0.78) 0%, rgba(49,54,63,0.68) 50%, rgba(34,40,49,0.82) 100%)",
          }}
        />
        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit"
          strategy="afterInteractive"
        />
        <div className="relative z-10 mx-auto max-w-6xl p-0">
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div>
              <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Contact
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-3 text-foreground/65 max-w-2xl">
                Do you have a question? Need help choosing the right product? Feel free to contact us.
              </p>

              <form
                className="glass-surface mt-8 space-y-5 rounded-2xl p-5 md:p-6"
                onSubmit={handleContactSubmit}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                      className="glass-surface-muted w-full rounded-full px-5 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your Last name"
                      required
                      className="glass-surface-muted w-full rounded-full px-5 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="glass-surface-muted w-full rounded-full px-5 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">Contact Details</label>
                    <div className="grid grid-cols-[88px_1fr] gap-2">
                      <input
                        type="text"
                        name="countryCode"
                        value="+971"
                        readOnly
                        className="glass-surface-muted w-full rounded-full px-4 py-3 text-foreground outline-none"
                      />
                      <input
                        type="text"
                        name="contactNumber"
                        placeholder="Enter your contact number"
                        required
                        className="glass-surface-muted w-full rounded-full px-5 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={4}
                    required
                    className="glass-surface-muted w-full resize-none rounded-2xl px-5 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                  />
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col gap-2">
                    <div
                      ref={recaptchaElRef}
                      className="min-h-[78px] rounded-xl border border-white/10 bg-black/20 p-3"
                    />
                    {contactError ? (
                      <p className="text-sm font-medium text-red-300">{contactError}</p>
                    ) : contactStatus === 'success' ? (
                      <p className="text-sm font-medium text-emerald-300">Message verified. We’ll get back to you soon.</p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    disabled={contactStatus === 'submitting'}
                    className="rounded-full bg-primary px-10 py-3 font-semibold text-primary-foreground shadow-[0_10px_30px_-14px_rgba(118,171,174,0.65)] transition hover:bg-primary/90 hover:shadow-[0_14px_38px_-16px_rgba(118,171,174,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {contactStatus === 'submitting' ? 'Submitting…' : 'Send a Message'}
                  </button>
                </div>
              </form>
              </div>

            <aside className="glass-surface rounded-3xl p-6 text-foreground shadow-sm">
              <h3 className="text-3xl font-bold leading-tight">
                Hi! We are always here
                <br />
                to help you.
              </h3>

              <div className="mt-6 space-y-3">
                <div className="glass-surface-muted rounded-xl p-4 transition hover:bg-muted/30">
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Headset className="h-4 w-4" /> Hotline:
                  </p>
                  <p className="mt-1 text-foreground/80">+1 212 735 8419</p>
          </div>
                <div className="glass-surface-muted rounded-xl p-4 transition hover:bg-muted/30">
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> SMS / Whatsapp
                  </p>
                  <p className="mt-1 text-foreground/80">+1 212 735 8419</p>
                </div>
                <div className="glass-surface-muted rounded-xl p-4 transition hover:bg-muted/30">
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email:
                  </p>
                  <p className="mt-1 text-foreground/80">info@zynterai.com</p>
                </div>
                <div className="glass-surface-muted rounded-xl p-4 transition hover:bg-muted/30">
                  <p className="text-sm font-semibold">Address:</p>
                  <p className="mt-1 text-foreground/80">350 5th Ave, New York, NY 10118, United States</p>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold text-foreground/90">Connect with us</p>
                {/* Social icons removed per request */}
        </div>
            </aside>
          </div>

          <ContactLocationMap />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
