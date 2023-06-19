<template>
  <div class="main-container">
    <div class="bio">
      <div class="profile">
        <img src="../assets/me.jpeg" alt="" />
        <h2>Hussein Osep Malingha</h2>
        <p>Software Developer</p>
      </div>

      <div class="socials">
        <div class="link">
          <a href="https://github.com/HusseinMalingha" target="_blank" rel="noopener noreferrer">
            <img src="../assets/github.svg" alt="" />
            <h3>Github</h3>
          </a>
        </div>
        <div class="link">
          <a href="https://twitter.com/hm_osep" target="_blank" rel="noopener noreferrer">
            <img src="../assets/twitter.svg" alt="" />
            <h3>Twitter</h3>
          </a>
        </div>
        <div class="link">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="../assets/youtube.svg" alt="" />
            <h3>Youtube</h3>
          </a>
        </div>
      </div>

      <div class="cta">
        <div class="projects-button" @click="toggleSection('about-me')">
          <a href="#about-me">About Me</a>
        </div>
        <div class="projects-button" @click="toggleSection('projects')">
          <a href="#projects">Projects</a>
        </div>
        <div class="resume-button" @click="toggleSection('resume')">
          <a href="#resume">My Resume</a>
        </div>
      </div>
    </div>

    <div class="details">
      <div v-if="currentSection === 'about-me'">
        <div class="about-me">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam esse voluptatum
            recusandae commodi tenetur maiores reprehenderit ab, id veritatis laborum neque minus
            pariatur atque doloremque officia cupiditate possimus! Porro.
          </p>
        </div>

        <div class="technologies">
          <h2>Technologies Studied</h2>
          <div class="techno-logos">
            <img src="../assets/html.png" alt="" />
            <img src="../assets/css3.png" alt="" />
            <img src="../assets/js.png" alt="" />
          </div>
        </div>
        <div class="call-to-action">
          <div class="contact-button" @click="toggleSection('contact-me')">
            <a href="#contact-me">Contact Me</a>
          </div>
        </div>
      </div>

      <div v-else-if="currentSection === 'projects'">
        <h1>Projects</h1>
        <MyProjects />
        <div>
            <p>fooo</p>
        </div>
      </div>

      <div v-else-if="currentSection === 'contact-me'">
        <h1>Contact Me</h1>
        <p>This is section 2.</p>
      </div>

      <div v-else-if="currentSection === 'resume'">
        <h1>My Resume</h1>
        <PdfViewer/>
      </div>
    </div>
  </div>
</template>

<script>
import MyProjects from './MyProjects.vue';
import PdfViewer from './PdfViewer.vue';
export default {
    components: {
    PdfViewer,
    MyProjects
},
  data() {
    return {
      currentSection: 'about-me', // Default section to display
    }
  },
  methods: {
    toggleSection(section) {
      this.currentSection = section
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 700;
}
h2 {
  font-weight: 600;
}
p {
  font-weight: 500;
}
img {
  height: 25px;
}
.main-container {
  display: flex;
  flex-direction: row;
  width: 90vw;
}
.bio {
  justify-content: center;
  width: 30%;
  background-color: #264ff5;
  margin: 0.5;
  padding: 1.5rem;
  border-radius: 5px;
  text-align: center;
}
.profile img {
  display: block;
  height: 10rem;
  border-radius: 50%;
  margin: 0 auto;
}
.details {
  margin: 0.5rem;
  padding: 1rem;
  width: 70%;
  border-right: #264ff5 solid;
  border-radius: 5px;
}

.contact-button {
  width: 25%;
  margin: 1rem;
  background-color: #264ff5;
  border-radius: 5px;
  padding: 0.75rem;
  text-align: center;
  justify-content: left;
}

a {
  color: #fff;
  cursor: pointer;
}
.techno-logos img {
  height: 50px;
}
.cta {
  display: block;
  margin: 0 auto;
}
.projects-button,
.resume-button {
  width: 75%;
  background-color: black;
  margin: 0.5rem auto;
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
}
@media only screen and (max-width: 768px) {
  .main-container {
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
    height: 50vh;
    font-size: 0.5rem;
  }
  .bio {
    justify-content: center;
    width: 100%;
    background-color: #264ff5;
    margin: 0 auto;
    padding: 0.75rem;
    border-radius: 5px;
    text-align: center;
    font-size: 0.75rem;
  }
  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
  }
  .link {
    margin: 0 auto;
  }
  .details {
    margin: 0 auto;
    padding: 0.5rem;
    width: 100%;
    border-bottom: #264ff5 solid;
    border-right: 0;
    border-radius: 5px;
    font-size: 1rem;
  }
  .profile img {
    height: 8.5rem;
  }
  .contact-button {
    background-color: #264ff5;
    border-radius: 5px;
    padding: 0.75rem;
    margin: 2rem;
  }
  .cta {
    display: flex;
    flex-direction: row;
  }
  .projects-button,
  .resume-button {
    display: block;
    width: 50%;
    background-color: black;
    margin: 0.2rem;
    padding: 0.25rem;
    border-radius: 0.4rem;
    cursor: pointer;
    font-size: 0.75rem;
  }
  .contact-button {
    width: 75%;
  }
}
</style>
