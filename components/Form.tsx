import React, { useState } from 'react';
import styles from '@/styles/Home.module.scss';
import { Button, FluidForm, FormGroup, RadioButton, RadioButtonGroup, Stack, TextInput } from '@carbon/react';


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

                    <FormGroup
                        legendId="form-group-1"
                        legendText=""
                        style={{
                            maxWidth: '400px'
                        }}
                    >
                        <Stack gap={7}>
                            <TextInput
                                id="one"
                                labelText="Email"
                            />
                            <TextInput
                                id="two"
                                labelText="Password"
                            />

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

                            {/* <button type="submit" className={styles.loginButton}>
                                Login
                            </button> */}



                            <Button onClick={handleSubmit} kind="secondary" className={styles.loginButton} size='lg'>
                                Submit
                            </Button>
                        </Stack>
                    </FormGroup>

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