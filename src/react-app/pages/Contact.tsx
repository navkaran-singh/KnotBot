import Footer from "@/react-app/components/Footer";
import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Get in{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Questions or Feedback? We'd love to hear from you. Please reach
                out to our support team at{" "}
                <a
                  href="mailto:support@knotbot.ai"
                  className="text-indigo-600 hover:text-indigo-700 font-medium underline"
                >
                  support@knotbot.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
