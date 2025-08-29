// Community Support Section - Commented out until testimonials are available
export default function Endorsements() {
  return null;
}

/*
export default function Endorsements() {
  const testimonials = [
    {
      name: "Sarah Martinez",
      title: "Parent & Teacher",
      quote: "Joe's commitment to our children's education is evident in everything he does. His collaborative approach and fresh perspective will serve our district well.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Chen",
      title: "Local Business Owner",
      quote: "Joe understands the connection between great schools and a thriving community. His business acumen will bring valuable perspective to the board.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Jennifer Thompson",
      title: "Former School Board Member",
      quote: "Having served on the board for six years, I know the qualities needed for success. Joe has the vision and dedication our students deserve.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const endorsingOrganizations = [
    { name: "Twinsburg Education Association", icon: "fas fa-users" },
    { name: "Parent-Teacher Organization", icon: "fas fa-handshake" },
    { name: "Chamber of Commerce", icon: "fas fa-building" },
    { name: "Community Leaders Coalition", icon: "fas fa-heart" }
  ];

  return (
    <section id="endorsements" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="endorsements-title">
            Community Support
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="endorsements-subtitle">
            Endorsed by educators, parents, and community leaders who believe in our shared vision for educational excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-8 shadow-lg border border-border"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <h4 className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-title-${index}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed" data-testid={`testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-background rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center" data-testid="endorsed-by-title">
            Endorsed By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {endorsingOrganizations.map((org, index) => (
              <div key={index} className="space-y-2" data-testid={`endorsing-org-${index}`}>
                <div className="text-accent text-2xl">
                  <i className={org.icon}></i>
                </div>
                <p className="text-sm text-muted-foreground">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
*/
