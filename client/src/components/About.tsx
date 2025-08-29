export default function About() {
  return (
    <section id="about" className="py-20 gradient-bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-bg-accent rounded-xl blur opacity-20 float-animation"></div>
            <img 
              src="https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/539535880_10109407142009192_4723615825271181278_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9chOh78DWjoQ7kNvwEC4bMp&_nc_oc=AdldRwHFgwndwrhxQwxywdnXWJBOZhCYva8jlEfROqlEoIirL6r26xV1cbwL3Wb-1oeTn_ptjGBzqheq7Pi8_dbf&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=F51T_A7J5h33nO9bRdsD5w&oh=00_AfW5iopC1GImpXgQ--nDQy7IeKCDjIWPjjyKuPkGvSxBtg&oe=68B65B8A" 
              alt="Joe Revay professional headshot" 
              className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              data-testid="about-image"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4" data-testid="about-title">
                About Joe
              </h2>
              <div className="h-1 w-16 gradient-bg-accent mb-8 section-divider"></div>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p data-testid="about-description-1">
                Joe Revay is a dedicated community member and advocate for student success, running for a seat on the Twinsburg City Board of Education. With a passion for education and a strong connection to the Twinsburg community, Joe is committed to helping build a school system that serves every student and family.
              </p>
              
              <p data-testid="about-description-2">
                As a long-time resident and parent, Joe understands the challenges facing our schools and the importance of quality education in shaping our children's futures. His experience in community involvement has prepared him to bring practical solutions and collaborative leadership to the school board.
              </p>
              
              <p data-testid="about-description-3">
                Joe believes that education is the cornerstone of a thriving community, and he's ready to work tirelessly to ensure that Twinsburg schools provide every student with the tools they need to succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 glass-effect rounded-xl card-hover">
                <div className="text-4xl font-bold gradient-text" data-testid="stats-years">10</div>
                <div className="text-sm text-muted-foreground mt-2">Years in Community</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-xl card-hover">
                <div className="text-4xl font-bold gradient-text" data-testid="stats-hours">500+</div>
                <div className="text-sm text-muted-foreground mt-2">Volunteer Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}