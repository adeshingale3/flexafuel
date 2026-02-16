'use client';

import { Navbar } from '@/components/navbar';
import { Banner } from '@/components/banner';
import Strip from '@/components/strip';
import { WorkoutAccordion } from '@/components/workout-accordion';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Banner />
      <Strip />
      <WorkoutAccordion />
      <Footer/>
    </main>
  );
}
