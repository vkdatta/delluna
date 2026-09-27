export const name="pinboard-fill";
export const id="dl_ca2fbfe20081b4bda3d7";
export const url=new URL("../icons/pinboard-fill.svg?v=57a38cf5d1efce217ee65101aa62e95cd4d52737fa89bd4d699bc5fec66c51ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
