export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: string[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

// Students: this is the main file you should edit.
// Replace every bracketed placeholder with real content.
// Put screenshots, PDFs, and diagrams in public/project-assets/.
// In most cases, you do not need to edit App.tsx or styles.css.

export const projectData: ProjectPageData = {
  slug: 'restaurant-insight-to-action-engine',

  title: 'Restaurant Insight-to-Action Engine',
  subtitle: 'Transforming unstructured customer feedback into a prioritized, compliance-ready business roadmap for independent hospitality operators.',
  ownerLine: 'MSIS 522 — Team 9',
  executiveSummary:
    'Independent restaurants accumulate hundreds of customer reviews each year, yet most lack the analytical infrastructure to extract actionable intelligence from that feedback. The Restaurant Insight-to-Action Engine is an advanced analytics solution that ingests raw, unstructured review text, automatically strips personally identifiable information, discovers latent operational themes through unsupervised machine learning, and outputs a prescriptive roadmap that tells operators precisely what to promote and what to fix. The result is a repeatable, data-driven decision framework that converts noise into strategy.',

  instructions: [
    'PII de-identification runs automatically on every review before any downstream processing begins.',
    'TF-IDF vectorization encodes each review into a 1,000-dimensional feature space, preserving lexical nuance without manual labeling.',
    'K-Means clustering (K=6) groups semantically similar reviews into operational themes such as Service Speed and Product Quality.',
    'The prescriptive mapping engine applies weighted sentiment scoring to each cluster and triggers Promote or Fix action labels.',
  ],

  links: [
    { label: 'Live Demo', url: 'https://restaurantinsighttool-khurc5nhj5pewuzwfpdzcq.streamlit.app', primary: true },
    { label: 'Demo Recording', url: 'https://drive.google.com/file/d/16UEPjB-FotKIaTTrx8zJUxYL76V8i6vm/view?resourcekey' },
    { label: 'GitHub Repo', url: 'https://github.com/martguan-code/msis522-team9-project-template' },
    { label: 'Slides PDF', url: 'https://docs.google.com/presentation/d/1hSQKZ6Y-BsgNZJI37ip5ACbKfZVcaTy7/edit?slide=id.p1#slide=id.p1' },
    { label: 'Technical Report', url: 'https://docs.google.com/document/d/1Tzt3CxcknKH0k9eHs8VZ4hoY8cT5n336xQHSyCbrf84/edit?usp=sharing' },
  ],

  badges: ['Python', 'scikit-learn', 'TF-IDF', 'K-Means', 'Streamlit', 'Plotly', 'Regex PII Pipeline'],

  keywords: ['nlp', 'unsupervised-learning', 'hospitality-analytics', 'pii-compliance', 'prescriptive-analytics'],

  methods: ['TF-IDF Vectorization', 'K-Means Clustering (K=6)', 'Regex PII De-identification', 'Weighted Sentiment Scoring', 'Prescriptive Mapping'],

  metrics: [
    { label: 'Team Size', value: '4 Members', note: '' },
    { label: 'Core User', value: 'Independent Restaurant Operator', note: 'Single-location and small-chain hospitality businesses' },
    { label: 'Review Volume', value: '1,000+ / year', note: 'Typical annual feedback volume per location' },
    { label: 'Feature Space', value: '1,000 Dimensions', note: 'TF-IDF vector size per review document' },
  ],

  problemStatement:
    'Independent hospitality businesses receive upwards of 1,000 customer reviews per year across platforms such as Yelp and Google. Operators typically lack the data infrastructure to systematically process this volume, leaving actionable signals buried in unstructured text. Compounding the challenge, raw review data frequently contains personally identifiable information—email addresses, phone numbers, and URLs—creating compliance exposure under consumer privacy regulations. Without automated theme discovery, managers resort to anecdotal reading, missing systemic patterns in service speed, food quality, pricing perception, and staff behavior that could directly inform operational decisions.',
  solutionSummary:
    'The Engine implements a four-stage NLP pipeline. Stage 1 applies regex-based PII de-identification to scrub emails, phone numbers, and URLs before any data is persisted or analyzed. Stage 2 engineers a 1,000-dimensional TF-IDF feature matrix from the cleaned corpus. Stage 3 applies K-Means unsupervised clustering with K=6, isolating coherent operational themes without requiring labeled training data. Stage 4 executes algorithmic prescriptive mapping: each cluster receives a weighted sentiment score, and the system outputs either a Promote action (reinforce strengths) or a Fix action (address deficiencies). The full workflow is surfaced through an interactive Streamlit interface with Plotly visualizations.',
  audience: 'Independent restaurant and hospitality operators; operations managers; multi-unit franchise coordinators',
  impactGoal: 'Reduce manual review analysis time by 80%, ensure PII compliance across all ingested feedback, and deliver a weekly prioritized action roadmap with zero human labeling required.',
  status: 'Functional Prototype',

  members: [
    {
      name: 'Data Systems Architect',
      role: 'Data Systems Architect',
      focus: 'Designed and implemented the regex-based PII de-identification pipeline, engineered the 1,000-dimensional TF-IDF feature matrix, and calibrated the K-Means clustering model including optimal K selection via elbow-method analysis.',
    },
    {
      name: 'Business Intelligence Strategist',
      role: 'Business Intelligence Strategist',
      focus: 'Developed the prescriptive mapping logic including weighted sentiment scoring thresholds, translated cluster outputs into strategic Promote/Fix roadmaps, and validated business relevance of discovered themes against real operator decision criteria.',
    },
    {
      name: 'Deployment & UX Engineer',
      role: 'Deployment & UX Engineer',
      focus: 'Built and deployed the Streamlit web interface, integrated Plotly for cluster visualizations and sentiment dashboards, and ensured the end-to-end pipeline was reproducible and accessible to non-technical restaurant operators.',
    },
  ],

  gallery: [
    {
      title: 'Streamlit Analytics Dashboard',
      caption: 'The main operator interface displaying cluster themes, sentiment scores, and prioritized Promote/Fix action cards derived from the current review corpus.',
      assetPath: '/project-assets/example-screen.png',
    },
    {
      title: 'The Strategic Data Pipeline',
      caption: 'End-to-end system diagram: Preprocessing & Sanitization → Semantic Feature Engineering (1,000-dim TF-IDF) → Unsupervised Clustering (K-Means) → Algorithmic Prescriptive Mapping (Promote ≥ 4.5 / Fix < 3.5).',
      assetPath: '/project-assets/pipeline-diagram.png',
    },
    {
      title: 'Strategic Sentiment Analysis',
      caption: 'K=6 clustering isolated six operational themes. Cluster 3 — "Price & Speed Issues" — captured 1,093 sub-reviews with a 3.91 average rating and top centroid keywords "expensive" and "delayed", confirming the model\'s accuracy in pinpointing the primary operational bottleneck.',
      assetPath: '/project-assets/sentiment-analysis.png',
    },
  ],

  stack: [
    {
      category: 'NLP & Machine Learning',
      tools: ['scikit-learn', 'TF-IDF Vectorizer', 'K-Means Clustering', 'NLTK / spaCy'],
      note: 'Core analytical layer: transforms raw text into a 1,000-dimensional feature space and partitions reviews into six operationally coherent clusters.',
    },
    {
      category: 'Data Processing & Compliance',
      tools: ['Python re (regex)', 'pandas', 'NumPy', 'CSV / JSON ingestion'],
      note: 'PII de-identification runs first in the pipeline, masking emails, phone numbers, and URLs before any vectorization or storage occurs.',
    },
    {
      category: 'Interface & Visualization',
      tools: ['Streamlit', 'Plotly', 'Matplotlib', 'Python'],
      note: 'Streamlit delivers the operator-facing dashboard; Plotly renders interactive cluster maps, sentiment trend charts, and the prescriptive action roadmap.',
    },
  ],

  features: [
    {
      title: 'Automated PII De-identification',
      description: 'Every review is passed through a regex scrubbing layer before entering the analytical pipeline. The system detects and masks email addresses, phone numbers, and URLs, ensuring the downstream corpus is free of personal identifiers and compliant with consumer privacy requirements.',
      highlights: [
        'Regex patterns cover email, phone (multiple formats), and URL schemas',
        'Runs as a mandatory first stage—no raw PII ever reaches the feature engineering layer',
        'Produces an audit-ready anonymized corpus for storage and analysis',
      ],
    },
    {
      title: 'TF-IDF Feature Engineering & K-Means Clustering',
      description: 'Cleaned reviews are encoded into a 1,000-dimensional TF-IDF vector space, weighting terms by their discriminative power across the corpus. K-Means (K=6) then partitions these vectors into clusters that map to coherent operational themes—Service Speed, Product Quality, Ambiance, Staff Behavior, Pricing Perception, and Cleanliness—without any manual labeling.',
      highlights: [
        '1,000-feature TF-IDF matrix preserves semantic nuance without manual annotation',
        'K=6 selected via elbow-method analysis on within-cluster sum of squares',
        'Cluster labels are validated against human-readable top-term inspection',
      ],
    },
    {
      title: 'Prescriptive Roadmap Generation',
      description: 'Each cluster receives a weighted sentiment score computed from term-level polarity signals. A rule-based mapping engine evaluates each score against calibrated thresholds and triggers either a Promote action (reinforce the operational strength) or a Fix action (address the deficiency). Outputs are ranked by score magnitude to produce a prioritized weekly action roadmap.',
      highlights: [
        'Weighted sentiment scoring accounts for term frequency and cluster density',
        'Binary Promote/Fix classification provides unambiguous operator directives',
        'Roadmap items ranked by impact magnitude for clear prioritization',
      ],
    },
  ],

  architecture: [
    {
      title: 'Stage 1 — PII De-identification',
      description: 'Raw review text is ingested from CSV or API feed. A regex pipeline immediately scrubs emails, phone numbers, and URLs, producing a sanitized corpus. No PII-bearing data advances beyond this stage.',
    },
    {
      title: 'Stage 2 — TF-IDF Feature Engineering',
      description: 'The sanitized corpus is vectorized using scikit-learn\'s TfidfVectorizer with max_features=1000. Each review becomes a 1,000-dimensional sparse vector encoding term relevance relative to the full document collection.',
    },
    {
      title: 'Stage 3 — Unsupervised K-Means Clustering',
      description: 'The TF-IDF matrix is partitioned into K=6 clusters via K-Means. Cluster centroids are inspected by top-weighted terms to assign human-readable operational theme labels such as Service Speed and Product Quality.',
    },
    {
      title: 'Stage 4 — Prescriptive Action Mapping',
      description: 'Each cluster\'s weighted sentiment score is evaluated against decision thresholds. The engine outputs a Promote label for high-positive clusters and a Fix label for high-negative clusters, then ranks all actions into a prioritized business roadmap delivered through the Streamlit dashboard.',
    },
  ],

  codeHighlights: [
    {
      title: 'Stage 1: Regex PII De-identification',
      language: 'python',
      note: 'Applied to every review before vectorization. Masks emails, phone numbers, and URLs with neutral tokens.',
      code: `import re

def deidentify(text: str) -> str:
    text = re.sub(r'[\\w.+-]+@[\\w-]+\\.[\\w.]+', '[EMAIL]', text)
    text = re.sub(r'\\b(\\+?1[\\s.-]?)?(\\(?\\d{3}\\)?[\\s.-]?)\\d{3}[\\s.-]\\d{4}\\b', '[PHONE]', text)
    text = re.sub(r'https?://\\S+|www\\.\\S+', '[URL]', text)
    return text`,
    },
    {
      title: 'Stage 2–3: TF-IDF Vectorization & K-Means Clustering',
      language: 'python',
      note: 'Builds the 1,000-dimensional feature matrix and fits K-Means with K=6 on the cleaned corpus.',
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans

vectorizer = TfidfVectorizer(max_features=1000, stop_words='english')
X = vectorizer.fit_transform(clean_reviews)

model = KMeans(n_clusters=6, random_state=42, n_init=10)
labels = model.fit_predict(X)`,
    },
  ],

  roadmap: [
    {
      phase: 'Now',
      items: [
        'Full four-stage pipeline operational: PII scrubbing → TF-IDF → K-Means → prescriptive mapping',
        'Streamlit dashboard with Plotly cluster visualizations and Promote/Fix action cards',
        'K=6 validated via elbow-method analysis on the target review corpus',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Integrate transformer-based embeddings (e.g., sentence-transformers) to improve cluster semantic coherence',
        'Add time-series sentiment trending so operators can track improvement after interventions',
        'Connect directly to Google Business Profile and Yelp APIs for automated review ingestion',
      ],
    },
    {
      phase: 'Later',
      items: [
        'Expand to multi-location chains with comparative cluster benchmarking across sites',
        'Explore SaaS licensing model for independent restaurant groups and hospitality consultancies',
        'Integrate with POS and reservation systems to correlate operational data with review sentiment patterns',
      ],
    },
  ],

  risks: [
    {
      title: 'Cluster Interpretability Drift',
      mitigation: 'Cluster themes are validated each run via top-term inspection. If centroid vocabulary shifts with new review batches, K is re-evaluated using the elbow method before roadmap outputs are published.',
    },
    {
      title: 'Regex PII Coverage Gaps',
      mitigation: 'The regex library is versioned and tested against a held-out PII fixture set. Edge cases are logged and patterns are updated incrementally; a secondary spaCy NER pass is planned as a fallback layer.',
    },
    {
      title: 'Review Volume Imbalance Across Clusters',
      mitigation: 'Sentiment scores are normalized by cluster size to prevent high-volume clusters from dominating the roadmap. Sparse clusters below a minimum threshold are flagged for operator review rather than generating automated actions.',
    },
  ],
};
