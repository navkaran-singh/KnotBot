export default function FeaturedIn() {
  const publications = [
    { name: 'TechCrunch', logo: 'TC' },
    { name: 'Wired', logo: 'W' },
    { name: 'HackerNews', logo: 'HN' },
    { name: 'The Verge', logo: 'V' },
    { name: 'MIT Tech Review', logo: 'MIT' },
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
            Featured In
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {publications.map((pub, index) => (
              <div
                key={pub.name}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass rounded-xl p-4 w-20 h-20 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-700">{pub.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
