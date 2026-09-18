export const name="looks_3-fill";
export const id="dl_ba142927aff145babe3b";
export const url=new URL("../icons/looks_3-fill.svg?v=a6d6d4eccc3fe13ad1a619071e3d2b8f5b7eef38b22c1e7c998bd4f8959daa1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
