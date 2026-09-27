export const name="mobile_ticket-fill";
export const id="dl_4e0f0c157a18e94bc06a";
export const url=new URL("../icons/mobile_ticket-fill.svg?v=f4b36cf381490b96656b2e4c737a0c99986e3355eb8307ba650dae46dcceecb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
