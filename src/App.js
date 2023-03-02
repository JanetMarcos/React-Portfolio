import './App.css';

function App() {
  return (
    <div className="body">
      <div class="top-container" >
        <div class="title-text">
          <h1>I'm Janet.</h1>
          <h2>an aspiring programmer.</h2>
        </div>
      </div>

      <div class="middle-container">
        <div class="profile">
          <h2>Hello.</h2>
          <p class="intro">I am a passionate about learning and solving problems.</p>
          <p> I love creating solutions that will have a positive impact on people's lives</p>
        </div>

        <div class="hobbies">
          <h2>My Hobbies.</h2>
          <div class="hobbies">
            <h3>YouTuber</h3>
            <p>I have been running my own youtube channel for the last two years now. It a platform where I engage with my fans</p>
            <button> <a href="https://www.youtube.com/@janetmarcos707">Click here to visit my youtube channel</a></button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
