import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
    uid: number;
    iat: number;
    exp: number;
    
  }

export function decodeJWT(token: string): JwtPayload {
  const decodedToken = jwtDecode<JwtPayload>(token);
  return decodedToken;
}
