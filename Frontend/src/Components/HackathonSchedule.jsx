import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const schedule = [
  { event: "EVENT SCHEDULE 🤞", color: "bg-cyan-500" },
  { day: "Day 1", time: "8:00 AM – 9:00 AM", event: "1. Offline Registration" },
  { day: "Day 1", time: "9:00 AM – 10:00 AM", event: "2. High Tea & Networking" },
  { day: "Day 1", time: "10:00 AM – 11:00 AM", event: "3. Inaugural Ceremony & Opening Session" },
  { day: "Day 1", time: "11:00 AM – 1:00 PM", event: "4. Hackathon Kickoff – Coding Begins" },
  { day: "Day 1", time: "1:00 PM – 2:00 PM", event: "5. Lunch Break" },
  { day: "Day 1", time: "2:00 PM – 5:00 PM", event: "6. Mentoring & Evaluation Round 1" },
  { day: "Day 1", time: "5:00 PM – 6:00 PM", event: "7.Gaming Sessions & Snacks" },
  { day: "Day 1", time: "8:00 PM – 10:00 PM", event: "8. DJ Night – Chill & Recharge" },
  { day: "Day 1", time: "9:00 PM – 11:00 PM", event: "9. Dinner" },
  { day: "Day 1", time: "12:00 AM – 2:00 AM", event: "10. Late-Night Mentoring Sessions / Gaming" },
  { day: "Day 2", time: "7:00 AM – 8:00 AM", event: "11. Breakfast" },
  { day: "Day 2", time: "9:00 AM – 12:00 PM", event: "12. Mentoring & Elimination Round" },
  { day: "Day 2", time: "1:00 PM", event: "13. Top 10 Teams Announcement" },
  { day: "Day 2", time: "2:00 PM – 3:00 PM", event: "14. Lunch Break (Top 10 Teams)" },
  { day: "Day 2", time: "5:00 PM – 6:30 PM", event: "15. Final Round Presentations" },
  { day: "Day 2", time: "7:00 PM", event: "16. Result Announcement & Closing Ceremony" },
];

export default function HackathonSchedule() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollDistance = scrollWidth - containerWidth;

      gsap.to(scrollRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 2,
          pin: true,
          //   markers: true,
        },
      });
      
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen bg-black overflow-hidden flex items-center relative">
      {/* Timeline horizontal wrapper */}
      <div
        ref={scrollRef}
        className="flex items-center gap-[25vw] px-[10vw] relative whitespace-nowrap"
      >
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`min-w-[300px] p-4 rounded-xl shadow-xl text-center flex flex-col gap-2 ${index === 0 ? '' : 'bg-gradient-to-bl from-red-400 via-red-600 to-red-700'
              }`}
            style={index === 0 ? { backgroundColor: '#00D3F3' } : {}}
          >
            <p className="text-bold font-medium">{item.event}</p>
            <p className="text-sm">{item.time}</p>
            <h3 className="text-md font-bold border-t-1">{item.day}</h3>
          </div>
        ))}

        {/* Timeline line: absolute center horizontal line */}
        <div className="absolute left-0 top-1/2 w-full h-[2px] bg-white -z-10" />
      </div>
    </div>
  );
}
