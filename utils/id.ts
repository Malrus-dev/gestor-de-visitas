export function gerarId(): string {
    return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}
  