export type JobItem = {
  id: number;
  title: string;
  company: string;
  badge_letters: string;
  date: string;
  days_ago: number;
  relevance_score: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  cover_img_url: string;
  company_url: string;
};

export type SortBy = "relevant" | "recent";

export type PageDirection = "next" | "previous";
