export const name="lucid_1-arrow-up-a-z";
export const id="dl_7d41c6f6c1f74dbfa5cf";
export const url=new URL("../icons/lucid_1-arrow-up-a-z.svg?v=86df4019d94200cf16303b3012a448a55d2f0617b0a84d5265f098e21e546e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
