export const name="stylus_note-fill";
export const id="dl_e6d5b2ab9b0824fff32a";
export const url=new URL("../icons/stylus_note-fill.svg?v=d5f9769318ef774c5b39c47218a0cd7473b8c435b8b5428b8a8d12115a8b59d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
