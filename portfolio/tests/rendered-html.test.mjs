import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}


test("renders the portfolio with real project and contact links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Trupti Lone — Software, Machine Learning &amp; AI Engineer<\/title>/);
  for (const repository of ["california-housing-end-to-end-with-scikit-learn", "technical-docs-assistant-rag-pipeline", "ai-realtor-voice-assistant", "multi-framework-agent-orchestrator", "smarthealth-mlops-case-study", "AWS-Hackathon", "AI-Mock-Interview-AI---Natural-Language-Processing-Project", "Data-Driven-Airbnb---Data-Analytics-and-Machine-Learning-Project"]) {
    assert.ok(html.includes(`href="https://github.com/TruptiLone/${repository}"`), repository);
  }
  assert.ok(html.indexOf("Academic projects") < html.indexOf("Featured projects"));
  assert.doesNotMatch(html, /From historical housing data to technical documents/);
  assert.match(html, /href="mailto:lonetrupti@gmail.com"/);
  assert.doesNotMatch(html, /hello@example|href="#"|34% lift|91% citation|18% lower|mcp-trading-simulator|Your site is taking shape/);
});
