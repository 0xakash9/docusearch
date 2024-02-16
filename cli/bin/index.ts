#! /usr/bin/env node
import clack from "@clack/prompts";

async function main() {
  clack.intro("select starter");

  const packagemanager = await clack.select({
    message: "Select Package manager",
    options: [
      { value: "pnpm", label: "pnpm" },
      { value: "npm", label: "npm" },
      { value: "yarn", label: "yarn" },
      { value: "bun", label: "bun" },
    ],
  });

  const selectdocsframework = await clack.select({
    message: "Select docs framework",
    options: [
      { value: "vocs", label: "vocs" },
      { value: "nextra", label: "nextra" },
      { value: "docusaurus", label: "docusaurus" },
    ],
  });
  console.log("root", process.cwd());

  console.log("packageManager", packagemanager);
  console.log("selectdocsframework", selectdocsframework);
}

main().catch(console.error);
