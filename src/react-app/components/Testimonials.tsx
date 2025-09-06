import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, Star } from '@phosphor-icons/react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I finally understood DP in one night instead of weeks! The visual explanations are incredible.",
      author: "Sarah Chen",
      role: "Software Engineer, 2 YOE",
      company: "Meta",
      rating: 5,
    },
    {
      quote: "Went from failing 5 interviews to getting offers at Google and Stripe. The weakness radar was a game-changer.",
      author: "Marcus Rodriguez",
      role: "Senior Developer, 4 YOE",
      company: "Stripe",
      rating: 5,
    },
    {
      quote: "Cut my prep time from 6 months to 3 weeks. Wish I found this sooner!",
      author: "Priya Patel",
      role: "Full-Stack Engineer, 1 YOE",
      company: "Airbnb",
      rating: 5,
    },
    {
      quote: "The mock interview mode felt exactly like the real thing. Boosted my confidence 10x.",
      author: "David Kim",
      role: "Backend Engineer, 3 YOE",
      company: "Netflix",
      rating: 5,
    },
    {
      quote: "Finally understood why I was struggling with graphs. The smart roadmap knows exactly what you need.",
      author: "Emily Thompson",
      role: "Software Engineer, 1 YOE",
      company: "Apple",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Success <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real engineers, real results. See what happens when you stop grinding and start preparing smart.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 lg:p-12 text-center transition-all duration-500">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-600">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-indigo-600 font-medium">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <CaretLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          >
            <CaretRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-indigo-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">2.5x</div>
            <div className="text-gray-600">Faster Interview Prep</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Pass Rate Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Engineers Helped</div>
          </div>
        </div>
      </div>
    </section>
  );
}
