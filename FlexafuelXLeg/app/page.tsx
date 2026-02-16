'use client';

import { Navbar } from '@/components/navbar';
import { Banner } from '@/components/banner';
import { WorkoutAccordion } from '@/components/workout-accordion';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Banner />
      <WorkoutAccordion />
      <Footer/>
    </main>
  );
}
