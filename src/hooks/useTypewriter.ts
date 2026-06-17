import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], speed = 80, deleteSpeed = 50, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(t);
    }

    const current = words[wordIndex];

    if (!isDeleting) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        setIsPaused(true);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, isDeleting, isPaused, wordIndex, words, speed, deleteSpeed, pause]);

  return text;
}
