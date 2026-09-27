export const name="lucid_3-plane";
export const id="dl_f8b90b0e829e4892a249";
export const url=new URL("../icons/lucid_3-plane.svg?v=3a58e01001071cec0ae0077f67406b7431c348dd8ce8dd07270f699f5275b369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
