export const name="bag-simple-fill";
export const id="dl_cd53db39c03c4d1fa412";
export const url=new URL("../icons/bag-simple-fill.svg?v=3ad1e6da4c6d478e0c263c2a199bd4679061e20ff0821d3d4a906d8163fbaae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
