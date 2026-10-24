"use client";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function SupabaseConnectionCheck() {
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data, error }) => {
      if (!error) {
        console.log("⚡ [Dhaka Founders] Supabase connection successful! Connected to:", process.env.NEXT_PUBLIC_SUPABASE_URL);
      } else {
        console.warn("⚠️ [Dhaka Founders] Supabase notice:", error.message);
      }
    });
  }, []);

  return null;
}
