import { Address } from "./address.model"
import { BaseModel } from "./base.model"

export interface User {
    userID:number;
    firstName:string,
    lastName:string,
    mobileNumber:string,
    role:string
    address:Address
}