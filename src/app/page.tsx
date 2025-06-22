'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-gray-900 scroll-smooth">
  <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
    <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-indigo-600 select-none">LoopList</h1>
      <a
        href="#early-access"
        className="inline-block px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
      >
        Early Access
      </a>
    </nav>
  </header>

  <main className="max-w-7xl mx-auto px-6 pt-20 pb-20 flex flex-col gap-20">
    {/* Hero Section */}
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24"
      aria-label="Hero section introducing LoopList"
    >
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-indigo-700 drop-shadow-lg">
          Your Smart To-Do List That Plans Itself
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          LoopList is an intelligent task manager that learns your habits and auto-prioritizes your day—so you can focus on what matters most. Stop rearranging tasks and start getting things done effortlessly.
        </p>

        <a
          href="#early-access"
          className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition transform hover:-translate-y-0.5"
        >
          Get Early Access
        </a>
      </div>
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Person using smart to-do list on mobile device"
          className="rounded-xl shadow-2xl border border-indigo-200 hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </section>

    {/* Features Section */}
    <section
      id="features"
      aria-label="Features and benefits of LoopList"
      className="bg-white rounded-3xl shadow-xl p-10 md:p-16"
    >
      <h3 className="text-3xl font-bold text-indigo-700 text-center mb-12 drop-shadow-sm">
        Features Designed To Help You Focus
      </h3>
      <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
        <article className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-default">
          <div className="text-5xl mb-4" aria-hidden="true">🧠</div>
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">AI-powered daily planning</h4>
          <p className="text-gray-700 leading-relaxed">
            LoopList learns your habits and automatically prioritizes your tasks so your day flows naturally.
          </p>
        </article>
        <article className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-default">
          <div className="text-5xl mb-4" aria-hidden="true">🔁</div>
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Auto-rescheduling for missed tasks</h4>
          <p className="text-gray-700 leading-relaxed">
            Never lose track of your work. LoopList intelligently reschedules unfinished tasks so you stay on top effortlessly.
          </p>
        </article>
        <article className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-default">
          <div className="text-5xl mb-4" aria-hidden="true">📱</div>
          <h4 className="text-xl font-semibold text-indigo-600 mb-2">Works across devices, in real-time</h4>
          <p className="text-gray-700 leading-relaxed">
            Access your to-do list anytime, anywhere with seamless syncing across all your devices.
          </p>
        </article>
      </div>
    </section>

    {/* Social Proof / Testimonials Section */}
    <section
      aria-label="User testimonials"
      className="max-w-5xl mx-auto px-4"
    >
      <h3 className="text-3xl font-bold text-indigo-700 text-center mb-12 drop-shadow-sm">
        What Early Users Are Saying
      </h3>
      <div className="grid gap-10 md:grid-cols-3">
        <figure className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
          <blockquote className="text-gray-800 italic mb-4">
            “LoopList transformed how I organize my day. The AI prioritization means I get the most important tasks done without stress.”
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80"
              alt="User portrait of Sarah"
              className="rounded-full w-12 h-12 object-cover border-2 border-indigo-500"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-indigo-600">Sarah M.</p>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          </figcaption>
        </figure>
        <figure className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
          <blockquote className="text-gray-800 italic mb-4">
            “The auto-rescheduling feature saves me so much time and guilt. I never feel overwhelmed anymore.”
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=64&q=80"
              alt="User portrait of James"
              className="rounded-full w-12 h-12 object-cover border-2 border-indigo-500"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-indigo-600">James L.</p>
              <p className="text-sm text-gray-500">Freelancer</p>
            </div>
          </figcaption>
        </figure>
        <figure className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
          <blockquote className="text-gray-800 italic mb-4">
            “I love that LoopList stays in sync on my phone and laptop. My tasks are always up to date, no matter where I am.”
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80"
              alt="User portrait of Emily"
              className="rounded-full w-12 h-12 object-cover border-2 border-indigo-500"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-indigo-600">Emily R.</p>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>

    {/* Call to Action Section */}
    <section
      id="early-access"
      aria-label="Early access sign up"
      className="bg-indigo-700 rounded-3xl p-10 md:p-16 shadow-lg text-white text-center max-w-4xl mx-auto"
    >
      <h3 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
        Be one of the first to try LoopList
      </h3>
      <p className="text-lg max-w-xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
        Sign up for early access and start getting things done effortlessly.
      </p>

      <form
        className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        onSubmit={e => e.preventDefault()}
        aria-label="Early access sign up form"
      >
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          required
          className="flex-1 rounded-full px-5 py-3 text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
        />
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 font-semibold px-6 py-3 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition transform hover:-translate-y-0.5"
        >
          Notify Me
        </button>
      </form>
    </section>
  </main>

  <footer className="bg-white border-t border-indigo-100 mt-20">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm select-none">
      <p>© {new Date().getFullYear()} LoopList. All rights reserved.</p>
      <nav className="flex gap-6 mt-4 md:mt-0">
        <a
          href="#hero"
          className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded transition"
        >
          Home
        </a>
        <a
          href="#features"
          className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded transition"
        >
          Features
        </a>
        <a
          href="#early-access"
          className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded transition"
        >
          Early Access
        </a>
        <a
          href="mailto:support@looplist.app"
          className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded transition"
        >
          Contact
        </a>
      </nav>
    </div>
  </footer>
</div>
  )
}