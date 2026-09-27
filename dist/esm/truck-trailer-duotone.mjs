export const name="truck-trailer-duotone";
export const id="dl_c953320783103af26060";
export const url=new URL("../icons/truck-trailer-duotone.svg?v=7adbed1f1bd2c55de528a1c35d24159dac1e8425810ee279873d180622e1fb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
