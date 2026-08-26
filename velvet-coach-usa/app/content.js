/* Velvet — 28-Day Program content.
 * Educational, evidence-informed content (mindfulness, body awareness,
 * sensate focus — a well-established sex-therapy technique originating
 * with Masters & Johnson). Intentionally non-graphic: describes what to
 * practice and why, not explicit acts. Edit freely — this is a first
 * draft, not final copy. Each day = 1 lesson + 1 guided practice.
 */
const PROGRAM = [
  {
    week: 1,
    title: "Foundations",
    intro: "Slow down, drop the pressure to 'perform,' and get reacquainted with your own body as a place of curiosity, not judgment.",
    days: [
      {
        day: 1,
        title: "Welcome & Setting Your Intentions",
        technique: "Intention-setting",
        lesson: "Before any technique, it helps to name why you're here. This isn't about chasing a bigger, faster result — it's about building a calmer, more curious relationship with your own body. Today is just about writing down what you want out of the next 28 days, in your own words, with no pressure attached.",
        keyPoints: [
          "There's no 'behind' — everyone starts at day 1.",
          "Progress here is about awareness, not performance.",
          "You can repeat any day as many times as you like."
        ],
        practice: { title: "Write your intention", duration: "5 minutes", steps: [
          "Find a quiet moment and open a notebook or notes app.",
          "Write 2–3 sentences on what you'd like to feel more of by day 28.",
          "Re-read it once, then close the notebook — no action needed yet."
        ]}
      },
      {
        day: 2,
        title: "Breath as Your Anchor",
        technique: "Diaphragmatic breathing",
        lesson: "Slow, deep breathing activates the parasympathetic nervous system — the 'rest and digest' state that arousal actually depends on. Shallow, anxious breathing does the opposite. Today's practice is simply learning to notice your breath and lengthen it, with nothing else added yet.",
        keyPoints: [
          "Arousal and relaxation aren't opposites — relaxation is often the on-ramp.",
          "A longer exhale than inhale signals safety to your nervous system.",
          "This is a skill you'll reuse in every practice going forward."
        ],
        practice: { title: "4–6 breathing", duration: "3 minutes", steps: [
          "Sit or lie down comfortably, one hand on your belly.",
          "Inhale through the nose for a count of 4, feeling your belly rise.",
          "Exhale slowly for a count of 6. Repeat for 10 rounds."
        ]}
      },
      {
        day: 3,
        title: "Body Scan — Getting Reacquainted",
        technique: "Body scan meditation",
        lesson: "A body scan is a simple mindfulness practice: moving your attention slowly through the body, noticing sensation without trying to change anything. It's the foundation for everything that follows — you can't tune in to pleasure if you're not first tuned in to sensation at all.",
        keyPoints: [
          "Neutral noticing (warm, tingling, heavy) — not judging (good/bad).",
          "It's normal for your mind to wander; just gently return.",
          "This works clothed, lying down, in a few quiet minutes."
        ],
        practice: { title: "10-minute body scan", duration: "10 minutes", steps: [
          "Lie down and close your eyes.",
          "Bring attention slowly from your feet up to your scalp, pausing at each area for a few breaths.",
          "Simply notice what's there — temperature, tension, tingling — without changing it."
        ]}
      },
      {
        day: 4,
        title: "Releasing Performance Pressure",
        technique: "Cognitive reframing",
        lesson: "A lot of what gets in the way isn't physical — it's the pressure to reach a specific outcome on a schedule. Today's lesson is about noticing the 'goal-chasing' voice in your head and gently replacing it with curiosity: what does this feel like, right now, rather than am I doing this right.",
        keyPoints: [
          "Spectatoring — watching/judging yourself during intimacy — reduces arousal.",
          "Curiosity ('what do I notice?') works better than evaluation ('is this working?').",
          "This reframe is a practice, not a one-time fix — expect to return to it."
        ],
        practice: { title: "Catch the goal-chasing voice", duration: "5 minutes", steps: [
          "Recall a recent moment you felt rushed or self-conscious.",
          "Write down the exact thought that ran through your head.",
          "Rewrite it as a curious, judgment-free observation instead."
        ]}
      },
      {
        day: 5,
        title: "Understanding Arousal (It's Not Linear)",
        technique: "Arousal education",
        lesson: "Arousal isn't a straight line from 0 to 10 — it naturally rises, dips, and rises again, especially for anyone new to paying attention to it. Expecting a smooth, constant climb is one of the most common sources of frustration. Today is just about learning what a realistic pattern looks like.",
        keyPoints: [
          "Dips are normal, not a sign that something is wrong.",
          "Distraction, discomfort, or a wandering mind can lower and then raise arousal again.",
          "Naming this pattern in advance makes it far less discouraging in the moment."
        ],
        practice: { title: "Reflect on past patterns", duration: "5 minutes", steps: [
          "Think back to a relaxed, unhurried moment of intimacy (solo or partnered).",
          "Jot down 2–3 points where your attention or arousal shifted.",
          "Notice: did it ever come back up on its own? For most people, it does."
        ]}
      },
      {
        day: 6,
        title: "Creating a Judgment-Free Space",
        technique: "Environment design",
        lesson: "Your physical and mental environment shapes how safe your body feels to relax into. Today is about deliberately setting up a space — even a small one — that signals 'this time is protected,' free of interruptions, deadlines, or an audience (including your own inner critic).",
        keyPoints: [
          "Small environmental cues (light, temperature, privacy) measurably affect relaxation.",
          "Phone on silent, door closed, no clock-watching.",
          "Consistency helps — the same cues, over time, become a signal to unwind."
        ],
        practice: { title: "Design your space", duration: "10 minutes", steps: [
          "Pick a time in the next 2 days when you won't be interrupted.",
          "Prepare the room: lighting, temperature, phone away.",
          "Just sit in that space for a few minutes and notice how it feels."
        ]}
      },
      {
        day: 7,
        title: "Week 1 Reflection & Journaling",
        technique: "Reflective journaling",
        lesson: "End of week one is a check-in, not a test. Reflection helps the nervous system consolidate what's been practiced, and gives you real data (not guesses) about what's working. There's no 'right' answer here — just an honest look back.",
        keyPoints: [
          "Consistency across small practices matters more than any single session.",
          "It's normal for some days to have felt easier than others.",
          "Carry forward whatever helped most into week 2."
        ],
        practice: { title: "Weekly reflection", duration: "10 minutes", steps: [
          "Re-read the intention you wrote on day 1.",
          "Write 3 things you noticed this week — physical, mental, or emotional.",
          "Pick one practice from this week you want to keep doing daily."
        ]}
      }
    ]
  },
  {
    week: 2,
    title: "Building Awareness",
    intro: "Now that the foundation is in place, this week is about mapping sensation directly — starting slow, non-genital, and pressure-free.",
    days: [
      {
        day: 8,
        title: "Mapping Sensation, Not Goals",
        technique: "Sensory mapping",
        lesson: "Today introduces the core mindset for this week: exploring touch purely to notice sensation, with zero goal attached (not even relaxation — just noticing). This detachment from outcome is what allows the nervous system to actually relax into the experience.",
        keyPoints: [
          "There's no finish line in this exercise — you can stop any time.",
          "Any sensation is valid data — pleasant, neutral, or even ticklish.",
          "This groundwork makes every later practice easier."
        ],
        practice: { title: "Hand mapping", duration: "5 minutes", steps: [
          "Using your fingertips, slowly trace your other hand and forearm.",
          "Notice texture, temperature, and pressure without labeling it good or bad.",
          "Switch hands and repeat."
        ]}
      },
      {
        day: 9,
        title: "Mindful Self-Touch, Part 1 (Non-Genital)",
        technique: "Sensate focus (non-genital)",
        lesson: "Sensate focus is a structured touch practice developed in sex therapy: slow, attentive, non-goal-oriented touch, starting away from erogenous zones. It rebuilds comfort with touch itself before adding intensity. Today stays entirely non-genital — arms, shoulders, scalp, feet.",
        keyPoints: [
          "The point is attention, not arousal — arousal may or may not show up, and that's fine.",
          "Start with areas that feel emotionally neutral if genital touch feels loaded right now.",
          "Slow is the whole exercise — rushing defeats the purpose."
        ],
        practice: { title: "Non-genital sensate touch", duration: "10 minutes", steps: [
          "In your private space, slowly touch your arms, shoulders, and scalp.",
          "Vary pressure and speed, staying curious about what you notice.",
          "If your mind wanders to 'is this working,' gently return to sensation."
        ]}
      },
      {
        day: 10,
        title: "Slowing Down: The Power of Pace",
        technique: "Pacing",
        lesson: "Most people move faster than their body actually needs, out of habit or urgency. Slowing down — even when it feels awkward at first — gives sensation time to build and register. Today is entirely about experimenting with pace, not adding anything new.",
        keyPoints: [
          "Slower isn't 'less' — for many people it's what allows more to be felt.",
          "Awkwardness at first is normal; it usually fades with repetition.",
          "You can always speed back up — this is about having the option to slow down, too."
        ],
        practice: { title: "Half-speed practice", duration: "8 minutes", steps: [
          "Repeat day 9's non-genital touch, but move at half your natural pace.",
          "Pause completely for 10 seconds every minute or so.",
          "Notice what changes when you're not rushing toward anything."
        ]}
      },
      {
        day: 11,
        title: "Pelvic Floor Awareness",
        technique: "Pelvic floor engagement",
        lesson: "The pelvic floor plays a direct role in sensation and orgasm intensity for many people, and most of us have never consciously felt these muscles. Today is a simple, clothed awareness exercise — no self-touch involved — just learning to locate and gently engage this muscle group.",
        keyPoints: [
          "This is the same muscle group used to stop urine flow midstream (a common way to first locate it).",
          "Gentle engagement, not maximum-effort clenching, is the goal.",
          "If anything feels painful, stop and consider checking in with a pelvic-health professional."
        ],
        practice: { title: "Pelvic floor check-in", duration: "5 minutes", steps: [
          "Sit comfortably and breathe normally.",
          "Gently contract the muscles you'd use to stop urine flow, hold 3 seconds, release.",
          "Repeat 8–10 times, keeping the rest of your body relaxed."
        ]}
      },
      {
        day: 12,
        title: "Mindful Self-Touch, Part 2",
        technique: "Sensate focus (extended)",
        lesson: "With the groundwork from day 9 in place, today extends the same slow, curious attention a little further, still keeping the no-goal mindset front and center. The point is not to 'get somewhere' — it's to keep noticing, wherever that leads or doesn't lead.",
        keyPoints: [
          "You're always in control of pace, pressure, and where the practice goes.",
          "If a thought like 'is this taking too long' shows up, treat it as background noise.",
          "There's no requirement to reach any particular outcome today."
        ],
        practice: { title: "Extended sensate touch", duration: "12 minutes", steps: [
          "Begin exactly as in day 9, non-genital, slow, curious.",
          "If it feels right, let your attention extend further, staying gentle and unhurried.",
          "End whenever you like — there's no 'complete' state to reach."
        ]}
      },
      {
        day: 13,
        title: "Noticing What Actually Feels Good",
        technique: "Preference mapping",
        lesson: "After several days of neutral, exploratory touch, today shifts slightly: start actively noting which types of touch you're drawn to. This is simple data-gathering — you're building a personal map that later lessons (and, if relevant, a partner) can use.",
        keyPoints: [
          "Preferences can and do change day to day — this is a snapshot, not a permanent rule.",
          "Write things down; memory is unreliable for this kind of detail.",
          "There's no 'should' here — only what you actually notice."
        ],
        practice: { title: "Preference journal", duration: "10 minutes", steps: [
          "During or right after today's touch practice, jot quick notes.",
          "Rate a few types of touch (light/firm, fast/slow, warm/cool) on how much you enjoyed them.",
          "Keep this list — you'll return to it in week 3."
        ]}
      },
      {
        day: 14,
        title: "Week 2 Reflection & Journaling",
        technique: "Reflective journaling",
        lesson: "Two weeks in, most people notice at least a small shift in how it feels to pay attention to their own body — sometimes it's more comfort, sometimes more information, sometimes both. This check-in captures where things stand before adding new layers next week.",
        keyPoints: [
          "It's completely normal if progress doesn't feel dramatic yet — awareness compounds slowly.",
          "Revisit your preference notes from day 13 for anything you'd like to explore further.",
          "Carry your favorite exercise from this week into week 3."
        ],
        practice: { title: "Weekly reflection", duration: "10 minutes", steps: [
          "Write 3 sensations or preferences you learned about yourself this week.",
          "Note anything that felt hard, without judging yourself for it.",
          "Set one small, specific goal for week 3."
        ]}
      }
    ]
  },
  {
    week: 3,
    title: "Deepening Practice",
    intro: "This week layers in rhythm, communication, and — if it applies to you — bringing a partner into the practice.",
    days: [
      {
        day: 15,
        title: "Sensate Focus — the Foundation Technique",
        technique: "Sensate focus (core method)",
        lesson: "Today formally introduces sensate focus as a named technique so you can use the term deliberately going forward — and, if useful, explain it to a partner. It's a structured way of taking pressure off performance by making attention itself the goal, one step at a time.",
        keyPoints: [
          "Developed in sex therapy; widely used and well studied.",
          "Works solo or with a partner, always starting non-goal-oriented.",
          "You can pause the exercise at any stage without 'failing' it."
        ],
        practice: { title: "Full sensate focus session", duration: "15 minutes", steps: [
          "Set up your private space (see day 6).",
          "Move slowly through touch, starting non-genital, staying curious throughout.",
          "Whenever a goal-oriented thought shows up, name it silently and return to sensation."
        ]}
      },
      {
        day: 16,
        title: "Combining Breath, Touch & Attention",
        technique: "Integrated practice",
        lesson: "Today layers the breathing skill from day 2 into your touch practice. Slow, steady breath during touch keeps the nervous system in a relaxed state, which for many people allows sensation to build more fully instead of spiking and dropping.",
        keyPoints: [
          "If you notice your breath going shallow, that's useful information — a cue to slow down.",
          "Breath and touch reinforce each other; neither has to be perfect.",
          "This combination is worth practicing on its own, outside of any other context."
        ],
        practice: { title: "Breath-guided touch", duration: "12 minutes", steps: [
          "Begin with 1 minute of the 4–6 breathing from day 2.",
          "Continue that breathing pattern as you move into your touch practice.",
          "If arousal builds, keep the breath slow rather than letting it race ahead."
        ]}
      },
      {
        day: 17,
        title: "Exploring Rhythm & Pressure",
        technique: "Rhythm and pressure variation",
        lesson: "Using the preference notes from day 13, today is about deliberately experimenting with rhythm (steady vs. varied) and pressure (light vs. firm), rather than defaulting to habit. Small variations often reveal preferences that repetition alone never surfaces.",
        keyPoints: [
          "Try one variable at a time so you can tell what actually changed the sensation.",
          "There's no 'correct' rhythm — only what you notice works for you today.",
          "Update your preference notes with anything new you learn."
        ],
        practice: { title: "Rhythm experiment", duration: "10 minutes", steps: [
          "Spend 3 minutes with a slow, steady rhythm.",
          "Spend 3 minutes varying speed and pressure unpredictably.",
          "Note which felt more engaging today — it may differ from last time, and that's fine."
        ]}
      },
      {
        day: 18,
        title: "Safe, Mindful Use of Aids (Optional)",
        technique: "Mindful use of aids",
        lesson: "Some people find that a well-chosen aid adds a new dimension to this practice; others don't use one at all, and that's equally valid. If you choose to include one, the same principles apply: slow, curious, no pressure to reach a particular outcome. This lesson is entirely optional — skip it if it doesn't apply to you.",
        keyPoints: [
          "Body-safe materials and thorough cleaning matter — check manufacturer guidance.",
          "Start on the lowest intensity setting, if applicable, and adjust slowly.",
          "An aid is an addition to the practice, not a requirement for it to 'count.'"
        ],
        practice: { title: "Optional: mindful trial", duration: "10 minutes", steps: [
          "If you're using an aid, start at the lowest setting in a relaxed, unhurried moment.",
          "Apply the same slow, curious attention as previous sensate-focus days.",
          "If this doesn't apply to you, simply repeat day 17's rhythm experiment instead."
        ]}
      },
      {
        day: 19,
        title: "Communicating Desires — Starter Scripts",
        technique: "Assertive communication",
        lesson: "Putting what you've learned into words — for yourself or a partner — is its own skill. Today introduces simple, low-pressure sentence starters for naming what you enjoy, without it turning into a big, loaded conversation.",
        keyPoints: [
          "Starting small ('I really liked when...') is easier than a big, formal talk.",
          "Timing matters — a calm, unhurried moment works better than mid-activity.",
          "This is a skill that improves with repetition, not a one-time script."
        ],
        practice: { title: "Write 3 starter sentences", duration: "8 minutes", steps: [
          "Using your preference notes, write 3 sentences starting with 'I really liked...'",
          "Say them out loud to yourself once, adjusting the wording until it feels natural.",
          "If relevant, plan a calm moment this week to share one with a partner."
        ]}
      },
      {
        day: 20,
        title: "Consent & Check-Ins With a Partner",
        technique: "Ongoing consent practice",
        lesson: "If a partner is part of your practice, ongoing, explicit check-ins — before and during — build the safety this whole program depends on. Today covers simple, natural-sounding ways to check in without breaking the mood, and why doing so actually supports arousal rather than interrupting it.",
        keyPoints: [
          "Consent is ongoing, not a single yes/no at the start.",
          "Simple check-ins ('does this feel good?') can become a natural part of the rhythm.",
          "A 'no' or 'let's pause' at any point is always a complete answer, with no explanation owed."
        ],
        practice: { title: "Check-in phrases", duration: "5 minutes", steps: [
          "Write 2–3 short check-in phrases you'd feel comfortable saying.",
          "Practice saying them out loud so they feel natural, not scripted.",
          "If you have a partner, consider agreeing on a simple 'pause' word together."
        ]}
      },
      {
        day: 21,
        title: "Week 3 Reflection & Journaling",
        technique: "Reflective journaling",
        lesson: "This week added rhythm, breath, and communication on top of the foundation from weeks 1–2. Take stock of what's landed well and what still feels new or uncertain — both are useful information heading into the final week.",
        keyPoints: [
          "Communication skills often feel the most awkward at first — that's expected, not a red flag.",
          "Revisit anything from this week that felt especially useful.",
          "Week 4 focuses on consistency and troubleshooting, not new techniques."
        ],
        practice: { title: "Weekly reflection", duration: "10 minutes", steps: [
          "Write 3 things that went well this week.",
          "Write 1 thing you want more practice with.",
          "Re-read your day-1 intention — has anything shifted?"
        ]}
      }
    ]
  },
  {
    week: 4,
    title: "Integration",
    intro: "The final week is about consistency, troubleshooting common blocks, and building a simple plan for after day 28.",
    days: [
      {
        day: 22,
        title: "Bringing a Partner Into the Practice",
        technique: "Partnered sensate focus",
        lesson: "If it applies to you, today walks through inviting a partner into a simplified version of sensate focus — still slow, still non-goal-oriented, now with two people. If this program is solo-only for you, feel free to treat this as background knowledge for later.",
        keyPoints: [
          "Explain the 'no goal, just attention' framing before starting together.",
          "Agree on a pause word or gesture in advance (see day 20).",
          "Alternate giving and receiving touch, staying with the same slow pace."
        ],
        practice: { title: "Partnered session (optional)", duration: "15 minutes", steps: [
          "Briefly explain the sensate-focus mindset to your partner.",
          "Take turns giving slow, curious, non-genital touch for a few minutes each.",
          "Debrief afterward using the check-in phrases from day 20."
        ]}
      },
      {
        day: 23,
        title: "Troubleshooting: Stress & Distraction",
        technique: "Stress regulation",
        lesson: "A racing mind or a stressful day can make any of this feel out of reach — that's biology, not a personal failing. Today covers quick ways to downshift the nervous system before a practice session, so stress doesn't have to derail the whole day.",
        keyPoints: [
          "A few minutes of breathwork (day 2) can meaningfully shift your state before starting.",
          "It's completely fine to skip a practice on a genuinely overwhelming day.",
          "Consistency over weeks matters far more than any single session."
        ],
        practice: { title: "2-minute reset", duration: "2 minutes", steps: [
          "Before your practice, do 8 rounds of 4–6 breathing.",
          "Unclench your jaw and drop your shoulders.",
          "Only begin the practice once you feel even slightly more settled."
        ]}
      },
      {
        day: 24,
        title: "Troubleshooting: Body Image Blocks",
        technique: "Self-compassion practice",
        lesson: "Self-criticism about appearance is one of the most common blocks to feeling present in your body. Today isn't about 'fixing' body image in one sitting — it's a small practice for noticing the critical voice and responding to it with the same neutral curiosity you've been building all program.",
        keyPoints: [
          "The goal is a kinder inner voice, not forced positivity.",
          "Critical thoughts are common — noticing them without acting on them is the skill.",
          "This is worth revisiting well beyond day 28."
        ],
        practice: { title: "Self-compassion note", duration: "5 minutes", steps: [
          "Write down one critical thought you've had about your body recently.",
          "Write a neutral, factual reframe of it (what you'd say to a close friend).",
          "Read the reframe once, out loud if you're comfortable."
        ]}
      },
      {
        day: 25,
        title: "Building Consistency Without Pressure",
        technique: "Habit design",
        lesson: "The biggest driver of long-term change isn't intensity, it's consistency — a few minutes, regularly, beats an occasional long session. Today is about designing a realistic, sustainable rhythm for after this 28-day program ends.",
        keyPoints: [
          "Pick a frequency you could keep up for months, not just this week.",
          "Attach the practice to an existing habit (after a shower, before bed) to make it stick.",
          "Missing a day isn't a reset button — just continue from wherever you are."
        ],
        practice: { title: "Design your rhythm", duration: "8 minutes", steps: [
          "Choose a realistic frequency (e.g., 3x per week) for after day 28.",
          "Pick an existing daily habit to attach it to.",
          "Write it down somewhere you'll actually see it."
        ]}
      },
      {
        day: 26,
        title: "Advanced Sensate Focus",
        technique: "Sensate focus (advanced)",
        lesson: "With the full toolkit in place — breath, pace, rhythm, communication — today's practice combines all of it into one longer, unhurried session, entirely guided by your own preferences rather than a script.",
        keyPoints: [
          "There's no new technique today — just integrating everything so far.",
          "Let your preference notes (day 13, day 17) guide the session.",
          "This is a good template for future sessions after the program ends."
        ],
        practice: { title: "Integrated session", duration: "15–20 minutes", steps: [
          "Set up your space (day 6) and begin with breathing (day 2).",
          "Move through touch slowly, adjusting rhythm and pressure to your preferences.",
          "Let the session end naturally, whenever feels right."
        ]}
      },
      {
        day: 27,
        title: "Celebrating Your Progress",
        technique: "Progress review",
        lesson: "Before the final wrap-up, today is dedicated to actually reviewing how far things have come — not compared to anyone else, just compared to day 1. This kind of explicit acknowledgment helps the changes stick.",
        keyPoints: [
          "Compare only to your own day-1 starting point.",
          "Small, consistent shifts count as real progress.",
          "Whatever you've learned about yourself is genuinely useful information going forward."
        ],
        practice: { title: "Progress review", duration: "10 minutes", steps: [
          "Re-read your day-1 intention and your weekly reflections.",
          "Write down 3 concrete things that feel different now.",
          "Acknowledge one thing you're proud of showing up for."
        ]}
      },
      {
        day: 28,
        title: "Your Maintenance Plan After Day 28",
        technique: "Long-term planning",
        lesson: "The program structure ends today, but the practice doesn't have to. This final lesson turns everything you've built into a simple, written plan you can return to any time — including simply restarting the program from day 1 whenever you want a refresher.",
        keyPoints: [
          "Your maintenance rhythm from day 25 is your default plan going forward.",
          "You can revisit any single day's lesson any time you want a refresher.",
          "Restarting from day 1 is always an option, not a step backward."
        ],
        practice: { title: "Write your maintenance plan", duration: "10 minutes", steps: [
          "Summarize your chosen rhythm (frequency + habit anchor) from day 25.",
          "List your top 3 favorite practices from the whole program to return to.",
          "Congratulate yourself — you completed all 28 days."
        ]}
      }
    ]
  }
];

// Flat lookup helpers
const ALL_DAYS = PROGRAM.flatMap(w => w.days.map(d => ({ ...d, week: w.week, weekTitle: w.title })));
const TOTAL_DAYS = ALL_DAYS.length; // 28
