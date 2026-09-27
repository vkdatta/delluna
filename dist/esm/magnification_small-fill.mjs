export const name="magnification_small-fill";
export const id="dl_0a9ba43c0e060dbc9aff";
export const url=new URL("../icons/magnification_small-fill.svg?v=b7a31492bab516ac0af0f987069e2aebc0b6e447f390d1cd32ce04f6931df12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
