
import { Feedback, FeedbackFormData } from "@/types/feedback";

// In-memory storage for feedback (this would be a database in a real app)
let feedbackItems: Feedback[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    message: "This app is fantastic! I love the clean interface.",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Would be great to have a dark mode option in the future.",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3", 
    name: "Mike Johnson",
    email: "mike@example.com",
    message: "The performance is excellent. Great job on optimization!",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  }
];

// Simulate network delay for realistic experience
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const submitFeedback = async (data: FeedbackFormData): Promise<Feedback> => {
  await delay(800); // Simulate network delay
  
  // Validate data (additional validation can be done here)
  if (!data.name || !data.email || !data.message) {
    throw new Error("All fields are required");
  }
  
  if (!data.email.includes('@')) {
    throw new Error("Please enter a valid email address");
  }
  
  // Create new feedback entry
  const newFeedback: Feedback = {
    id: Date.now().toString(),
    ...data,
    createdAt: new Date().toISOString()
  };
  
  // Add to "database"
  feedbackItems.unshift(newFeedback);
  
  return newFeedback;
};

export const getAllFeedback = async (): Promise<Feedback[]> => {
  await delay(500); // Simulate network delay
  return [...feedbackItems];
};

export const deleteFeedback = async (id: string): Promise<void> => {
  await delay(500); // Simulate network delay
  feedbackItems = feedbackItems.filter(item => item.id !== id);
};
