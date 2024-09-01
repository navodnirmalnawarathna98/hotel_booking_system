// app/models/Room.js
import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  price : {
    type: String,
    required: true,
  },
  acType : {
    type: String,
    required: true,
  },
  smallDesc : {
    type: String,
    required: true,
  },
  longDesc : {
    type: String,
    required: true,
  },
  bedCount : {
    type: String,
    required: true,
  },
  guestCount : {
    type: String,
    required: true,
  },
  mainImage : {
    type: String,
    required: true,
  },
  images : {
    type: Array,
    required: true,
  },
  amenities : {
    type: Array,
    required: true,
  }
});

export default mongoose.models.Room || mongoose.model('Room', RoomSchema);
