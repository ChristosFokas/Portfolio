import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    console.log("Recipient Email:", email);
    console.log("Recipient Name:", name);

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${email} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `You got new message from ${email}`,
      html: `<p>You have a new contact from ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    console.log("Sending email to yourself...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent to yourself successfully.");

    const confirmMailOptions = {
      from: `Christos Fokas <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me",
      html: `<p>Hello ${name},</p>
             <p>Thank you for reaching out. I have received your message and will get back to you soon!</p>`,
    };

    console.log("Sending confirmation email to user...");
    await transporter.sendMail(confirmMailOptions);
    console.log("Confirmation email sent successfully.");

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
