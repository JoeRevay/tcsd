export default function Platform() {
  const platformItems = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "Support rigorous academic programs that challenge every learner and prepare students for college, career, and life success."
    },
    {
      icon: "👁️",
      title: "Transparency & Accountability",
      description: "Ensure transparent decision-making processes and responsible stewardship of taxpayer dollars with regular community updates."
    },
    {
      icon: "👩‍🏫",
      title: "Educator Support",
      description: "Empower our teachers and staff with the resources, professional development, and support they need to excel."
    },
    {
      icon: "👥",
      title: "Community Engagement",
      description: "Foster strong partnerships between schools, families, and community members to create a supportive learning environment."
    }
  ];

  const policyCommitments = [
    "✅ Support academic excellence for all learners",
    "✅ Ensure transparency and fiscal responsibility",
    "✅ Empower educators with tools and support", 
    "✅ Encourage strong parent and community engagement"
  ];

  return (
    <section id="platform" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/5 rounded-full float-animation" style={{animationDelay: '3s'}}></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" data-testid="platform-title">
            My Platform
          </h2>
          <div className="h-1 w-16 gradient-bg-accent mx-auto mb-6 section-divider"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="platform-subtitle">
            A comprehensive vision for excellence in education, built on transparency, innovation, and community engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
          {platformItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg card-hover border border-border glass-effect relative overflow-hidden"
              data-testid={`platform-item-${index}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 float-animation" style={{animationDelay: `${index * 0.5}s`}}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Platform Points */}
        <div className="glass-effect rounded-2xl p-8 border border-border card-hover relative z-10">
          <h3 className="text-2xl font-bold gradient-text mb-8 text-center" data-testid="policy-commitments-title">
            Key Policy Commitments
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {policyCommitments.map((commitment, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-all duration-200" data-testid={`policy-commitment-${index}`}>
                <div className="text-card-foreground text-lg">
                  {commitment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}