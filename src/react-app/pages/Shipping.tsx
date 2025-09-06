import Footer from "@/react-app/components/Footer";
import Navigation from "../components/Navigation";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Navigation />

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Shipping Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: September, 2025
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
            <div>
              <p className="mt-4">
                All products and services sold by KnotBot are delivered
                digitally via our Chrome Extension and website. No physical
                shipping is required. Access to our services is granted
                immediately upon successful payment and account activation.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
