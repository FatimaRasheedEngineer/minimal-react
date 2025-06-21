import React from "react";
function Contact() {
  return (
    <section
      className="bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/footer.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(104, 187, 178, 0.9)",
      }}
    >
      <div className="flex flex-col items-center py-16 px-4 text-center">
        <h2 className="text-3xl md:text-2xl font-light mb-8 tracking-wide">
          LET’S GET IN TOUCH
        </h2>
        <div className="w-16 h-0.5 bg-gray-400 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
  
          <div className="flex flex-col items-center">
            <i className="fas fa-map-marker-alt text-6xl mb-4 text-white"></i>
            <h3 className="text-lg font-medium mb-2 tracking-wide">
              MEET US IN PERSON
            </h3>
            <p className="leading-relaxed">
              8776 Juniper Street
              <br />
              Unit #204
              <br />
              Merriweather, Ontario
              <br />
              Canada
            </p>
          </div>


          <div className="flex flex-col items-center">
            <i className="fas fa-envelope text-6xl mb-4 text-white"></i>
            <h3 className="text-lg font-medium mb-2 tracking-wide">
              THE TRADITIONAL WAY
            </h3>
            <p>Email us</p>
            <a
              href="mailto:contact@minimal.com"
              className="text-black underline"
            >
              contact@minimal.com
            </a>
            <p className="mt-4">Contact form</p>
            <a href="#contact-form" className="text-black underline">
              Scroll down
            </a>
          </div>

          <div className="flex flex-col items-center">
            <i className="fas fa-heart text-6xl mb-4 text-white"></i>
            <h3 className="text-lg font-medium mb-2 tracking-wide">
              LET’S GET SOCIAL
            </h3>
            <div className="space-y-2">
              <a href="/" className="flex items-center gap-2">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="/" className="flex items-center gap-2">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="/" className="flex items-center gap-2">
                <i className="fab fa-linkedin-in"></i> Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
