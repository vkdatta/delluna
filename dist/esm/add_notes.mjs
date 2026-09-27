export const name="add_notes";
export const id="dl_2a22e6b7ab68d93bdf5a";
export const url=new URL("../icons/add_notes.svg?v=83751cf944b41a95c0dc71544a8dd74ebc3320e7cac15cb191f42dafc691d0ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
