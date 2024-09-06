"use client"
import Link from 'next/link'
import React from 'react'
import { TbMessageChatbot } from "react-icons/tb";
const Landing = () => {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <div className='flex justify-center items-center gap-3'>

                    <TbMessageChatbot size={40} />

                    <Link href="#" className="text-xl font-bold" prefetch={false}>
                        AI chatbot
                    </Link>
                </div>
                <nav className="flex items-center gap-4">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="bg-primary py-12 md:py-24 lg:py-32 text-primary-foreground">
                    <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Converse with PDFs and Websites</h1>
                            <p className="max-w-[600px] text-lg">
                                Our AI chatbot can understand and respond to your questions about any PDF document or website. Get
                                instant answers and insights without the hassle of manual research.
                            </p>
                            <Link
                                href="/chat"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Try it Now
                            </Link>
                        </div>
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="310"
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        />
                    </div>
                </section>
                <section className="py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Chat with PDFs</h2>
                            <p className="max-w-[600px] text-muted-foreground">
                                Our AI chatbot can understand the content of any PDF document and provide you with instant answers to
                                your questions. Simply upload a PDF and start chatting.
                            </p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Try it with a PDF
                                </Link>
                            </div>
                        </div>
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="310"
                            alt="PDF Chat"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        />
                    </div>
                </section>
                <section className="bg-muted py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2">
                        <img
                            src="/placeholder.svg"
                            width="550"
                            height="310"
                            alt="Website Chat"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        />
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Chat with Websites</h2>
                            <p className="max-w-[600px] text-muted-foreground">
                                Our AI chatbot can understand the content of any website and provide you with instant answers to your
                                questions. Simply enter a URL and start chatting.
                            </p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Try it with a Website
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm">&copy; 2024 AI Chatbot. All rights reserved.</p>
                <nav className="flex items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
                    <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
                        Privacy Policy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

export default Landing
