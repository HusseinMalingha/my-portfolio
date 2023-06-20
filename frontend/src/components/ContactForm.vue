<template>
  <form @submit="submitForm">
    <fieldset>
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <textarea rows="5" cols="50" v-model="message" placeholder="Message" required></textarea>
      <input class="btn" type="submit" value="Send" />
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async submitForm() {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      })
      if (response.ok) {
        // Handle successful form submission
        // Reset form fields, show success message, etc.
      } else {
        // Handle form submission error
        // Show error message, handle validation errors, etc.
      }
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
}
fieldset {
  border: none;
}
input,
textarea {
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: black;
  border: none;
  color: #fff;
  font-weight: 400;
  border-radius: 5px;
}
input {
  width: 13rem;
  height: 2rem;
}
.btn {
  margin: 0.5rem;
  padding: 0.5rem;
  width: 27rem;
  border: none;
  border-radius: 5px;
  background-color: #264ff5;
  color: #fff;
}
@media only screen and (max-width: 768px) {
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  input,
  textarea {
    margin: .5rem auto;
    width: 18rem;
    padding: .5rem;
  }
  .btn {
    margin: 0.5rem auto;
    width: 18rem;
  }
  .btn::after{
    background-color: #fff;
    transition: .4s;
  }
}
</style>
