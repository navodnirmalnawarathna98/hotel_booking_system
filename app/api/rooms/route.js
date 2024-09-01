// app/api/rooms/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/connect-db';
import Room from '@/models/Room';

export async function POST(req) {
  await connectDB();

  try {
    const { 
      roomNumber, 
      roomType, 
      price, 
      acType, 
      smallDesc, 
      longDesc, 
      bedCount, 
      guestCount, 
      mainImage, 
      images, 
      amenities 
    } = await req.json();

    const newRoom = new Room({ 
      roomNumber, 
      roomType, 
      price, 
      acType, 
      smallDesc, 
      longDesc, 
      bedCount, 
      guestCount, 
      mainImage, 
      images, 
      amenities 
    });

    await newRoom.save();
    return NextResponse.json({ message: 'Room added successfully', room: newRoom });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding room', error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();

  try {
    const rooms = await Room.find({});
    return NextResponse.json(rooms);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching rooms', error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const roomId = searchParams.get('id');

  if (!roomId) {
    return NextResponse.json({ message: 'Room ID not provided' }, { status: 400 });
  }

  try {
    const { 
      roomNumber, 
      roomType, 
      price, 
      acType, 
      smallDesc, 
      longDesc, 
      bedCount, 
      guestCount, 
      mainImage, 
      images, 
      amenities 
    } = await req.json();

    const updatedRoom = await Room.findByIdAndUpdate(
      roomId, 
      { 
        roomNumber, 
        roomType, 
        price, 
        acType, 
        smallDesc, 
        longDesc, 
        bedCount, 
        guestCount, 
        mainImage, 
        images, 
        amenities 
      }, 
      { new: true }
    );

    if (!updatedRoom) {
      return NextResponse.json({ message: 'Room not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Room updated successfully', room: updatedRoom });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating room', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const roomId = searchParams.get('id');

  if (!roomId) {
    return NextResponse.json({ message: 'Room ID not provided' }, { status: 400 });
  }

  try {
    const deletedRoom = await Room.findByIdAndDelete(roomId);

    if (!deletedRoom) {
      return NextResponse.json({ message: 'Room not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Room deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting room', error: error.message }, { status: 500 });
  }
}
