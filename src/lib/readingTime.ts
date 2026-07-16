import readingTime from "reading-time";

export function getReadingTime(body: string) {
  return readingTime(body).text;
}
