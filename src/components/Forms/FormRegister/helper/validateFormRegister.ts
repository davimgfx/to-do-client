// src/components/auth/helper/validateForm.ts

interface Errors {
    name?: string[];
    email?: string[];
    password?: string[];
    [key: string]: string[] | undefined;
  }
  
  export function validateForm(data: FormData): { isValid: boolean, validationErrors: Errors } {
    const validationErrors: Errors = {};
  
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
  
    if (!name || name.length < 3) {
      validationErrors.name = ['O nome deve ter pelo menos 3 caracteres'];
    }
  
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
  