export const name="vertical_shades";
export const id="dl_04e322f41216fdb305d0";
export const url=new URL("../icons/vertical_shades.svg?v=741ee49ee37ef23fd4a15a063fc463d419e32658e8d003770f923210604d04d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
