import Link from "next/link";

const WhatsAppButton = () => {
  const phoneNumber = "085340012835"; // Replace with your phone number, in international format without the "+" sign
  const message =
    "Hello, Saya Tertarik Untuk Mengetahui Lebih Banyak Tentang Layanan Anda!"; // Predefined message

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 hover:bg-blue-600 animate-pulse text-white font-bold py-2 px-4 rounded-full fixed bottom-5 right-5 shadow-lg"
    >
      Chat via WhatsApp
    </Link>
  );
};

export default WhatsAppButton;
