export const projects = [
  {
    slug: 'fashion-mnist-reconstruction',
    title: 'Learning from Missing Pixels',
    summary:
      'A small neural network learns to reconstruct hidden image regions from Fashion-MNIST without using class labels.',
    tagline: 'Self-supervised learning',
    year: '2026',
    problem:
      'Can a model learn useful visual structure by predicting image pixels that were deliberately hidden?',
    motivation:
      'I wanted to explore a learning task where the image itself provides the training signal, rather than relying on clothing-category labels.',
    approach:
      'I masked image patches, implemented a small neural network and its training loop from scratch, then compared reconstruction quality across mask sizes.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    challenges: [
      'Reconstructing larger hidden regions with less visual context',
      'Pixel-level error can favor blurry average predictions',
      'The experiments do not test the learned features on a separate classification task',
    ],
    results: [
      'Training loss decreased from 0.490365 to 0.169963 over 20 epochs.',
      'Test reconstruction error increased as the mask grew from 8x8 to 16x16 pixels.',
      'The model produced plausible reconstructions without training on class labels.',
    ],
    learnings:
      'The model learned statistical relationships between pixels, not human-readable clothing categories. Larger missing regions made reconstruction less reliable.',
    links: {
      github: 'https://github.com/Mihretf/fashion-mnist-from-scratch',
      readme: 'https://raw.githubusercontent.com/Mihretf/fashion-mnist-from-scratch/main/readme.md',
    },
  },
  {
    slug: 'reinforcement-learning-grid-world',
    title: 'Learning to Navigate',
    summary:
      'A Q-learning agent learns to navigate an obstacle-filled grid world through trial, reward, and repeated practice.',
    tagline: 'Q-learning from scratch',
    year: '2026',
    problem:
      'Can an agent learn an effective route to a goal through rewards instead of being given the correct path?',
    motivation:
      'A small grid world makes the core reinforcement-learning ideas visible: states, actions, rewards, and policies.',
    approach:
      'I built an 8x8 environment and a tabular Q-learning agent, compared it against a random baseline, and tested different exploration rates.',
    technologies: ['Python', 'NumPy', 'Q-learning', 'Matplotlib'],
    challenges: [
      'Balancing exploration of new actions with using learned actions',
      'Choosing rewards that encourage efficient paths',
      'The learned policy is evaluated on one fixed grid layout',
    ],
    results: [
      'The trained agent reached a 100% success rate in the recorded later training episodes.',
      'A random-agent baseline reached the goal in 10% of episodes.',
      'Exploration settings changed convergence speed and final path efficiency.',
    ],
    learnings:
      'A baseline and controlled comparisons make learning measurable; results from a fixed grid should not be generalized to different maps.',
    links: {
      github: 'https://github.com/Mihretf/reinforcement-learning-from-scratch',
      readme: 'https://raw.githubusercontent.com/Mihretf/reinforcement-learning-from-scratch/main/README.md',
    },
  },
  {
    slug: 'document-topic-discovery',
    title: 'Document Topic Discovery',
    summary:
      'An unsupervised learning study that uses TF-IDF and K-Means to explore topic structure in AG News.',
    tagline: 'TF-IDF + K-Means',
    year: '2026',
    problem:
      'Can clustering discover useful topics in news articles without seeing the human-assigned category labels?',
    motivation:
      'I wanted to compare machine-discovered groupings with the dataset taxonomy and see where the model reveals finer-grained topics.',
    approach:
      'I implemented text preprocessing, TF-IDF vectorization, and K-Means from scratch, then inspected clusters with representative documents, PCA plots, and label comparisons.',
    technologies: ['Python', 'TF-IDF', 'K-Means', 'PCA'],
    challenges: [
      'Building a sparse text representation for 120,000 documents',
      'Interpreting overlapping clusters without overclaiming separation',
      'Distinguishing semantic coherence from geometric separation',
    ],
    results: [
      'Sports and business/oil topics formed coherent clusters in the experiments.',
      'A software-focused cluster and more specific world-news subtopics emerged at higher K values.',
      'PCA plots and near-zero silhouette scores showed substantial overlap between documents.',
    ],
    learnings:
      'Cluster interpretation needs more than one metric: representative documents and top terms helped explain groups that silhouette scores alone could not.',
    links: {
      github: 'https://github.com/Mihretf/kmeans-clustering-from-scratch',
      readme: 'https://raw.githubusercontent.com/Mihretf/kmeans-clustering-from-scratch/main/Readme.md',
    },
  },
  {
    slug: 'house-price-regression',
    title: 'House Price Prediction',
    summary:
      'A from-scratch linear regression study of how seven housing features work together to predict prices.',
    tagline: 'Linear regression + gradient descent',
    year: '2026',
    problem:
      'Can a small linear model learn useful house-price estimates from measurable property features?',
    motivation:
      'I wanted to understand the full learning process directly, from inspecting the data to evaluating predictions and regularization.',
    approach:
      'I implemented prediction, mean squared error, gradients, gradient descent, test evaluation, and L2 regularization without a prebuilt regression estimator.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    challenges: [
      'Features use different scales, so weights are not directly comparable',
      'Choosing a learning rate that converges on the dataset',
      'Testing regularization without confusing smaller weights with better predictions',
    ],
    results: [
      'Using all seven features reduced test RMSE from about 40,425 to about 33,147 compared with the single-feature model.',
      'A very strong L2 penalty increased test error in the recorded comparison.',
      'The dataset contained 1,000 records and had no missing or duplicate rows.',
    ],
    learnings:
      'Features that look weak individually can still help in combination; stronger regularization is not automatically better.',
    links: {
      github: 'https://github.com/Mihretf/house-price-regression-from-scratch',
      readme: 'https://raw.githubusercontent.com/Mihretf/house-price-regression-from-scratch/main/README.md',
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
