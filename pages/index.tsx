import { useState } from 'react';
import LoginForm from '@/components/Form';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (email: string, password: string, rememberMe: boolean) => {
    try {
      setIsLoading(true);
      
      // Here you would typically call your authentication API
      console.log('Login attempt:', { email, password, rememberMe });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On successful login, redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Login | CubeFactory</title>
        <meta name="description" content="Login to CubeFactory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginForm onSubmit={handleLogin}  />
      </main>
      <footer>
        <p>© 2025 CubeFactory. All rights reserved.</p>
        <p>Created by Yash Kolte with ❤️</p>
      </footer>
    </>
  );
}
