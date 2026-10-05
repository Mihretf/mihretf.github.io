export const projects = [
  {
    slug: 'house-price-forecasting',
    title: 'House Price Forecasting',
    summary:
      'A practical forecasting project exploring how neighborhood, size, and market signals shape property valuations.',
    tagline: 'Data + ML + decision support',
    year: '2025',
    problem:
      'Home value estimates often feel opaque and overly broad. I wanted to build a model that could explain what drives price shifts in a way that is both transparent and useful.',
    motivation:
      'The project began from a simple question: can we turn a messy real-estate dataset into a model that helps people understand valuation drivers, not just produce a score?',
    approach:
      'I cleaned and combined housing features, modeled relationships using interpretable methods, and evaluated performance against realistic market patterns while keeping the workflow understandable.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    challenges: [
      'Dealing with noisy and incomplete housing records',
      'Balancing predictive strength with explainability',
      'Communicating uncertainty without overclaiming certainty',
    ],
    results: [
      'A transparent valuation workflow grounded in feature importance and model diagnostics.',
      'A clearer view of which variables matter most in practice.',
      'A useful prototype for further experimentation and product thinking.',
    ],
    learnings:
      'The strongest models were not always the most impressive ones. The most valuable work came from understanding the data deeply and making assumptions visible.',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    slug: 'civic-signal',
    title: 'Civic Signal',
    summary:
      'A civic data interface that helps people detect patterns in public information and turn them into clearer narratives.',
    tagline: 'Public data + sensemaking',
    year: '2024',
    problem:
      'Public datasets are full of information but often difficult to interpret at the speed a community decision requires.',
    motivation:
      'I wanted to design a tool that could support local understanding without creating another complicated dashboard.',
    approach:
      'I focused on narrative structure, simple visual cues, and decision support patterns that let users explore trends without getting lost in technical detail.',
    technologies: ['React', 'Python', 'NLP', 'Data Viz'],
    challenges: [
      'Turning raw data into a calm, readable interface',
      'Keeping the workflow useful across different audiences',
      'Reducing friction in interpretation',
    ],
    results: [
      'A clearer, more accessible presentation of public-data insights.',
      'A stronger emphasis on interpretability and communication.',
      'A prototype structure that could scale into a wider civic toolset.',
    ],
    learnings:
      'Good product design is often more about removing friction than adding features.',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    slug: 'adaptive-learning-studio',
    title: 'Adaptive Learning Studio',
    summary:
      'An experiment in personalized education flows that adapt explanations, pacing, and reflection based on learner behavior.',
    tagline: 'Learning systems + UX',
    year: '2024',
    problem:
      'Many learning tools deliver static content that does not adapt to confusion, confidence, or learning pace.',
    motivation:
      'I wanted to explore how personalized feedback could make learning more effective without feeling intrusive or unnatural.',
    approach:
      'I designed a lightweight adaptive learning loop with a focus on pacing, explanations, and reflection rather than complexity for its own sake.',
    technologies: ['ML', 'UX Research', 'Design Systems'],
    challenges: [
      'Designing thoughtful feedback instead of noise',
      'Avoiding over-personalization that feels manipulative',
      'Balancing usability with educational depth',
    ],
    results: [
      'A more thoughtful concept for adaptive learning interfaces.',
      'Clearer signals around learner confidence and pacing.',
      'A stronger understanding of where structure aids learning.',
    ],
    learnings:
      'The most useful adaptation is often the simplest: clearer explanations, slower pacing, and better feedback loops.',
    links: {
      github: '#',
      demo: '#',
    },
  },
]

