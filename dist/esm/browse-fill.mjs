export const name="browse-fill";
export const id="dl_c4198288a8c396de45d2";
export const url=new URL("../icons/browse-fill.svg?v=703f17fb1950e0e798b9b0dc2c1195092ab5dbcdb64d7e870311c5d7b99d5632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
