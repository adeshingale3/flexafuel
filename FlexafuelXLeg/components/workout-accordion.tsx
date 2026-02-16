'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const workouts = [
  {
    id: 1,
    title: 'Barbell Back Squats',
    description:
      'The king of leg exercises. Perform 4 sets of 6-8 reps with heavy weight for maximum strength gains.',
    details: [
      'Warm-up: 2 sets of 10 reps with light weight',
      'Main sets: 4 x 6-8 reps at 85-90% of 1RM',
      'Rest: 3-5 minutes between sets',
      'Form tip: Keep chest up and knees tracking over toes',
    ],
  },
  {
    id: 2,
    title: 'Romanian Deadlifts',
    description:
      'Perfect for targeting hamstrings and lower back. Perform 3 sets of 8-10 reps with controlled tempo.',
    details: [
      'Warm-up: 10 light repetitions',
      'Main sets: 3 x 8-10 reps at moderate weight',
      'Rest: 90-120 seconds between sets',
      'Form tip: Hip hinge movement, slight knee bend',
    ],
  },
  {
    id: 3,
    title: 'Leg Press',
    description:
      'Compound movement that builds mass in quads and glutes. Perform 3-4 sets of 10-12 reps.',
    details: [
      'Warm-up: 15 reps at light weight',
      'Main sets: 3-4 x 10-12 reps',
      'Rest: 90 seconds between sets',
      'Form tip: Full range of motion without locking knees',
    ],
  },
  {
    id: 4,
    title: 'Leg Curls',
    description:
      'Isolation exercise for hamstrings. Perform 3 sets of 12-15 reps with controlled movements.',
    details: [
      'Warm-up: 10 reps at light weight',
      'Main sets: 3 x 12-15 reps',
      'Rest: 60 seconds between sets',
      'Form tip: Squeeze at the top, slow eccentric movement',
    ],
  },
  {
    id: 5,
    title: 'Leg Extensions',
    description:
      'Target your quadriceps directly. Perform 3 sets of 12-15 reps with a strong pause at the top.',
    details: [
      'Warm-up: 15 reps at light weight',
      'Main sets: 3 x 12-15 reps',
      'Rest: 60 seconds between sets',
      'Form tip: Full extension at top, controlled lowering',
    ],
  },
  {
    id: 6,
    title: 'Calf Raises',
    description:
      'Don\'t forget the calves! Perform 4 sets of 15-20 reps for optimal growth and strength.',
    details: [
      'Warm-up: 20 reps bodyweight',
      'Main sets: 4 x 15-20 reps at heavy weight',
      'Rest: 45-60 seconds between sets',
      'Form tip: Full range of motion, squeeze at the top',
    ],
  },
];

export function WorkoutAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    Object.entries(contentRefs.current).forEach(([id, element]) => {
      if (!element) return;

      const numId = parseInt(id);
      const isExpanded = expandedId === numId;

      if (isExpanded) {
        gsap.to(element, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        gsap.to(element, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });
  }, [expandedId]);

  return (
    <section className="w-full bg-background py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="w-full px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance italic">
            Complete Leg Workout Plan
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance">
            Click any exercise to view detailed instructions and performance tips
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="border border-border rounded-lg overflow-hidden bg-card transition-all duration-300 hover:shadow-md hover:border-primary/30"
            >
              <button
                onClick={() => handleToggle(workout.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between bg-card hover:bg-secondary transition-colors duration-200 group active:bg-secondary sm:active:bg-card"
              >
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 italic">
                    {workout.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-1 sm:line-clamp-2">
                    {workout.description}
                  </p>
                </div>
                <div
                  className={`ml-2 sm:ml-4 flex-shrink-0 transition-transform duration-300 ${
                    expandedId === workout.id ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </button>

              <div
                ref={(el) => {
                  if (el) contentRefs.current[workout.id] = el;
                }}
                className="overflow-hidden h-0 opacity-0"
              >
                <div className="px-4 sm:px-6 py-4 sm:py-6 bg-secondary/40 border-t border-border">
                  <ul className="space-y-2 sm:space-y-3">
                    {workout.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-foreground text-xs sm:text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
