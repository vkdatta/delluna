export const name="earbuds-fill";
export const id="dl_51da3367fc55474deec3";
export const url=new URL("../icons/earbuds-fill.svg?v=4a8708f35491d7efdf13df335d4e11e07997e4dc875e2ec3c37d49f395ae132a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
