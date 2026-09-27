export const name="lucid_1-badge-minus";
export const id="dl_4e48823cd578451e883d";
export const url=new URL("../icons/lucid_1-badge-minus.svg?v=72f5bb2df6345d5b48198496038a1b04510aa27d2739896a0bf5af1cf2ed7a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
