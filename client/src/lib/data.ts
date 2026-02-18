import { type Reflection, type HolyWeekDay } from "@shared/schema";

export const LENT_START_DATE = new Date("2026-02-18T00:00:00"); // Ash Wednesday 2026

export const reflectionsData: Reflection[] = [
  {
    id: 1,
    day: 1,
    scripture: "Return to me with all your heart, with fasting, with weeping, and with mourning; and rend your hearts and not your garments.",
    verseReference: "Joel 2:12-13",
    reflection: "Lent begins not with a list of rules, but with an invitation to return. Where has your heart drifted in the past year? What burdens are you carrying that need to be laid down?",
    challenge: "Identify one distraction you will give up for these 40 days to make room for silence."
  },
  {
    id: 2,
    day: 2,
    scripture: "If anyone would come after me, let him deny himself and take up his cross daily and follow me.",
    verseReference: "Luke 9:23",
    reflection: "The cross is not just a historical event, but a daily practice. Denying ourselves isn't about self-hatred, but about realigning our loves. What does 'taking up your cross' look like today?",
    challenge: "Do one act of service today that no one else will know about."
  },
  {
    id: 3,
    day: 3,
    scripture: "Be still, and know that I am God.",
    verseReference: "Psalm 46:10",
    reflection: "Our world creates constant noise to keep us from confronting our own emptiness. Silence is where we meet Reality. Are you afraid of silence?",
    challenge: "Set a timer for 5 minutes. Sit in absolute silence without your phone."
  },
  {
    id: 4,
    day: 4,
    scripture: "Man shall not live by bread alone, but by every word that comes from the mouth of God.",
    verseReference: "Matthew 4:4",
    reflection: "We feed our bodies daily, often obsessively. But our spirits are often starving. What are you feeding your mind and soul?",
    challenge: "Read one chapter of the Gospels instead of scrolling social media this morning."
  },
  {
    id: 5,
    day: 5,
    scripture: "Create in me a clean heart, O God, and renew a right spirit within me.",
    verseReference: "Psalm 51:10",
    reflection: "Restoration is God's work, not ours. We cannot clean our own hearts any more than a surgeon can operate on themselves. We simply present the wound.",
    challenge: "Write down three things you are holding a grudge about, and pray for the willingness to forgive."
  },
  // ... In a real app we would fill all 40 days. 
  // Filling a few more for demonstration purposes.
  {
    id: 6,
    day: 6,
    scripture: "But when you pray, go into your room and shut the door and pray to your Father who is in secret.",
    verseReference: "Matthew 6:6",
    reflection: "Performative spirituality is a temptation for us all. We want to be seen as good. But true intimacy grows in the secret place.",
    challenge: "Find a physical 'secret place' in your home or nature to pray today."
  },
   {
    id: 7,
    day: 7,
    scripture: "The Lord is my shepherd; I shall not want.",
    verseReference: "Psalm 23:1",
    reflection: "Contentment is the antidote to a consumer culture. If the Lord is truly our Shepherd, do we really lack anything essential?",
    challenge: "Fast from buying anything non-essential today."
  },
  {
    id: 8,
    day: 8,
    scripture: "Come to me, all who labor and are heavy laden, and I will give you rest.",
    verseReference: "Matthew 11:28",
    reflection: "Lent is not about earning God's love through hard work. It is about resting in the work He has already done.",
    challenge: "Go to bed 30 minutes earlier tonight to honor the body God gave you."
  },
  {
    id: 9,
    day: 9,
    scripture: "For where your treasure is, there your heart will be also.",
    verseReference: "Matthew 6:21",
    reflection: "Our hearts follow our investments. What we spend our time, money, and energy on reveals what we truly worship.",
    challenge: "Take a moment to breathe deeply and recite the Jesus Prayer."
  },
  {
    id: 10,
    day: 10,
    scripture: "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit.",
    verseReference: "John 15:5",
    reflection: "We cannot produce fruit by trying harder. We can only bear fruit by remaining connected to the source of life. Are you trying to grow fruit or just look like you have fruit?",
    challenge: "Spend 10 minutes in nature today, observing how branches depend on their tree."
  },
  {
    id: 11,
    day: 11,
    scripture: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    verseReference: "Matthew 5:3",
    reflection: "Poverty of spirit is not self-deprecation. It is the honest recognition that we have nothing to offer God except our need. Can you admit your spiritual bankruptcy?",
    challenge: "Write down one area where you have been pretending to be self-sufficient."
  },
  {
    id: 12,
    day: 12,
    scripture: "Do not be conformed to this world, but be transformed by the renewal of your mind.",
    verseReference: "Romans 12:2",
    reflection: "Transformation happens from the inside out, not through external behavior modification. What patterns of thinking need renewal in you?",
    challenge: "Identify one thought pattern you will consciously replace with truth today."
  },
  {
    id: 13,
    day: 13,
    scripture: "Let each of you look not only to his own interests, but also to the interests of others.",
    verseReference: "Philippians 2:4",
    reflection: "Self-interest is natural. Looking to others' interests is supernatural. Whose needs have you been ignoring while focusing on your own?",
    challenge: "Ask someone close to you what they need today, and do it without expecting anything in return."
  },
  {
    id: 14,
    day: 14,
    scripture: "The Lord is near to the brokenhearted and saves the crushed in spirit.",
    verseReference: "Psalm 34:18",
    reflection: "We hide our brokenness, thinking it disqualifies us. But God draws near to what we try to hide. What brokenness are you concealing?",
    challenge: "Share one struggle with a trusted friend or write it in a prayer to God."
  },
  {
    id: 15,
    day: 15,
    scripture: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    verseReference: "Jeremiah 29:11",
    reflection: "God's plans often look different from ours. We want comfort; He offers transformation. We want answers; He offers presence. Can you trust His plan when it doesn't match yours?",
    challenge: "List three areas where you are trying to control outcomes, and release them in prayer."
  },
  {
    id: 16,
    day: 16,
    scripture: "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    verseReference: "Ephesians 4:32",
    reflection: "Forgiveness is not excusing wrong, but releasing the debt. We forgive because we have been forgiven a debt we could never pay. Who do you need to release today?",
    challenge: "Write a letter of forgiveness to someone (you don't have to send it)."
  },
  {
    id: 17,
    day: 17,
    scripture: "Cast all your anxiety on him because he cares for you.",
    verseReference: "1 Peter 5:7",
    reflection: "Anxiety is often a form of control. We worry because we think we can solve it. But some things are too heavy for us to carry. What anxiety are you clutching?",
    challenge: "Write down your three biggest worries and physically place them in a box or envelope as a symbol of release."
  },
  {
    id: 18,
    day: 18,
    scripture: "Love your enemies and pray for those who persecute you.",
    verseReference: "Matthew 5:44",
    reflection: "This command seems impossible because it is. We can only love our enemies when we remember that we were once enemies of God, yet He loved us. Who feels like an enemy to you?",
    challenge: "Pray for someone who has hurt you, asking God to bless them."
  },
  {
    id: 19,
    day: 19,
    scripture: "The eye is the lamp of the body. If your eyes are healthy, your whole body will be full of light.",
    verseReference: "Matthew 6:22",
    reflection: "What we look at shapes what we become. Our gaze determines our direction. Where are your eyes fixed—on what is temporary or eternal?",
    challenge: "Fast from screens for one hour today and notice what you see instead."
  },
  {
    id: 20,
    day: 20,
    scripture: "Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal.",
    verseReference: "Matthew 6:19",
    reflection: "We accumulate to feel secure, but everything we hoard can be lost. Security is found in what cannot be taken. What are you storing up that will not last?",
    challenge: "Give away one possession today to someone who needs it more than you."
  },
  {
    id: 21,
    day: 21,
    scripture: "Whoever finds his life will lose it, and whoever loses his life for my sake will find it.",
    verseReference: "Matthew 10:39",
    reflection: "Paradox is at the heart of the gospel. We find by losing. We gain by giving. We live by dying. What life are you trying to save that needs to be lost?",
    challenge: "Do one thing today that costs you something with no expectation of return."
  },
  {
    id: 22,
    day: 22,
    scripture: "Truly, I say to you, unless you turn and become like children, you will never enter the kingdom of heaven.",
    verseReference: "Matthew 18:3",
    reflection: "Children trust without calculation. They receive without earning. They wonder without cynicism. When did you lose your childlike faith?",
    challenge: "Spend time with a child today, or recall a moment from childhood when you felt wonder."
  },
  {
    id: 23,
    day: 23,
    scripture: "For what does it profit a man to gain the whole world and forfeit his soul?",
    verseReference: "Mark 8:36",
    reflection: "We trade our souls for success, approval, comfort. We gain everything and lose the only thing that matters. What are you trading your soul for?",
    challenge: "Evaluate one area where you are sacrificing your values for external gain."
  },
  {
    id: 24,
    day: 24,
    scripture: "My grace is sufficient for you, for my power is made perfect in weakness.",
    verseReference: "2 Corinthians 12:9",
    reflection: "We hide our weaknesses, but they are where God's strength is revealed. Our insufficiency is the canvas for His sufficiency. What weakness are you trying to hide?",
    challenge: "Share one weakness with God in prayer and ask for His strength in that area."
  },
  {
    id: 25,
    day: 25,
    scripture: "Greater love has no one than this, that someone lay down his life for his friends.",
    verseReference: "John 15:13",
    reflection: "Love is measured not by feeling, but by sacrifice. Jesus showed us what love looks like. How are you laying down your life for others?",
    challenge: "Do one thing today that inconveniences you for someone else's good."
  },
  {
    id: 26,
    day: 26,
    scripture: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
    verseReference: "1 John 1:9",
    reflection: "Confession is not about earning forgiveness—it's about receiving it. God is faithful even when we are not. What sin are you hiding instead of confessing?",
    challenge: "Confess one sin to God today, and receive His forgiveness without trying to earn it."
  },
  {
    id: 27,
    day: 27,
    scripture: "Do not be afraid, little flock, for your Father has been pleased to give you the kingdom.",
    verseReference: "Luke 12:32",
    reflection: "Fear and faith cannot coexist. We fear because we forget who our Father is. The kingdom is already ours—we just need to receive it. What are you afraid of losing?",
    challenge: "Identify one fear and replace it with a truth about God's character."
  },
  {
    id: 28,
    day: 28,
    scripture: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.",
    verseReference: "Galatians 2:20",
    reflection: "The old self must die for the new self to live. This is not self-improvement—it is death and resurrection. What part of your old self needs to die?",
    challenge: "Write down one identity or label you need to release to make room for who God says you are."
  },
  {
    id: 29,
    day: 29,
    scripture: "And he said to all, 'If anyone would come after me, let him deny himself and take up his cross daily and follow me.'",
    verseReference: "Luke 9:23",
    reflection: "The cross is not a one-time decision, but a daily practice. Each day we choose to die to self and live for Christ. What does your cross look like today?",
    challenge: "Identify one area where you need to deny yourself today to follow Christ."
  },
  {
    id: 30,
    day: 30,
    scripture: "Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak.",
    verseReference: "Mark 14:38",
    reflection: "As we draw closer to Holy Week, we see Jesus in the garden, asking His friends to watch with Him. They slept. Will we watch and pray, or will we sleep through this sacred time?",
    challenge: "Set aside 15 minutes today to watch and pray, staying alert to God's presence."
  },
  {
    id: 31,
    day: 31,
    scripture: "For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.",
    verseReference: "Mark 10:45",
    reflection: "Jesus came to serve, not to be served. His entire life was a downward movement toward the lowest place. How are you following His example of service?",
    challenge: "Serve someone today in a way that requires humility and goes unnoticed."
  },
  {
    id: 32,
    day: 32,
    scripture: "Unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit.",
    verseReference: "John 12:24",
    reflection: "Death precedes life. The seed must die to become what it was meant to be. We resist death, but it is the path to resurrection. What needs to die in you to bear fruit?",
    challenge: "Plant a seed today as a physical reminder that death leads to life."
  },
  {
    id: 33,
    day: 33,
    scripture: "And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    verseReference: "Philippians 2:8",
    reflection: "The God of the universe became human and died. This is the scandal of the gospel. Can you grasp the depth of this love?",
    challenge: "Meditate on the humility of Christ today. Write down what it means to you."
  },
  {
    id: 34,
    day: 34,
    scripture: "Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.",
    verseReference: "Luke 22:42",
    reflection: "Even Jesus asked for another way, but He surrendered to the Father's will. We can be honest about our desires while still choosing obedience. What cup are you being asked to drink?",
    challenge: "Pray honestly about something difficult you face, then add 'not my will, but yours.'"
  },
  {
    id: 35,
    day: 35,
    scripture: "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.",
    verseReference: "John 13:34",
    reflection: "This is the night before His death, and Jesus gives one final command: love. Not as the world loves, but as He loves—sacrificially, unconditionally. How are you loving others?",
    challenge: "Show love to someone today in a way that costs you something."
  },
  {
    id: 36,
    day: 36,
    scripture: "My God, my God, why have you forsaken me?",
    verseReference: "Matthew 27:46",
    reflection: "On the cross, Jesus experienced the abandonment we deserve. He entered our darkness so we could enter His light. Have you felt forsaken? He understands.",
    challenge: "Spend time in silence today, contemplating the weight of the cross."
  },
  {
    id: 37,
    day: 37,
    scripture: "It is finished.",
    verseReference: "John 19:30",
    reflection: "Three words that changed everything. The work is done. The debt is paid. The victory is won. We don't need to finish what He already finished. Are you trying to earn what is already yours?",
    challenge: "Rest today in the finished work of Christ. Do nothing to earn God's love."
  },
  {
    id: 38,
    day: 38,
    scripture: "And Joseph took the body and wrapped it in a clean linen shroud and laid it in his own new tomb.",
    verseReference: "Matthew 27:59-60",
    reflection: "The body is laid in the tomb. All seems lost. But in the darkness, God is working. In the silence, resurrection is being prepared. Can you wait in the darkness?",
    challenge: "Spend time in quiet today, trusting that God works even when you cannot see it."
  },
  {
    id: 39,
    day: 39,
    scripture: "Why do you seek the living among the dead? He is not here, but has risen.",
    verseReference: "Luke 24:5-6",
    reflection: "We look for life in dead places—in achievements, relationships, possessions. But the living Christ is not found there. He is risen. Where are you seeking life?",
    challenge: "Identify one 'dead place' where you've been seeking life, and turn toward the risen Christ."
  },
  {
    id: 40,
    day: 40,
    scripture: "He is not here, for he has risen, as he said. Come, see the place where he lay.",
    verseReference: "Matthew 28:6",
    reflection: "The tomb is empty. Death could not hold Him. The fast is over, but the journey continues. How will you live now that you know death is not the end?",
    challenge: "Celebrate the resurrection today. Share the good news with someone, or write down how your life has changed this Lent."
  }
];

