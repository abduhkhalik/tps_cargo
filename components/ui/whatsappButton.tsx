import Link from "next/link";

const WhatsAppButton = () => {
  const phoneNumber = "+6285340012835"; // Replace with your phone number, in international format without the "+" sign
  const message =
    "Halo, saya sangat tertarik dengan layanan yang Anda tawarkan. Bisakah Anda menjelaskan lebih detail tentang cara layanan ini dapat membantu kebutuhan saya?";

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-700 hover:bg-blue-600 hover:animate-none animate-pulse text-white font-bold py-2 px-4 rounded-full fixed bottom-5 right-5 shadow-lg"
    >
      Chat via WhatsApp
    </Link>
  );
};

export default WhatsAppButton;
