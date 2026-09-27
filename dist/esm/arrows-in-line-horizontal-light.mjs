export const name="arrows-in-line-horizontal-light";
export const id="dl_630dc3cc35a54d2c9351";
export const url=new URL("../icons/arrows-in-line-horizontal-light.svg?v=6508b048c463854a8bcd2e746a2b753b931d556daaa8e3ea94e22fde91ee5aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