export const holyWeekData: HolyWeekDay[] = [
  {
    day: "Palm Sunday",
    title: "The Triumphal Entry",
    explanation: "Jesus enters Jerusalem as a humble King, riding on a donkey, welcomed by palm branches.",
    scripture: "John 12:12-15",
    reflectionPrompt: "We often welcome Jesus when he meets our expectations of victory. Do we still welcome Him when the path leads to suffering?"
  },
  {
    day: "Holy Thursday",
    title: "The Last Supper",
    explanation: "Jesus washes the disciples' feet and institutes the Eucharist, giving us the commandment to love one another.",
    scripture: "John 13:1-17",
    reflectionPrompt: "Who is the 'Judas' in your life—the person hardest to love? Jesus washed his feet too. How can you serve someone difficult today?"
  },
  {
    day: "Good Friday",
    title: "The Crucifixion",
    explanation: "The day of silence, darkness, and the ultimate sacrifice. The King is enthroned on the Cross.",
    scripture: "John 19:16-30",
    reflectionPrompt: "Stand before the Cross in silence. Don't rush to Easter. Let the weight of this sacrifice settle in your heart."
  },
  {
    day: "Holy Saturday",
    title: "The Great Sabbath",
    explanation: "Christ lies in the tomb. He descends to the dead to break the chains of those who waited for Him.",
    scripture: "Matthew 27:57-61",
    reflectionPrompt: "In the silence of the tomb, God is working in ways we cannot see. Where in your life does it feel like 'nothing is happening'?"
  },
  {
    day: "Easter Sunday",
    title: "The Resurrection",
    explanation: "The tomb is empty. Death is defeated. Life has swallowed up mortality.",
    scripture: "Mark 16:1-8",
    reflectionPrompt: "He is Risen! The fast is over. How will you live differently knowing that death has no final say?"
  }
];
