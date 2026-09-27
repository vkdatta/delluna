export const name="note-pencil-light";
export const id="dl_c3db400753f14f86ae25";
export const url=new URL("../icons/note-pencil-light.svg?v=a92f0ec5b5b1f2a6fdde795b84dd599e323f8c05a03878cbd3ccbbb5228d0cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
