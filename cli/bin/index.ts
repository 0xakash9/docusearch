import { intro } from "@clack/prompts";

async function main() {
  intro("select starter");
}

main().catch(console.error);
