import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";

test("wrangler.jsonc has build command if assets is used", async () => {
  const fileContent = await fs.readFile("wrangler.jsonc", "utf-8");
  // Basic parse (strip comments or just regex)
  // Since it's JSONC, we can just do a simple regex check for now,
  // or use a jsonc parser, but we don't have one installed directly here maybe.
  // We can just verify it contains '"command": "npx quartz build"' 
  // if it contains '"assets"'.
  
  const hasAssets = fileContent.includes('"assets"');
  if (hasAssets) {
    const hasBuildCommand = fileContent.includes('"command": "npx quartz build"');
    assert.ok(hasBuildCommand, "wrangler.jsonc must contain a build command ('\"command\": \"npx quartz build\"') when 'assets' is configured, to ensure Cloudflare Auto Deploy builds the site.");
  }
});
