import Footer from "@/react-app/components/Footer";
import Navigation from "../components/Navigation";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Navigation />

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Refund & Cancellation Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: September 6, 2025
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Refund Policy
              </h2>
              <p>
                Due to the digital nature of our product, all sales are final.
                Once a purchase is made and the extension or license key is
                delivered, it is deemed "used" and cannot be returned.
              </p>
              <p className="mt-4">
                Therefore, we do not offer any refunds or exchanges for our
                products and services.
              </p>
              <p className="mt-4">
                We encourage you to carefully consider your purchase before
                completing the transaction. If you are experiencing any
                technical issues with the extension, please contact our support
                team through our Contact Us page, and we will be happy to assist
                you in resolving the issue.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Cancellation Policy
              </h2>
              <p className="mb-4 font-semibold">For One-Time Purchases:</p>
              <p>
                As your purchase is a one-time transaction for a digital good,
                there is no recurring subscription to cancel.
              </p>

              <p className="mt-6 mb-4 font-semibold">
                For Subscription-Based Services (if applicable):
              </p>
              <p>
                If you have subscribed to a recurring payment plan, you can
                cancel your subscription at any time from your account dashboard
                or by contacting us. Upon cancellation, your subscription will
                remain active until the end of the current billing period. You
                will not be charged for subsequent billing cycles. Please note
                that cancelling a subscription does not entitle you to a refund
                for any past or current payments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Contact Us
              </h2>
              <p>
                If you have any questions about our Refund and Cancellation
                Policy, please feel free to reach out to us through our Contact
                Us page.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
