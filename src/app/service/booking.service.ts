import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private dbPath = '/BookingData';
  bookingDataRef: AngularFirestoreCollection<Booking>;

  constructor(private db: AngularFirestore) { 
    this.bookingDataRef = db.collection(this.dbPath);
   }

   getAllData(): AngularFirestoreCollection<Booking> {
    return this.bookingDataRef;
   }

   updateBooking(id: string, data: any): Promise<void> {
    return this.bookingDataRef.doc(id).update(data);
   }
}
