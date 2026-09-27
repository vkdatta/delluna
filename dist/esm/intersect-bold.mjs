export const name="intersect-bold";
export const id="dl_5f6c6cb2b67141bbba05";
export const url=new URL("../icons/intersect-bold.svg?v=d74940023d000b10f1ca559e5486fe756d247596e4c68353e66c2f53b804edbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
