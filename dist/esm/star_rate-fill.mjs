export const name="star_rate-fill";
export const id="dl_2c70ca260268b1060bc1";
export const url=new URL("../icons/star_rate-fill.svg?v=9c259b51f65a9262be56a5dc67650f6174555b83b76012ea35706c82990f3580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
