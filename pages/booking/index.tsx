import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    / Basic validation
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.phoneNumber ||
    !formData.cardNumber ||
    !formData.expirationDate ||
    !formData.cvv ||
    !formData.billingAddress
  ) {
    setError("All fields are required.");
    return;
  }
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      if (response.status === 200) {
        setSuccess(true);
        alert("Booking confirmed!");
      }
    } catch (error) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Expiration Date</label>
        <input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">CVV</label>
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Billing Address</label>
        <input
          type="text"
          name="billingAddress"
          value={formData.billingAddress}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">Booking confirmed successfully!</p>}
    </form>
  );
}