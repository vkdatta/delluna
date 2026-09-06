export const name="lucid_1-arrow-up-wide-narrow";
export const id="dl_5860cefb1b1243c6b761";
export const url=new URL("../icons/lucid_1-arrow-up-wide-narrow.svg?v=16490142df8a1b2eca27cb5e7f3a5b59c1d32e2a96cfe34473f19a0c2fa89f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
