import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Motor } from '../models/motor.model';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  private dbPath = '/MotorData';
  motorDataRef: AngularFirestoreCollection<Motor>;
  myNum = 1800016074;

  constructor(private db: AngularFirestore) { 
    this.motorDataRef = db.collection(this.dbPath);
   }

   getAllMotor(): AngularFirestoreCollection<Motor> {
    return this.motorDataRef;
   }

   addMotor(motor: Motor): any {
    return this.motorDataRef.doc((this.myNum++).toString()).set(({...motor}));
   }

   updateMotor(id: string, data: any): Promise<void> {
    return this.motorDataRef.doc(id).update(data);
   }

   deleteMotor(id: string): Promise<void> {
    return this.motorDataRef.doc(id).delete();
   }
}
