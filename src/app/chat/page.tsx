import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function page() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">AI Chatbot Assistant</h1>
                    <p className="text-muted-foreground mt-2 max-w-[650px] mx-auto">
                        Get personalized assistance and answers to your questions by uploading a PDF file or chatting with our
                        AI-powered chatbot.
                    </p>
                </div>
                <div className="bg-muted rounded-lg p-6 md:p-8 space-y-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold">Upload a PDF</h2>
                            <p className="text-muted-foreground">Share a document and let our AI assistant analyze it.</p>
                        </div>
                        <Button variant="outline" className="w-full md:w-auto">
                            <UploadIcon className="mr-2 h-5 w-5" />
                            Upload PDF
                        </Button>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold">Talk to Us</h2>
                            <p className="text-muted-foreground">Chat with our AI assistant to get personalized help.</p>
                        </div>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            <WebcamIcon className="mr-2 h-5 w-5" />
                            Talk to Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function UploadIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}


function WebcamIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="10" r="8" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 22h10" />
            <path d="M12 22v-4" />
        </svg>
    )
}