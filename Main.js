
import React from 'react'


export default function Main() {
  
  return (
    <div className='main'>
        <div className='col col1'>
            <h2>Welcome to your musical journey! </h2>
            <p>"Drown out the world with your favorite tunes."</p>
            <div className="d-grid gap-2 mt-3">
            <button
      type="submit"
      className="btn btn-outline-primary"
      style={{ backgroundColor: '#17A589', color: 'white', borderRadius: '25px',width:'250px',marginRight:'-600px' }}
    >
      Your Top Picks
    </button>
          </div>
        </div>
        <div className='col'>
          <div class="card">
            <div className="image" style={{ backgroundImage: `url('https://wallpapercave.com/dwp1x/wp6373864.jpg')` }}></div>
            <div class="text">
            <h4> Artists </h4>
           </div>
          </div>

          <div class="card">
            <div className="image" style={{ backgroundImage: `url('https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=600')` }}></div>
            <div class="text">
            <h4> Albums </h4>
           </div>
          </div>

          <div class="card">
            <div className="image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/8Z9aL9wIfN9C0HlENbCsg8SnKjIuqEZJecFkX4WKCrQZn_-D0YDNN2Hz6Qp9NltHdj_SygXa2WwzhpHm=w544-h544-l90-rj')` }}></div>
            <div class="text">
            <h4> Trending </h4>
           </div>
          </div>
            
          <div class="card">
            <div className="image" style={{ backgroundImage: `url('https://images.pexels.com/photos/6760183/pexels-photo-6760183.png?auto=compress&cs=tinysrgb&w=600')` }}></div>
            <div class="text">
            <h4> Mood </h4>
           </div>
          </div>

        </div>
    </div>
  )
}
