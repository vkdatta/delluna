export const name="twitter-logo-light";
export const id="dl_7ab8a48456ec8de2f258";
export const url=new URL("../icons/twitter-logo-light.svg?v=ed46b9c4c8e7c933853a8ec6f2496b4e2d4c7d3c1c3775aeeccc14e438b3e816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
