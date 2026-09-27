export const name="sticky_note_2-fill";
export const id="dl_103e73a5717698f193a5";
export const url=new URL("../icons/sticky_note_2-fill.svg?v=8881e13110f1757eb1b124ab9197cd77aeccbca08620ec5de377e08c104cff7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
