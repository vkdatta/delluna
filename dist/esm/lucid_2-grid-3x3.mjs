export const name="lucid_2-grid-3x3";
export const id="dl_602e1a5272a44fa4bddf";
export const url=new URL("../icons/lucid_2-grid-3x3.svg?v=5462ba3bbe54b820ecc26ed15637a62f5a92868735cd03fc10b377079fd19c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
