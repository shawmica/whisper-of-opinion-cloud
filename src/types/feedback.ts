
export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface FeedbackFormData {
  name: string;
  email: string;
  message: string;
}
