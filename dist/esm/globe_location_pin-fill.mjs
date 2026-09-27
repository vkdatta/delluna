export const name="globe_location_pin-fill";
export const id="dl_a3b26656341683647858";
export const url=new URL("../icons/globe_location_pin-fill.svg?v=36582df5bbb4b0c5e07753c3b3b914b0cd047f2e10db57635c811eff43223fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
