export const name="lucid_1-baby";
export const id="dl_543cc6346d534ec4a129";
export const url=new URL("../icons/lucid_1-baby.svg?v=f03e01a600a89d0a9ebe1cd453c0bfbe8b0d0bbbfe76f241794edcba8eb4db67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
