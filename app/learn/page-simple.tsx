"use client";
import { useState } from 'react';
import Link from "next/link";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Learn Full-Stack Development</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Master HTML, CSS, JavaScript, React, and Node.js
        </p>
      </section>
    </div>
  );
}
