import axios from "axios";
import { useState, useEffect } from "react";
import {Review, ReviewSectionProps} from "../../interfaces/index";


const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch reviews. Please try again later.");
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-center py-4">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center py-4 text-red-500">{error}</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <img
                src={review.user.avatar}
                alt={review.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{review.user.name}</p>
                <p className="text-yellow-500">Rating: {review.rating}/5</p>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        ))
      ) : (
        <p className="text-center py-4">No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewSection;