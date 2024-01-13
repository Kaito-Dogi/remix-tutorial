export function sleep(ms: number) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // do nothing
  }
}
