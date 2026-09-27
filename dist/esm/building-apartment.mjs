export const name="building-apartment";
export const id="dl_0d708e9c47ad48b4a7a7";
export const url=new URL("../icons/building-apartment.svg?v=01da5144cc9cf46c97170a781ba2b2d5821668571c3394a8c32ec57fe3911f6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
