import { useEffect } from "react";

/**
 * Simple hook to set document.title and restore previous title on unmount.
 * Usage: useDocumentTitle("Page — AmbiSmart");
 */
export default function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    if (title) document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
