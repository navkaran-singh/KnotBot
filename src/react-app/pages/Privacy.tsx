import Footer from "@/react-app/components/Footer";
import Navigation from "../components/Navigation";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Privacy{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600">Last updated: January 2024</p>
          </div>

          <div className="prose prose-lg mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We collect user email addresses for account creation and
                authentication purposes. Additionally, we collect session event
                data including code patches, timestamps, and submission results
                from your LeetCode sessions to provide our core AI analysis
                feature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Data
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is used exclusively to provide the core AI analysis
                feature and to authenticate your account. We analyze your coding
                session data to identify patterns, provide feedback, and help
                you improve your problem-solving approach. We do not sell, rent,
                or share your personal data with third parties for marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Storage
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All user data is stored securely in our MongoDB database with
                industry-standard encryption. We implement appropriate technical
                and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your personal
                information at any time. If you wish to exercise these rights or
                have any questions about our privacy practices, please contact
                us at support@knotbot.ai.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
