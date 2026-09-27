export const name="lucid_1-badge-minus";
export const id="dl_4e48823cd578451e883d";
export const url=new URL("../icons/lucid_1-badge-minus.svg?v=2a444abae3f2acb3ff9180476c4e528f215eb1395a9877d77c87329aeca75058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
