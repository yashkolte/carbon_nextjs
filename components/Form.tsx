import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';


interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, rememberMe);
  };

  return (
    <div className={styles.container}>
      {/* Left side - Form */}
      <div className={styles.formSection}>
        <div className={styles.logo}>
          <svg height="24" width="24" viewBox="0 0 24 24" className={styles.logoIcon}>
            <circle cx="12" cy="12" r="10" fill="black" />
            <path d="M8 12L16 8L12 16L10 10L8 12Z" fill="white" />
          </svg>
          <span className={styles.logoText}>CubeFactory</span>
        </div>

        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Welcome back</h1>
          <h3 className={styles.formSubTitle}>Please enter your details</h3>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email address</label>
              <input
                type="email"
                id="email"
                className={styles.textInput}
                placeholder="Enter the name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type="password"
                  id="password"
                  className={styles.textInput}
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className={styles.passwordToggle}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.5C4.5 3.5 1.5 6 1.5 8C1.5 10 4.5 12.5 8 12.5C11.5 12.5 14.5 10 14.5 8C14.5 6 11.5 3.5 8 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className={styles.formFooter}>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={styles.checkbox}
                />
                <label htmlFor="remember" className={styles.checkboxLabel}>
                  Remember for 30 days
                </label>
              </div>
              
              <a href="#" className={styles.forgotPassword}>Forgot Password</a>
            </div>
            
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
      
      {/* Right side - Image with text */}
      <div className={styles.imageSection}>
        <div className={styles.imageContent}>
          <h2 className={styles.imageTitle}>Bring your ideas to life.</h2>
          <p className={styles.imageText}>
            Sign up for free and enjoy access to all features for 30 days. 
            No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;