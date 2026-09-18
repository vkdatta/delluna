export const name="tile_small";
export const id="dl_19ddcbfda8f04819a617";
export const url=new URL("../icons/T/tile_small.svg?v=ffc20b7950ab824b6395cb623311d861e21b838496294ce299718114d9d4dfa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
