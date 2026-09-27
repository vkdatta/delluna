export const name="lucid_1-arrow-up-a-z";
export const id="dl_7d41c6f6c1f74dbfa5cf";
export const url=new URL("../icons/lucid_1-arrow-up-a-z.svg?v=8fefa9838b352b5e653b5b603b0ba1e32070f1a4ef95f1aef75977cc5885da31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
