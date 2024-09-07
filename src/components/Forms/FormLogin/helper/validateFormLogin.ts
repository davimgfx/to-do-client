// src/components/auth/helper/validateForm.ts

interface Errors {
    name?: string[];
    email?: string[];
    password?: string[];
    [key: string]: string[] | undefined;
  }
  
  export function validateForm(data: FormData): { isValid: boolean, validationErrors: Errors } {
    const validationErrors: Errors = {};
  
    const email = data.get('email') as string;
    const password = data.get('password') as string;
  
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      validationErrors.email = ['Digite um e-mail válido'];
    }
  
    if (!password || password.length < 6) {
      validationErrors.password = ['A senha deve ter pelo menos 6 caracteres'];
    }
  
    return { 
      isValid: Object.keys(validationErrors).length === 0, 
      validationErrors 
    };
  }
  