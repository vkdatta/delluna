export const name="balloon";
export const id="dl_91eaf487d8364b109eb9";
export const url=new URL("../icons/balloon.svg?v=c2a1c9e31247d759d467d2035b90d9ddc951f2dc6c429aa2c5e5f8e576b0b9b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
