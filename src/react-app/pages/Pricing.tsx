import { Check } from "@phosphor-icons/react";
import Footer from "@/react-app/components/Footer";
import Button from "@/react-app/components/ui/Button";
import Card from "@/react-app/components/ui/Card";
import Navigation from "../components/Navigation";

export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "month",
      features: [
        "5 AI Analyses per Month",
        "Session Recording",
        "Basic Feedback",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Premium Plan",
      price: "$19",
      period: "month",
      features: [
        "Unlimited AI Analyses",
        "Session Recording",
        "In-depth Coaching & Strategy Feedback",
        "Historical Progress Tracking",
      ],
      buttonText: "Get Started",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <Navigation />

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Simple,{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your interview preparation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-indigo-600 shadow-2xl"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/ {plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
