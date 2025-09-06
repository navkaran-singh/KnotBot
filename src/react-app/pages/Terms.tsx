import Footer from "@/react-app/components/Footer";
import Navigation from "../components/Navigation";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Terms of{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: September 2025
            </p>
          </div>

          <div className="prose prose-lg mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using KnotBot, you accept and agree to be bound
                by the terms and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Use License
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily use KnotBot for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not modify or copy the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your
                computer. You agree to accept responsibility for all activities
                that occur under your account or password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Acceptable Use
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You may not use KnotBot for any unlawful purpose or to solicit
                others to perform unlawful acts. You may not transmit any worms
                or viruses or any code of a destructive nature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall KnotBot or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use KnotBot.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
