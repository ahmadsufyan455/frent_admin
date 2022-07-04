import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { map } from 'rxjs/operators';
import { Booking } from 'src/app/models/booking.model';
 
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings?: Booking[];
  currentBooking?: Booking;
  currentIndex = -1;
  name = '';

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.retrieveBookingData();
  }

  refreshList(): void {
    this.currentBooking = undefined;
    this.currentIndex = -1;
    this.retrieveBookingData();
  }

  retrieveBookingData(): void {
    this.bookingService.getAllData().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log(data);
      this.bookings = data;
    });
  }

  setActiveBooking(booking: Booking, index: number): void {
    this.currentBooking = booking;
    this.currentIndex = index;
  }

}
