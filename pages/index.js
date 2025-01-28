import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Head>
        <title>Soil Study</title>
      </Head>

      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <Image src="/images/img.png" alt="Decorative" width={400} height={400} className="decorative-image" />
        <h2 className="text-right">Welcome to</h2> {/* Texte modifié ici */}

        {/* Login Form */}
        <div className={`form-wrapper login ${isActive ? 'hidden' : ''}`}>
          <form>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="sign-link">
              <p>
                Don&#39;t have an account? <a href="#" onClick={toggleActive}>Register</a>
              </p>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div className={`form-wrapper register ${!isActive ? 'hidden' : ''}`}>
          <form>
            <h2>Registration</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Register</button>
            <div className="sign-link">
              <p>
                Already have an account? <a href="#" onClick={toggleActive}>Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
