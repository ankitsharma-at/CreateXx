import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black md:pl-60 min-h-full  flex flex-col items-center md:pb-24  p-10 relative">
      <h1 className="text-[#E8E8E8] font-kagitingan text-5xl self-start md:mr- mb-16 mt-24">CONTACT US</h1>
      
      <div className="relative  w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center ">
        <div className="bg-[#FF6E1F] text-[#E8E8E8] p-8  rounded-lg w-full md:w-96 md:mr-20 md:h-72 flex flex-col justify-center md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/3 z-10 mb-8 md:mb-0">
          <h3 className="font-kagitingan text-3xl text-left mb-4">CONNECT WITH US</h3>
          <p className="text-base text-left font-jura">We're excited to hear from you! Whether it's a question, feedback, or just to say hello, we've made it easy to get in touch. Choose any of the options on the right to reach us directly:</p>
        </div>
        
        <div className="bg-[#191919]  text-[#E8E8E8] p-12 md:ml-12 rounded-lg w-full md:w-[800px] h-[500px] md:h-[500px] flex flex-col items-start relative mt-[-4rem] md:mt-0">
          <div className="md:pl-8">
            <p className="mb-8 text-xl text-left font-jura">We're here and ready to connect, whichever way works best for you. Let's create something amazing together!</p>
            <div className="space-y-8 md:ml-8">
              <div className="flex items-center gap-4">
                <img src="/assets/mail.png" alt="Email" className="w-8 h-8" />
                <span className="text-lg font-jura">example@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/phone.png" alt="Phone" className="w-8 h-8" />
                <span className="text-lg font-jura">4755XXXXXX</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/assets/insta.png" alt="Instagram" className="w-8 h-8" />
                <span className="text-lg font-jura">@INSTAGRAM</span>
              </div>
            </div>
          </div>
          <img src="/assets/contact-svg.png" alt="Contact Illustration" className="absolute bottom-0 right-0 w-2/3 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