export const researchItems = [
  {
    slug: 'human-centered-ml-interpretability',
    title: 'Human-centered ML interpretability',
    summary:
      'A research-oriented inquiry into why many explanations are technically correct but not practically useful.',
    meta: 'Research note • 2026',
    question:
      'How do we make model explanations genuinely helpful to people who have to make decisions with them?',
    experiment:
      'I compared explanation styles across decision contexts and examined how different forms of transparency affect trust, comprehension, and action.',
    observations: [
      'Simple explanations often outperform dense ones when users are making quick decisions.',
      'Users respond best to contextual explanations that connect model output to real-world constraints.',
      'Trust increases when uncertainty is communicated honestly.',
    ],
    conclusions:
      'Interpretability should be designed around decision quality, not just model explainability for its own sake.',
  },
  {
    slug: 'language-models-and-learning',
    title: 'Language models and learning systems',
    summary:
      'An exploration of how AI tools can strengthen human understanding rather than replace it.',
    meta: 'Experiment • 2025',
    question:
      'When do AI-guided systems support deeper learning, and when do they simply accelerate surface-level performance?',
    experiment:
      'I explored feedback loops and scaffolding patterns in AI-assisted learning workflows, comparing clarity and retention over repeated tasks.',
    observations: [
      'Instructional structure matters as much as model quality.',
      'Better explanations lead to better transfer when learners are asked to reflect, not just answer.',
      'The presence of a conversational model can raise confidence without raising understanding.',
    ],
    conclusions:
      'AI works best in learning contexts when it supports reasoning, not just completion.',
  },
]

export const writingItems = [
  {
    slug: 'what-good-technical-judgment-looks-like',
    title: 'What good technical judgment looks like',
    date: 'Apr 14, 2026',
    readTime: '6 min read',
    excerpt: 'On depth, constraint, and the difference between cleverness and care.',
    body: [
      'Technical work is often described as a matter of speed, volume, or cleverness. In practice, the most useful work usually comes from judgment.',
      'Good judgment means knowing when to simplify, when to investigate, and when to say no. It means understanding tradeoffs deeply enough to make the right decision for the people affected by the system.',
      'The goal is not to produce the smartest-looking answer. It is to produce the most thoughtful one.',
    ],
  },
  {
    slug: 'designing-ai-tools-that-respect-human-attention',
    title: 'Designing AI tools that respect human attention',
    date: 'Feb 09, 2026',
    readTime: '4 min read',
    excerpt: 'A note on building systems that are useful without becoming noisy or performative.',
    body: [
      'A tool can be capable and still feel exhausting. The difference is often not in what it can do, but in how it chooses to present itself.',
      'When systems are designed without respect for attention, they become a stream of interruptions: a new suggestion every few seconds, a demand for action every time a model responds.',
      'Thoughtful tools create clarity. They help people decide where to focus, not just how quickly they can act.',
    ],
  },
  {
    slug: 'why-curiosity-is-a-better-engineering-requirement-than-speed',
    title: 'Why curiosity is a better engineering requirement than speed',
    date: 'Nov 28, 2025',
    readTime: '5 min read',
    excerpt: 'A small argument for learning slowly, intentionally, and in public.',
    body: [
      'Speed is useful. It helps teams move. But speed without curiosity often produces fragile systems and unexamined assumptions.',
      'Curiosity creates the conditions for deeper understanding. It asks why something works, what it does not solve, and what happens at the edge cases.',
      'The best work comes from people who are willing to slow down enough to understand the problem before attempting to optimize it.',
    ],
  },
]

export const personalDetails = {
  work: [
    'Product-minded researcher and builder',
    'Exploring ML systems, digital product design, and human-centered tools',
    'Interested in the intersection of thoughtful research and practical implementation',
  ],
  education: [
    'Computer science and applied learning foundations',
    'Research-led exploration in AI, systems, and human-centered design',
  ],
  skills: [
    'Machine learning',
    'Data analysis',
    'Product thinking',
    'UX writing',
    'Frontend development',
    'Research synthesis',
  ],
  interests: [
    'Reading deeply',
    'Designing calm, useful interfaces',
    'Learning in public',
    'Building tools that help people reason better',
  ],
}
