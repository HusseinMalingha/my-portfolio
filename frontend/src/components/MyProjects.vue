<template>
  <div class="main">
    <div class="card">
      <img src="../assets/me.jpeg" alt="" />
      <h2>Project Name</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.svg" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/link.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card">
      <img src="../assets/me.jpeg" alt="" />
      <h2>Project Name</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.svg" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/link.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card">
      <img src="../assets/me.jpeg" alt="" />
      <h2>Project Name</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.svg" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/link.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card">
      <img src="../assets/me.jpeg" alt="" />
      <h2>Project Name</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div class="links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.svg" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="../assets/link.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  overflow: scroll;
}
.card {
  background-color: #264ff5;
  margin: 0.5rem;
  padding: .75rem;
  width: 50%;
}
img {
  height: 50vh;
  border-radius: 2px;
}
.links {
  display: flex;
  justify-content: flex-end;
}
.links img {
  height: 1.5rem;
  margin: 0.25rem;
}

@media only screen and (max-width: 768px){
  .main {
    display: flex;
    flex-direction: row;
    overflow: scroll;
  }
  .card {
    background-color: #264ff5;
    margin: .5rem;
    padding: .5rem;
    width: 100%;
    border-radius: 2px;
  }
  img {
    height: 18.75rem;
  }
}
</style>
