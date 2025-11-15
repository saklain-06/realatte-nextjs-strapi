import { NextResponse } from "next/server";

const STRAPI_URL = "http://localhost:1337/api/leads";

export async function POST(request) {
  try {
    const body = await request.json();

    // Expecting: { fullName, email, phone, projectTitle, message }
    const res = await fetch(STRAPI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // If you later add API token, add:
        // Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          fullName: body.fullName,
          email: body.email,
          phone: body.phone,
          projectTitle: body.projectTitle,
          message: body.message || "",
        },
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Strapi Error:", errorData);
      return NextResponse.json(
        { success: false, error: "Failed to save lead" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, lead: data.data });
  } catch (err) {
    console.error("API /leads error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
