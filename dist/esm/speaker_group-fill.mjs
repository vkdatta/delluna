export const name="speaker_group-fill";
export const id="dl_c935d57cad2ca62fc523";
export const url=new URL("../icons/speaker_group-fill.svg?v=a7a50e23d8f85cf307d791948ee9cdacb3aee24540d632b7a6b1ef351a56c856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
