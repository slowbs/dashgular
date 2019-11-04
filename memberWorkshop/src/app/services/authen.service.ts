import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthenService {
    private accessKey = 'ssKey';

    /** กำหนดค่า accessToken ไว้ใน browser */
    setAuthenticated(accessToken: string) : void {
        localStorage.setItem(this.accessKey, accessToken)
    }

    /** ดึงค่า accessToken ในความจำ browser ออกมา*/
    getAuthenticated(): string {
        return localStorage.getItem(this.accessKey);
    }

    /** ล้างค่า accessToken ที่อยู่ในความจำ browser */
    clearAuthenticated(): void {
        localStorage.removeItem(this.accessKey);
    }

}