"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Play,
  Scissors,
  ArrowRight,
  Menu,
  X,
  Check,
  Upload,
  Download,
} from "lucide-react";

export default function PodcastClipperLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Saved me 10 hours a week. Just upload and boom - perfect clips ready to share.",
      author: "Sarah K.",
      role: "Podcast Host",
    },
    {
      text: "My clips are getting 5x more views now. The AI knows exactly what to pick.",
      author: "Mike R.",
      role: "Content Creator",
    },
    {
      text: "Finally, a tool that actually works as advertised. Simple and powerful.",
      author: "Lisa M.",
      role: "Marketing Director",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-100 px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900">
              <Scissors className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              khalid/studio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#how"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              Pricing
            </a>
            <Link href="/login" passHref>
              <button className="text-gray-600 transition-colors hover:text-gray-900">
                Login
              </button>
            </Link>
            <Link href="/signup" passHref>
              <button className="rounded-lg bg-gray-900 px-5 py-2 text-white transition-colors hover:bg-gray-800">
                Sign up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-gray-100 pt-4 md:hidden">
            <div className="space-y-4">
              <a
                href="#how"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="block text-gray-600 transition-colors hover:text-gray-900"
              >
                Pricing
              </a>
              <Link href="/login" passHref>
                <button className="block text-gray-600 transition-colors hover:text-gray-900">
                  Login
                </button>
              </Link>
              <Link href="/signup" passHref>
                <button className="w-full rounded-lg bg-gray-900 px-5 py-2 text-white transition-colors hover:bg-gray-800">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-5xl leading-tight font-light md:text-7xl">
            Turn your podcast into
            <span className="block font-medium">
              clips that actually get watched
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-600">
            Upload your podcast. Get AI-generated clips in minutes. Share
            everywhere and watch your audience grow.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup" passHref>
              <button className="flex items-center rounded-lg bg-gray-900 px-8 py-3 text-white transition-colors hover:bg-gray-800">
                Try it free
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
            <button className="flex items-center rounded-lg border border-gray-300 px-8 py-3 transition-colors hover:border-gray-400">
              <Play className="mr-2 h-4 w-4" />
              Watch demo
            </button>
          </div>

          {/* Simple stats */}
          <div className="space-x-8 text-sm text-gray-500">
            <span>50+ creators</span>
            <span>•</span>
            <span>300+ clips generated</span>
            <span>•</span>
            <span>No credit card required</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-light">Dead simple process</h2>
            <p className="text-gray-600">Three steps. That&#39;s it.</p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Upload your podcast</h3>
              <p className="leading-relaxed text-gray-600">
                Drag and drop your audio or video file. We support MP4 files up
                to 500MB.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Scissors className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-medium">AI finds the gold</h3>
              <p className="leading-relaxed text-gray-600">
                Our AI listens to your entire podcast and picks out the most
                engaging moments automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Download and share</h3>
              <p className="leading-relaxed text-gray-600">
                Get perfectly sized viral clips ready for TikTok, Instagram,
                YouTube Shorts, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial slider */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8">
            <p className="mb-6 text-2xl leading-relaxed font-light">
              &quot;{testimonials[currentTestimonial]?.text}&quot;
            </p>
            <div>
              <div className="font-medium">
                {testimonials[currentTestimonial]?.author}
              </div>
              <div className="text-sm text-gray-600">
                {testimonials[currentTestimonial]?.role}
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-gray-900" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-light">Simple pricing</h2>
            <p className="text-gray-600">Start free. Pay as you grow.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Free */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-medium">Free</h3>
                <div className="text-3xl font-light">$0</div>
                <p className="text-sm text-gray-600">Perfect to get started</p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-600" />
                  10 credits included
                </li>
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-600" />
                  AI clip generation
                </li>
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-600" />
                  Download all clips
                </li>
              </ul>
              <Link href="/signup" passHref>
                <button className="w-full rounded-lg border border-gray-300 py-3 transition-colors hover:border-gray-400">
                  Start free
                </button>
              </Link>
            </div>

            {/* Medium - Featured */}
            <div className="relative rounded-xl bg-gray-900 p-8 text-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-gray-900 px-4 py-1 text-xs text-white">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-medium">Medium Pack</h3>
                <div className="text-3xl font-light">$24.99</div>
                <p className="text-sm text-gray-300">
                  Best value for regular podcasters
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-300" />
                  150 credits
                </li>
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-300" />
                  No expiration
                </li>
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-300" />
                  Priority processing
                </li>
              </ul>
              <button className="w-full rounded-lg bg-white py-3 text-gray-900 transition-colors hover:bg-gray-100">
                Buy 150 credits
              </button>
            </div>

            {/* Large */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-medium">Large Pack</h3>
                <div className="text-3xl font-light">$69.99</div>
                <p className="text-sm text-gray-600">
                  For studios and agencies
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-600" />
                  500 credits
                </li>
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-600" />
                  No expiration
                </li>
                <li className="flex items-center text-sm">
                  <Check className="mr-3 h-4 w-4 text-gray-600" />
                  Priority support
                </li>
              </ul>
              <button className="w-full rounded-lg border border-gray-300 py-3 transition-colors hover:border-gray-400">
                Buy 500 credits
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              1 credit = 1 minute of podcast processing • About 1 clip per 5
              minutes
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-light">
            Ready to grow your podcast?
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Join hundreds of creators who are already using AI to amplify their
            reach.
          </p>
          <Link href="/signup" passHref>
            <button className="rounded-lg bg-gray-900 px-8 py-3 text-white transition-colors hover:bg-gray-800">
              Start creating clips now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-3 md:mb-0">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-900">
                <Scissors className="h-3 w-3 text-white" />
              </div>
              <span className="font-medium text-gray-900">khalid/studio</span>
            </div>
            <div className="flex space-x-8 text-sm text-gray-600">
              <a href="#" className="transition-colors hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-gray-900">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
