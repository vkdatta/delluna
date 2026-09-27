export const name="cardholder-duotone";
export const id="dl_60bb83cb6ef540a882a1";
export const url=new URL("../icons/cardholder-duotone.svg?v=52652ee0e64a608ba0a0830f8e998ef8cabe5b047cd55f923165a8115af37adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
