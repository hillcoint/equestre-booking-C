export type RideStatus = "scheduled" | "blocked";

export interface Ride {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  level: string;
  capacity: number;
  price: number;
  status: RideStatus;
}

export interface Booking {
  id: string;
  rideId: string;
  name: string;
  phone: string;
  email: string;
  people: number;
  level: string;
  equipment: string;
  createdAt: string;
}
