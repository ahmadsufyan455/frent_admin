var myNum = 1800016074;
export class Motor {
    id?: string;
    motorId?: String = (myNum++).toString();
    image?: string;
    type?: string;
    description?: string;
    price?: number;
    quantity?: number;
    status?: boolean = true;
}
