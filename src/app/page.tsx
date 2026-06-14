import { Navbar } from "@/components/navbar";
import { ArrowRight, TrendingDown, Target, Brain } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Track Your Spending. <span className="text-primary">Save Smarter.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10">
                Fundly helps you understand where your money goes and reach goals faster.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground"
              >
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}