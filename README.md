# booking-ingestion
A simple Node.js + Express API to ingest, process, and store booking data from various sources, supporting CRUD operations (except PUT).

# Features 
Create a new booking.
Featch all bookings ( with optional fillters for date and vender name)
Fetch a single booking by ID,
Detele a booking by ID,


# installation & Setup
1. Clone the repository
2. git clone https://github.com/rajnish-kumar-au26/booking-ingestion.git
3. cd booking-ingestion
4. npm install
5. setup .env file
6. npm start / npm run dev
7. server is runnning on http://localhost:6000

# Create a Booking
POST /api/bookings

Requested Body(Json)
{
    "bookingID": "A126",
    "customerName": "Hari Ram",
    "bookingDate": "2025-02-13",
    "amount":500,
    "venderDetails": {
        "id":3,
        "name": "Taj Hotel",
        "location": "Delhi"
    }
}

# Fetch All Bookings (with optinoal fillters)
GET /api/bookings or /api/bookings?date&venderName=Taj Hotel


# Fetch a Single Booking by ID
GET /api/bookings/:id (id must be mongo id like = 67ae0a230678e23eb4879d7c)


Delete a Booking

DELETE /api/booking/:id (id must be mongo id like = 67ae0a230678e23eb4879d7c)

# Also atteched with Postman API Collections
