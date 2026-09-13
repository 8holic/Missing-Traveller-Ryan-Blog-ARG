import heroPic from './assets/intropic.jpg'

function AboutMe() {
  return (
    <section id="about-me">
      <img src={heroPic} alt="View from one of Ryan's travels" className="about-hero" />
      <h2>About Me</h2>
      <p>
        Do you like travelling? If you do you are in the right place. I am Ryan, a frequent traveler from Singapore. Welcome to my travel blog where I write about my travels and my feelings about various places. I usually travel around Asia but I will be visiting Europe soon.
      </p>
    </section>
  )
}

export default AboutMe
